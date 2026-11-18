'use client';

import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { events, homeOpening, homeFeatured, photoSource, albumUrl } from '../data/events';
import { Photo, useMedia, useRotation } from './shared';
import '../styles/tapas.css';

const layouts = [
  { widths: [600, 426, 310], heights: [328, 245, 300], pair: 50, lead: 0 },
  { widths: [320, 405, 611], heights: [300, 255, 327], pair: 48, lead: 5 },
  { widths: [375, 555, 406], heights: [222, 330, 255], pair: 56, lead: 2 },
  { widths: [458, 341, 537], heights: [259, 211, 335], pair: 46, lead: 5 },
  { widths: [476, 492, 368], heights: [348, 249, 205], pair: 47, lead: 0 },
];
const photos = events.flatMap(event => event.home.map(photo => ({ ...photo, event })));
const byId = new Map(photos.map(photo => [photo.id, photo]));
const opening = [...new Set([...homeOpening.map(id => byId.get(id)).filter(Boolean), ...photos])].slice(0, 7);
const featured = new Set(homeFeatured);

function shuffle(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function GridTile({ photo, incoming, index, lead, galleryHref, reduced }) {
  const imageRef = useRef(null);
  useEffect(() => {
    if (!incoming || reduced) return;
    const animation = imageRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1050, delay: incoming.order * 135,
      easing: 'cubic-bezier(.33,0,.28,1)', fill: 'both',
    });
    return () => animation.cancel();
  }, [incoming, reduced]);
  const visiblePhoto = photo;
  return <Link className="grid-tile"
    href={visiblePhoto.event.recapUrl || albumUrl(visiblePhoto.event, galleryHref)}
    aria-label={visiblePhoto.alt + ' · View event: ' + visiblePhoto.event.title}
    data-featured={index === lead ? '' : undefined}
    data-mobile={index === 0 ? 'lead' : [2, 5].includes(index) ? 'support' : undefined}>
    <Photo photo={photo} />
    {incoming && <img ref={imageRef} className="incoming" src={photoSource(incoming.photo)}
      alt="" aria-hidden="true" decoding="async"
      style={{ objectPosition: incoming.photo.position || '50% 50%' }} />}
    <span className="tile-caption"><strong>{visiblePhoto.event.title}</strong><small aria-hidden="true">View event ↗</small></span>
  </Link>;
}

export default function HomePhotoGrid({ galleryHref = '/gallery' }) {
  const grid = useRef(null);
  const reduced = useMedia('(prefers-reduced-motion: reduce)');
  const compact = useMedia('(max-width: 650px)');
  const [view, setView] = useState({ photos: opening, layout: 0, incoming: [] });
  const current = useRef(view);
  const queue = useRef(photos.filter(photo => !opening.includes(photo)));
  const remaining = useRef([1, 2, 3, 4]);
  const active = useRef(false);
  const generation = useRef(0);
  const completion = useRef();
  useEffect(() => {
    active.current = true;
    return () => {
      active.current = false;
      generation.current++;
      clearTimeout(completion.current);
    };
  }, []);

  const advance = useCallback(async () => {
    if (current.current.incoming.length) return;
    const request = ++generation.current;
    if (!remaining.current.length) {
      remaining.current = shuffle([0, 1, 2, 3, 4]);
      if (remaining.current[0] === current.current.layout) remaining.current.push(remaining.current.shift());
    }
    const layout = remaining.current.shift();
    const lead = compact ? 0 : layouts[layout].lead;
    const approved = [[5, 2, 4], [2, 3, 6], [5, 1, 2], [0, 4, 6]];
    const slots = compact ? [0, 2, 5] : approved[layout - 1] ||
      [lead, ...shuffle(opening.map((_, i) => i).filter(i => i !== lead)).slice(0, 2)];
    const occupied = new Set(current.current.photos);
    const next = slots.flatMap((slot, order) => {
      if (!queue.current.length) queue.current = shuffle(photos.filter(photo => !occupied.has(photo)));
      let index = queue.current.findIndex(photo => !occupied.has(photo) && (order !== 0 || featured.has(photo.id)));
      if (index < 0) index = queue.current.findIndex(photo => !occupied.has(photo));
      if (index < 0) return [];
      const photo = queue.current.splice(index, 1)[0];
      occupied.add(photo);
      return [{ slot, photo, order }];
    });
    const decoded = await Promise.all(next.map(async entry => {
      const img = new Image();
      img.src = photoSource(entry.photo);
      try { await img.decode(); return entry; } catch { return null; }
    }));
    if (!active.current || request !== generation.current) return;
    const incoming = decoded.filter(Boolean);
    current.current = { ...current.current, layout, incoming };
    setView(current.current);
    completion.current = setTimeout(() => {
      if (!active.current || request !== generation.current) return;
      const updated = current.current.photos.slice();
      incoming.forEach(entry => { updated[entry.slot] = entry.photo; });
      current.current = { photos: updated, layout, incoming: [] };
      setView(current.current);
    }, reduced ? 0 : 1450);
  }, [compact, reduced]);
  useRotation(grid, advance, reduced || photos.length <= opening.length);
  const layout = layouts[view.layout];
  const renderTile = index => <GridTile key={index} photo={view.photos[index]}
    incoming={view.incoming.find(entry => entry.slot === index)}
    index={index} lead={layout.lead} galleryHref={galleryHref} reduced={reduced} />;
  const columnStyle = index => ({
    '--top': layout.heights[index] + 'fr',
    '--bottom': (475 - layout.heights[index]) + 'fr',
  });

  return <section className="tapas-home-grid" aria-label="TAPAS in pictures">
    <div className="wrap">
      <div className="grid-intro">
        <h2 className="grid-title">TAPAS in pictures</h2>
        <p>Moments from campus sessions, workshops and events.</p>
      </div>
      <div ref={grid} className="photo-grid" aria-label="Campus event photos"
        style={{ '--left': layout.widths[0] + 'fr', '--middle': layout.widths[1] + 'fr', '--right': layout.widths[2] + 'fr' }}>
        <div className="grid-column" style={columnStyle(0)}>{[0, 1].map(renderTile)}</div>
        <div className="grid-column" style={columnStyle(1)}>
          {renderTile(2)}
          <div className="grid-pair" style={{ '--first': layout.pair + 'fr', '--second': (100 - layout.pair) + 'fr' }}>
            {[3, 4].map(renderTile)}
          </div>
        </div>
        <div className="grid-column" style={columnStyle(2)}>{[5, 6].map(renderTile)}</div>
      </div>
      <div className="grid-actions"><Link className="action-link" href={galleryHref}>Explore Gallery <span aria-hidden="true">↗</span></Link></div>
      <noscript><p>Enable JavaScript to view the changing photo grid.</p></noscript>
    </div>
  </section>;
}
