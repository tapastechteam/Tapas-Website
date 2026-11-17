export interface StatProps {
  value: string;
  label: string;
}

export interface AwardItem {
  id: string;
  title: string;
  description: string;
  img: string;
  badge?: string;
  datePlace?: string;
}

export interface EventStatItem {
  event: string;
  targetNum: number;
  suffix?: string;
  displayNum: string;
}

export interface EventItem {
  id: string;
  img: string;
  title: string;
  stat?: string;
  desc?: string;
  date?: string;
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  photo: string;
  isPortrait?: boolean;
}

export interface NetworkLink {
  title: string;
  url: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
  sectionId: string;
}

export interface LoaderProps {
  onFinish?: () => void;
}
