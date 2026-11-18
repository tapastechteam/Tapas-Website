import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';
const root=process.cwd();
fs.mkdirSync('src/styles',{recursive:true});
fs.mkdirSync('.style-cache',{recursive:true});
execFileSync(process.execPath,['node_modules/tailwindcss/lib/cli.js','-i','src/app/globals.css','-c','tailwind.config.ts','-o','.style-cache/blue.css'],{stdio:'inherit'});
execFileSync(process.execPath,['tools/team-styles/node_modules/@tailwindcss/cli/dist/index.mjs','-i','tools/team-styles/input.css','-o','.style-cache/team.css'],{stdio:'inherit'});
function isolate(input,scope,flatten=false){
  const ast=postcss.parse(input);
  if(flatten) ast.walkAtRules('layer',at=>{if(at.nodes)at.replaceWith(...at.nodes);else at.remove();});
  ast.walkRules(rule=>{
    // Nested selectors already inherit their isolated top-level selector.
    for(let parent=rule.parent;parent;parent=parent.parent){
      if(parent.type==='rule'||parent.type==='atrule'&&/keyframes$/.test(parent.name))return;
    }
    const result=[];
    selectorParser(selectors=>selectors.each(sel=>{
      let replaced=false;
      sel.walk(node=>{
        if(node.type==='tag'&&['html','body'].includes(node.value)||node.type==='pseudo'&&[':root',':host'].includes(node.value)){
          node.replaceWith(selectorParser.className({value:scope}));replaced=true;
        }
      });
      const text=sel.toString().trim();
      if(replaced){result.push(text);return;}
      result.push('.'+scope+' '+text);
      if(!sel.nodes.some(n=>n.type==='combinator')){
        if(text==='*')result.push('.'+scope);
        else if(sel.first?.type==='class'||sel.first?.type==='pseudo')result.push('.'+scope+text);
      }
    })).processSync(rule.selector);
    rule.selector=[...new Set(result)].join(',');
    if(scope==='blue-source') {
      rule.selector=selectorParser(selectors=>selectors.each(sel=>{
        // Zero-specificity exclusion keeps Home styling identical while isolating Gallery content.
        const exclusion=selectorParser().astSync(':not(:where(.tapas-gallery, .tapas-gallery *))').first.first;
        const pseudoElement=sel.nodes.find(n=>n.type==='pseudo'&&n.value.startsWith('::'));
        if(pseudoElement)sel.insertBefore(pseudoElement,exclusion.clone());
        else sel.append(exclusion.clone());
      })).processSync(rule.selector);
    }
  });
  return ast.toString();
}
fs.writeFileSync('src/styles/blue.css',isolate(fs.readFileSync('.style-cache/blue.css','utf8'),'blue-source'));
fs.writeFileSync('src/styles/team.css',isolate(fs.readFileSync('.style-cache/team.css','utf8'),'team-source',true));
// Gallery's supplied stylesheet includes an unused Home variant: retain only Gallery selectors.
const gallery=postcss.parse(fs.readFileSync('integration-sources/gallery-original.css','utf8'));
gallery.walkRules(rule=>{
  if(rule.selector.includes('.tapas-home-grid')){
    const selectors=selectorParser().astSync(rule.selector).nodes.filter(sel=>!sel.toString().includes('.tapas-home-grid')).map(sel=>sel.toString());
    if(selectors.length)rule.selector=selectors.join(',');else rule.remove();
  }
});
fs.writeFileSync('src/modules/gallery/styles/tapas.css',gallery.toString());
console.log('Generated isolated Tailwind 3 / Tailwind 4 and Gallery styles.');
