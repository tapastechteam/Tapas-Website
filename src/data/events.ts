import { EventStatItem } from '@/types';

export interface SlideshowEventItem {
  id: string;
  name: string;
  img: string; // cover image
  photos: string[]; // all matched photos of that event for the modal gallery
  date?: string;
  students?: string;
  description: string;
}

export const slideshowEvents: SlideshowEventItem[] = [
  {
    id: 'yoga-with-youth',
    name: 'Yoga with Youth 2026',
    img: '/images/events/Picture8.jpg',
    photos: ['/images/events/Picture8.jpg', '/images/events/Picture4.jpg'],
    date: '18 June 2026',
    students: '800 students',
    description:
      'Organized at the iconic Gateway of India, Mumbai, as the 3rd Official Countdown Event to International Day of Yoga 2026 under the Ministry of AYUSH, Government of India, in collaboration with Heartfulness Institute and Morarji Desai National Institute of Yoga (MDNIY). Centered on the theme "Wellness. Awareness. Action.", the program guided 800 students through yoga and wellness practices.',
  },
  {
    id: 'kanha-visit',
    name: 'Kanha Shanti Vanam / Kanha Visit',
    img: '/images/events/Picture2.jpg',
    photos: ['/images/events/Picture2.jpg'],
    students: '700 students',
    description:
      "National Youth Sangam retreat taking 700 students to Kanha Shanti Vanam, Hyderabad. Participants experienced meditation inside the world's largest meditation dome, alongside guided group relaxation and interactive sessions.",
  },
  {
    id: 'dhyanotsav',
    name: 'Dhyanotsav',
    img: '/images/events/Picture3.jpg',
    photos: ['/images/events/Picture3.jpg'],
    students: '2022 (900 students), 2023 (1000 students), 2024 (1200 students)',
    description:
      'A flagship campus meditation event that introduces Heartfulness meditation practices to students, helping them slow down, manage academic pressures, and reconnect with themselves.',
  },
];

export const eventStatistics: EventStatItem[] = [
  { event: 'Wellness Fest', targetNum: 8000, displayNum: '8000+' },
  { event: 'Dhyanotsav', targetNum: 2000, suffix: 'every year', displayNum: '2000+' },
  { event: 'Dhyanratri', targetNum: 500, displayNum: '500+' },
  { event: '21 Days Meditation', targetNum: 1000, displayNum: '1000+' },
  { event: 'Ashram Events', targetNum: 1000, displayNum: '1000+' },
  { event: 'Weekly Meditation', targetNum: 700, displayNum: '700+' },
  { event: 'Sunday Meditations', targetNum: 500, displayNum: '500+' },
  { event: 'Yog Mahotsav', targetNum: 1000, displayNum: '1000+' },
  { event: 'Kanha Visit', targetNum: 500, suffix: 'every year', displayNum: '500+' },
];
