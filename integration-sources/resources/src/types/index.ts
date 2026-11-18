export interface StatProps {
  value: string;
  label: string;
}

export interface EventItem {
  id: string;
  img: string;
  title: string;
  date: string;
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


export * from '@/data/resources';
