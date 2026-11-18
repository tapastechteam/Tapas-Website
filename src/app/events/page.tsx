import { Suspense } from 'react';
import EventsPage from '@/modules/events/EventsPage';
export default function Page() { return <Suspense fallback={null}><EventsPage /></Suspense>; }
