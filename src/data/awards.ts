export interface AwardItem {
  id: string;
  title: string;
  photo: string;
  description: string;
  isPoster?: boolean;
}

export const awardsData: AwardItem[] = [
  {
    id: 'naac-accreditation',
    title: 'NAAC recognized our wellness initiatives, helping Pillai College secure an "A" Grade accreditation',
    photo: '/images/events/Picture3.png',
    description:
      'National Assessment and Accreditation Council (NAAC) recognized the comprehensive student wellness and meditation initiatives established by TAPAS, helping Pillai College achieve its prestigious "A" Grade accreditation.',
  },
  {
    id: 'centre-of-excellence',
    title: 'Recognized as a Centre of Excellence in Pillai HOC Campus',
    photo: '/images/events/Picture4.png',
    description:
      'Honored by the Internal Quality Assurance Cell (IQAC) in collaboration with Heartful Campus at Pillai HOC Campus, Rasayani, recognizing TAPAS as a distinguished Centre of Excellence for youth empowerment and mindfulness.',
  },
  {
    id: 'youth-ambassador-award',
    title: 'Honored with the Heartful Youth Ambassador Award',
    photo: '/images/events/Picture6.png',
    isPoster: true,
    description:
      'Conferred by Heartful Campus upon core student leaders Rahul Warrier, Resmi Ramakrishnan, Shibnarayan Ghosh, Romax Rajeev, and Omkar Jadhav for pioneering meditation and wellness culture on campus.',
  },
  {
    id: 'best-heartful-campus',
    title: 'Best Heartful Campus Award',
    photo: '/images/events/best-heartful-campus-2.jpg',
    description:
      'Presented to Pillai University\'s Pillai College of Engineering, Navi Mumbai, celebrating outstanding institutional dedication to student mental health, campus well-being, and Heartfulness practices.',
  },
  {
    id: 'ayush-minister-felicitation',
    title:
      "Felicitated by the Hon'ble Union Minister of State for AYUSH, Shri Prataprao Jadhav, for our contribution to Yoga with Youth",
    photo: '/images/events/Picture8.jpg',
    description:
      'The TAPAS team was felicitated on stage at the Gateway of India by the Hon\'ble Union Minister of State for AYUSH, Shri Prataprao Jadhav, recognizing their vital role in organizing the 3rd Official Countdown Event to International Day of Yoga.',
  },
];
