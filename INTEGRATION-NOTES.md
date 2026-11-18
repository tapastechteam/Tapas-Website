# Integration notes

## Shared-shell correction

The user's requested correction is implemented in this revision. Home's shared header/navbar/footer now persists across Home, About, Team, Events, Gallery, Resources, Join and event/album detail views. Gallery no longer switches to standalone site chrome. Its page content, photographs, gallery grids, slideshow, viewer, accent note and styling remain. Internal Gallery/album/Home-grid anchors now use Next client routing so navigating to Resources or another page does not reload the whole site or repeat the splash.

The previous delivered ZIP was preserved at ../TAPAS-Integrated-before-shared-shell.zip; editable backups of changed files are in ../TAPAS-shared-shell-backup/. The updated ZIP keeps its original delivery path.

Build and route/asset checks passed again. Browser checks at desktop 1280px and mobile 390px navigated through all seven pages: each had one common Home header and footer, no recurring splash and no horizontal page overflow. Browser Back/Forward, Gallery albums, event details and Home-grid-to-album navigation retained the same shell. No browser console warnings/errors were observed. Results are in verification/shared-shell-navigation.json and updated screenshots use shared-shell-* names. Earlier screenshots record the prior integration revision and are retained as history.

## Delivered behavior

The complete local React website uses Next.js 15.5.29 and React 19 with seven primary routes: /, /about, /team, /events, /gallery, /resources and /join. All retain their assigned source markup, wording and styling. The original Home file, 23 of its 24 gallery-grid handoff files, Resources components/data, feedback form and Gallery dataset/shared components are byte-identical to their assigned sources. Other page modules retain JSX and data contracts with only the integration adjustments below.

Navigation links connect all seven pages inside Home’s persistent navbar and footer. Gallery’s redundant site header was removed; its accent-information footer content is preserved as a section above the common Home footer. The legacy /meditation route still redirects to the supplied About page’s existing #how-to-attend section; no standalone Meditation design was supplied. Home photo-grid tiles open matching /gallery?event=… albums. Events has 31 individual detail pages; Gallery has 14 albums, including all 13 event IDs used by the Home grid.

## Integration adjustments

- Every page and detail view uses Home’s existing GitHub navbar, initial loader and footer. Gallery’s content is mounted inside that same persistent shell. Its original content styles remain isolated from the blue theme’s preflight and utilities. Gallery and Home-grid internal links use next/link; external links retain their source behavior. The initial splash appears only on a fresh document load and does not recur during internal navigation. Team and Events retain their supplied main elements inside the shared site wrapper.
- Home, Events, Gallery and Team datasets live in separate modules. No event counts, descriptions, titles, testimonials or team membership were reconciled or rewritten.
- Events assets are served from /images/events-page/ to prevent filename collisions with Home images; file bytes are unchanged. Gallery uses its original statically imported WebP assets. All required Team and About images are included.
- Tailwind 3 and the original blue theme are compiled into styles scoped to .blue-source. Team's Tailwind 4 design is compiled separately and scoped to .team-source; its original utilities, preflight and theme rules are retained without affecting other pages. The standalone Team page uses no shadcn UI or animation-library classes, so those unused style imports are omitted from the isolated compiler input. Generated CSS is included; source templates and compiler script are retained for editing. Gallery's original selectors are retained, with unused selectors targeting a duplicate Home grid removed to avoid cross-page effects. Font families and all nine Tapas colors are provided.
- A Suspense wrapper around Events' useSearchParams supports its production build without changing visible content. Gallery's event query is passed by the route into its existing eventId interface, supporting direct links and refreshes.
- About's FAQ source mixed “Who can join” and “Who Can Join” in its internal type/filter. Both displayed spellings remain unchanged; the type accepts both and the condition follows the original filter button value. Join's two literal apostrophes are escaped in JSX with identical displayed text. About's raw // editorial text is explicitly represented as a JSX string, preserving it as displayed source content while passing lint. No editorial content was deleted.

## Verification performed

Production build passed compilation, lint/type validation and generation of 42 static pages; Gallery is rendered on demand. Four nonblocking warnings remain in the supplied image/animation components: three plain-img recommendations and one ref-cleanup heuristic warning. Those components were preserved.

HTTP checks passed for 57 page, event, album and filter URLs and 270 public/built-media URLs. The invalid event route returns 404. All 139 generated Events photo references exist. All 13 Home-grid event IDs match Gallery albums. The Meditation redirect resolves to /about#how-to-attend. Results: verification/http-checks.json.

23 source-contract comparisons and 230 copied asset comparisons passed, with 103 saved GitHub snapshot blob hashes rechecked. Home source and handoff were compared with the prior verified Home-grid copy. Results: verification/source-preservation.json. Original archive/review/source folders were read only.

Browser review at 1280px desktop and 390px mobile covered all seven pages, with no horizontal page overflow observed. Sampled Home font families/sizes/line-heights, colors, spacing and widths matched the prior verified Home copy. About filtering/FAQ expansion, Team year tabs and keyboard navigation, Events filtering/detail links/photo navigation and close, Gallery filtering/slideshow/albums/photo navigation and close, Resources category filtering, feedback required-field/email validation, mobile menu navigation and Home-grid-to-Gallery album navigation were exercised. No console warnings/errors were captured during this review. Screenshots are included in verification/.

## Source limitations intentionally retained

This is a focused build and browser review, not a pixel-by-pixel comparison of every state or exhaustive cross-browser testing. Original content includes an About editorial note beginning “//get in touch content”, inconsistent event dates/counts between independently authored pages, and some event participant strings followed by an additional “students” label. They remain unchanged as requested. Existing source accessibility/motion behavior was retained; no broad redesign or accessibility refactor was undertaken.

Feedback uses the supplied mailto workflow and the user's email application; it has no server-side sending/storage service. Validation was tested without sending a message or launching a valid mail submission. Fonts, YouTube embeds and external social/resource links require internet access. External registrations, link destinations and event factual claims were not independently verified.

No original project, archive, saved review or previous Home-grid working copy was edited. No GitHub write, commit, push, publication or deployment was performed.
