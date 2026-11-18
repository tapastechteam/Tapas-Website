# TAPAS Home photo grid

Copy this whole folder into the Home project, for example as `src/tapas-home-grid`. Keep the four folders together so the imports and photo paths resolve.

Import and insert the component where the Home page should show the grid.

```jsx
import HomePhotoGrid from './tapas-home-grid/components/HomePhotoGrid';

export default function HomePage() {
  return (
    <main>
      {/* The team's existing Home sections */}
      <HomePhotoGrid galleryHref="/gallery" />
    </main>
  );
}
```

Use the actual Gallery route in `galleryHref`. Explore Gallery goes there. Each photo opens that route with its event ID, for example `/gallery?event=wellness-fest-2025`. If the team wants a photo to open its event recap instead, add `recapUrl` to that event in `data/events.js`.

The component includes the heading, introductory text, animated grid and Explore Gallery link. The Home page supplies the surrounding header and logo.

React 18 or 19 and support for JSX, CSS and WebP imports are required. No animation library is needed. The styles are scoped under `.tapas-home-grid`. In Next.js Pages Router, import `styles/tapas.css` from `pages/_app.jsx` and remove its import from `HomePhotoGrid.jsx`.

The 19 event photos and their data are included. Typography, colours and layout match the current TAPAS preview. The grid shows seven photos on desktop and three on phones, changing up to three photos every six seconds across five layouts.
