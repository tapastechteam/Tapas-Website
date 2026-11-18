'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { events, albumUrl } from '../data/events';
import Link from 'next/link';
import { Photo, useMedia, useRotation, useSwipe } from './shared';
import '../styles/tapas.css';

const slides = events.some(event => event.featured) ? events.filter(event => event.featured) : events;
const moments = events.flatMap(event => event.moments.map(photo => ({ event, photo })));
const years = [...new Set(events.map(event => event.year).filter(Boolean))].sort((a, b) => b.localeCompare(a));

function PhotoViewer({ viewer, setViewer, galleryHref }) {
  const dialog = useRef(null);
  const entry = viewer?.entries[viewer.index];
  const move = useCallback(step => {
    setViewer(value => {
      if (!value) return value;
      const index = value.index + step;
      return index < 0 || index >= value.entries.length ? value : { ...value, index };
    });
  }, [setViewer]);
  const swipe = useSwipe(move);
  const open = Boolean(viewer);
  useEffect(() => {
    if (open && !dialog.current.open) dialog.current.showModal();
    if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  useEffect(() => () => {
    if (dialog.current?.open) dialog.current.close();
  }, []);
  return <dialog id="photo-viewer" ref={dialog} aria-labelledby="viewer-caption"
    onClose={() => setViewer(null)}
    onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}
    onKeyDown={event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
      }
    }}>
    {entry && <div className="viewer-shell">
      <div className="viewer-top">
        <span>{viewer.index + 1} / {viewer.entries.length}</span>
        <button className="circle" type="button" aria-label="Close photo" autoFocus onClick={() => dialog.current.close()}>×</button>
      </div>
      <div className="viewer-media" {...swipe}><Photo photo={entry.photo} /></div>
      <div className="viewer-bottom">
        <div><p id="viewer-caption">{entry.event.title}</p>
          {!viewer.insideAlbum && <Link href={albumUrl(entry.event, galleryHref)}>See all photos from this event →</Link>}
        </div>
        <div className="arrows">
          <button className="circle" type="button" aria-label="Previous photo" disabled={viewer.index === 0} onClick={() => move(-1)}>←</button>
          <button className="circle" type="button" aria-label="Next photo" disabled={viewer.index === viewer.entries.length - 1} onClick={() => move(1)}>→</button>
        </div>
      </div>
    </div>}
  </dialog>;
}

function Moment({ entry, entries, index, insideAlbum = false, setViewer }) {
  return <button className="moment" type="button"
    onClick={() => setViewer({ entries, index, insideAlbum })}>
    <Photo photo={entry.photo} loading="lazy" />
  </button>;
}

function Slideshow({ galleryHref }) {
  const ref = useRef(null);
  const reduced = useMedia('(prefers-reduced-motion: reduce)');
  const [selection, setSelection] = useState({ index: 0, previous: null });
  const slide = selection.index;
  const [announcement, setAnnouncement] = useState('');
  const advance = useCallback(() => setSelection(value => ({
    index: (value.index + 1) % slides.length, previous: value.index,
  })), []);
  useRotation(ref, advance, reduced || slides.length < 2);
  const select = useCallback(index => {
    const next = (index + slides.length) % slides.length;
    setSelection(value => ({ index: next, previous: value.index }));
    setAnnouncement(slides[next].title + ', slide ' + (next + 1) + ' of ' + slides.length);
  }, []);
  useEffect(() => {
    if (selection.previous === null) return;
    const timer = setTimeout(() => setSelection(value => ({ ...value, previous: null })), reduced ? 0 : 750);
    return () => clearTimeout(timer);
  }, [selection.index, selection.previous, reduced]);
  const swipe = useSwipe(step => select(slide + step));
  const event = slides[slide];
  return <section ref={ref} className="slideshow" aria-label="Featured gallery photos">
    <div className="slide-stage" {...swipe}>
      {selection.previous !== null && !reduced &&
        <Photo photo={slides[selection.previous].cover} aria-hidden="true" style={{
          objectPosition: slides[selection.previous].cover.position || '50% 50%', animation: 'none',
        }} />}
      <Photo key={event.id} photo={event.cover} />
    </div>
    <div className="slide-rail">
      <div className="slide-context">
        <h2>{event.title}</h2>
        <Link className="action-link" href={albumUrl(event, galleryHref)}>View album <span aria-hidden="true">↗</span></Link>
      </div>
      {slides.length > 1 && <div className="slide-controls">
        <button className="circle" type="button" aria-label="Previous slide" onClick={() => select(slide - 1)}>←</button>
        <div className="slide-dots" aria-label="Choose a slide">
          {slides.map((entry, index) => <button key={entry.id} className="slide-dot" type="button"
            aria-label={'Show ' + entry.title} aria-current={index === slide ? 'true' : undefined}
            onClick={() => select(index)} />)}
        </div>
        <button className="circle" type="button" aria-label="Next slide" onClick={() => select(slide + 1)}>→</button>
      </div>}
    </div>
    <span className="visually-hidden" role="status">{announcement}</span>
  </section>;
}

function Moments({ setViewer }) {
  const rail = useRef(null);
  const reduced = useMedia('(prefers-reduced-motion: reduce)');
  const [edges, setEdges] = useState({ first: true, last: false });
  useEffect(() => {
    const element = rail.current;
    const sync = () => setEdges({
      first: element.scrollLeft <= 2,
      last: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
    const observer = new ResizeObserver(sync);
    observer.observe(element);
    element.addEventListener('scroll', sync, { passive: true });
    sync();
    return () => { observer.disconnect(); element.removeEventListener('scroll', sync); };
  }, []);
  function scroll(step) {
    const card = rail.current.firstElementChild;
    rail.current.scrollBy({
      left: step * (card.getBoundingClientRect().width + 18),
      behavior: reduced ? 'instant' : 'smooth',
    });
  }
  return <section className="gallery-section" aria-labelledby="moments-title">
    <div className="section-heading">
      <h2 id="moments-title">More moments</h2>
      <div className="arrows">
        <button className="circle" type="button" aria-label="Scroll to previous photos" disabled={edges.first} onClick={() => scroll(-1)}>←</button>
        <button className="circle" type="button" aria-label="Scroll to more photos" disabled={edges.last} onClick={() => scroll(1)}>→</button>
      </div>
    </div>
    <div className="moments-list" ref={rail}>{moments.map((entry, index) =>
      <Moment key={entry.photo.id} entry={entry} entries={moments} index={index} setViewer={setViewer} />)}</div>
  </section>;
}

function EventAlbums({ galleryHref }) {
  const [year, setYear] = useState('');
  const matches = events.filter(event => !year || event.year === year);
  return <section className="gallery-section" id="event-albums">
    <div className="section-heading">
      <h2>Event albums</h2>
      <label className="year-picker">Event year <select value={year} onChange={event => setYear(event.target.value)}>
        <option value="">All years</option>
        {years.map(value => <option key={value} value={value}>{value}</option>)}
      </select></label>
    </div>
    <div className="album-list">{matches.map(event => <article className="album-card" key={event.id}>
      <Photo photo={event.cover} loading="lazy" />
      <div><h3>{event.title}</h3>
        {(event.date || event.year) && <p className="event-date">{event.date || event.year}</p>}
        <Link href={albumUrl(event, galleryHref)}>View album →</Link>
      </div>
    </article>)}
      {!matches.length && <p>No albums available for this year.</p>}
    </div>
  </section>;
}

function Album({ event, galleryHref, setViewer }) {
  const entries = event
    ? [event.cover, ...event.album, ...event.moments].map(photo => ({ event, photo })) : [];
  const related = events.filter(other => other.id !== event?.id).slice(0, 2);
  return <article id="album-view">
    <div className="album-top">
      <Link href={galleryHref + '#event-albums'}>← Back to Gallery</Link>
      {(event?.date || event?.year) && <span className="event-date">{event.date || event.year}</span>}
    </div>
    {event ? <>
      <h1>{event.title}</h1>
      <p className="album-recap">{event.recap}</p>
      <div className="album-hero"><Photo photo={event.cover} /></div>
      <section className="gallery-section">
        <h2 className="section-heading">All photos</h2>
        <div className="album-photos">{entries.map((entry, index) => <Moment key={entry.photo.id}
          entry={entry} entries={entries} index={index} insideAlbum setViewer={setViewer} />)}</div>
      </section>
      {related.length > 0 && <section className="gallery-section">
        <h2 className="section-heading">Related events</h2>
        <div className="related">{related.map(other =>
          <Link key={other.id} href={albumUrl(other, galleryHref)}>{other.title} →</Link>)}</div>
      </section>}
    </> : <><h1>Album unavailable</h1><p>Browse the Gallery to find another event.</p></>}
  </article>;
}

export default function GalleryPage({ galleryHref = '/gallery', homeHref = '/', eventId }) {
  const [selectedId, setSelectedId] = useState(eventId || '');
  const [viewer, setViewer] = useState(null);
  useEffect(() => {
    const sync = () => {
      setViewer(null);
      setSelectedId(eventId ?? new URLSearchParams(window.location.search).get('event') ?? '');
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, [eventId]);
  const selected = events.find(event => event.id === selectedId);
  useEffect(() => {
    const previous = document.title;
    document.title = selected ? selected.title + ' · TAPAS Gallery' : 'Gallery · TAPAS';
    return () => { document.title = previous; };
  }, [selected]);
  return <div className="tapas-gallery gallery-page">
    <main className="wrap">
      {selectedId ? <Album event={selected} galleryHref={galleryHref} setViewer={setViewer} /> : <div id="gallery-overview">
        <div className="intro">
          <div><h1>Gallery</h1><p>Life at TAPAS, in pictures.</p></div>
          <div className="intro-links"><Link className="action-link" href="#event-albums">Browse events <span aria-hidden="true">↓</span></Link></div>
        </div>
        <Slideshow galleryHref={galleryHref} />
        <Moments setViewer={setViewer} />
        <EventAlbums galleryHref={galleryHref} />
        <noscript><p>Enable JavaScript to explore the photos and event albums.</p></noscript>
      </div>}
    </main>
    <section className="gallery-footer"><div className="wrap"><details className="chakra-note">
      <summary>About the Gallery accent</summary>
      <p>Yellow represents Manipura, the solar plexus chakra, in the seven-colour palette used across the TAPAS website. <a href="https://cdn-prod-static.heartfulness.org/HF_Nmag_Vol2_Issue12_spreads_92e1c9a100.pdf">Read more in Heartfulness Magazine</a>.</p>
    </details></div></section>
    <PhotoViewer viewer={viewer} setViewer={setViewer} galleryHref={galleryHref} />
  </div>;
}
