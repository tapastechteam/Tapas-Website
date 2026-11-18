export interface StatProps {
  value: string;
  label: string;
}

export interface EventPhoto {
  src: string;
  alt: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  image: string;
  tag?: string;
}

export interface PastEvent {
  id: string;
  title: string;
  year: string;
  date?: string;
  time?: string;
  location?: string;
  students?: string;
  description: string;
  photos: EventPhoto[];
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
}

export interface NetworkLink {
  title: string;
  url: string;
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface LoaderProps {
  onFinish?: () => void;
}
