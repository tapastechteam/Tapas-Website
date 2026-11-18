# TAPAS — integrated local website

Seven assigned pages inside Home’s persistent header, navigation and footer, in one React / Next.js application: Home, About, Team, Events, Gallery, Resources and Join. Individual past-event pages and Gallery albums are included. Internal navigation, including Gallery albums and Home-grid links, uses Next client routing without repeating the initial splash. Originals and GitHub were not modified.

## Run locally

Use Node.js 22 or later. In this project folder:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run setup:styles
npm run build
npm run start -- --hostname 127.0.0.1 --port 3110
```

Open http://127.0.0.1:3110 . For development, use `npm run dev -- --hostname 127.0.0.1 --port 3110` instead of building/starting. The included generated styles are rebuilt by the prebuild/predev tasks. `setup:styles` installs the isolated Team styling toolchain; it does not change the main application's Tailwind version.

With the server running, `npm run verify:local` checks all page/event/album/filter URLs and local assets. Override the origin with TAPAS_TEST_URL if using another port. `npm run typecheck` checks TypeScript.

## Source map

| Page | Assigned source |
| --- | --- |
| Home | GitHub revision 47d46749220e39f218c93df4dcb6388a30772be2, plus the verified TAPAS-Home-Grid-React handoff |
| About / Join / feedback | abt section.zip |
| Team | lumina-main.zip |
| Events / event details | Tapas-WebsiteBK-events.zip |
| Resources | Complete Resources implementation in tapasnewone.zip |
| Gallery / albums | TAPAS-React/src/components/GalleryPage.jsx and its dependencies |

See INTEGRATION-NOTES.md for implementation boundaries, tests and source caveats. Screenshots and verification results are in verification/.
