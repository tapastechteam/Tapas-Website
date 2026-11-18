import { notFound } from 'next/navigation';
import EventDetail from '@/modules/events/EventDetail';
import { getPastEvent, pastEvents } from '@/modules/events/data';

export function generateStaticParams() {
  return pastEvents.map((event) => ({ id: event.id }));
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const eventIndex = pastEvents.findIndex((event) => event.id === id);
  const event = getPastEvent(id);

  if (!event || eventIndex === -1) notFound();

  return (
    <EventDetail
      event={event}
      previousEvent={pastEvents[eventIndex - 1]}
      nextEvent={pastEvents[eventIndex + 1]}
    />
  );
}
