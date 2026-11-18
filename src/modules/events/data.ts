import { PastEvent, UpcomingEvent } from '@/modules/events/types';

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'panvel-ashram-visit-2026',
    title: 'Panvel Ashram Visit',
    date: 'Nov 2026',
    location: 'SRCM Panvel Ashram',
    image: '/images/events-page/upcoming-ashram-visit.jpg',
    tag: 'Upcoming',
  },
  {
    id: 'dhyanotsav-sy-2026',
    title: 'Dhyanotsav for SY Students',
    date: 'Dec 2026 (tentative)',
    location: 'Pillai College of Engineering',
    image: '/images/events-page/upcoming-dhyanotsav.jpg',
    tag: 'Tentative',
  },
  {
    id: 'kanha-shanti-vanam-visit-2027',
    title: 'Kanha Shanti Vanam Visit',
    date: 'Jan 2027 (tentative)',
    location: 'Kanha Shanti Vanam, Hyderabad',
    image: '/images/events-page/upcoming-kanha-shanti-vanam.jpg',
    tag: 'Tentative',
  },
];

function eventPhotos(slug: string, count: number, title: string) {
  return Array.from({ length: count }, (_, index) => ({
    src: `/images/events-page/${slug}-${index + 1}.jpg`,
    alt: `${title} event photo ${index + 1}`,
  }));
}

export const pastEvents: PastEvent[] = [
  {
    id: 'dhyanratri-2026',
    title: 'Dhyanratri 2026',
    year: '2026',
    date: '11–19 Oct 2026',
    time: '7:30 PM – 8:00 PM',
    location: 'Online (Zoom)',
    students: '30 participants',
    description:
      'A 9-day Navratri meditation initiative dedicated to cultivating daily stillness and self-reflection. Guided by experienced Heartfulness Meditation Facilitators, participants engaged in daily guided meditation sessions and thoughtful discussions on emotional balance, reducing digital distractions, and sustaining positive mental habits.',
    photos: eventPhotos('dhyanratri-2026', 4, 'Dhyanratri 2026'),
  },
  {
    id: 'antardhyanam-2026',
    title: 'Skill Enhancement Day (ANTARDHYANAM)',
    year: '2026',
    date: '26 Sep 2026',
    time: '9:00 AM – 10:30 AM',
    location: 'Online (Google Meet)',
    students: '150+ participants',
    description:
      "Skill Enhancement Day webinar titled 'ANTARDHYANAM – Finding Stillness in a Restless World' organized in collaboration with Heartfulness and Pillai University. Featuring university dignitaries and certified trainers, the session introduced students to practical meditation techniques, mindful self-regulation, chair yoga, and five core principles for integrating stillness into daily academic life.",
    photos: eventPhotos('antardhyanam-2026', 5, 'Skill Enhancement Day (ANTARDHYANAM)'),
  },
  {
    id: 'nba-inspection-visit-2026',
    title: 'NBA Inspection Visit Exhibition',
    year: '2026',
    date: '11–12 Sep 2026',
    time: 'Campus Inspection Hours',
    location: 'College Campus, Pillai College of Engineering',
    students: '10 committee members',
    description:
      'TAPAS, along with Heartfulness, participated in the two-day National Board of Accreditation (NBA) Inspection Visit. The committee designed and operated an interactive exhibition stall showcasing TAPAS milestones, past events, photos, and wellness literature to visiting NBA dignitaries, illustrating the promotion of meditation and mental well-being on campus.',
    photos: eventPhotos('nba-inspection-visit-2026', 6, 'NBA Inspection Visit Exhibition'),
  },
  {
    id: 'nasha-mukt-yuva-2026',
    title: 'Nasha Mukt Yuva',
    year: '2026',
    date: '2 Aug 2026',
    time: '9:30 AM – 11:00 AM',
    location: 'SRCM Ashram Panvel',
    students: '200+ participants',
    description:
      'The Nashamukt Yuva (Drug-Free Youth Campaign) was organized at Heartfulness Ashram Panvel in collaboration with MY Bharat Volunteers and artists from the National School of Drama (NSD). The campaign featured an opening awareness briefing, an impactful awareness skit on the harmful effects of substance abuse, and a guided meditation session with Heartfulness volunteers.',
    photos: eventPhotos('nasha-mukt-yuva-2026', 2, 'Nasha Mukt Yuva'),
  },
  {
    id: 'mba-ashram-visit-2026',
    title: 'MBA Ashram Visit & Wellness Program',
    year: '2026',
    date: '23 Jul 2026',
    time: '1:00 PM – 5:30 PM',
    location: 'Heartfulness Ashram',
    students: '300 participants',
    description:
      'The MBA Ashram Visit and Wellness Program brought MBA students and committee members together at Heartfulness Ashram for an afternoon focused on interaction, group engagement, and personal well-being. Conducted by TAPAS students, the program combined a communal lunch, interactive team-building group games, and a guided meditation and relaxation session.',
    photos: eventPhotos('mba-ashram-visit-2026', 5, 'MBA Ashram Visit & Wellness Program'),
  },
  {
    id: 'international-yoga-day-2026',
    title: '12th International Yoga Day',
    year: '2026',
    date: '23 Jun 2026',
    time: '10:00 AM',
    location: 'P Wing Stilt Area, Pillai College of Engineering',
    students: '18 participants',
    description:
      "Jointly hosted by the SPIC MACAY Heritage Club and TAPAS celebrating the global theme 'Yoga for Healthy Aging.' The intimate morning session featured expert-guided asana practices by Smt. Dipali Vinod Shinde and Dr. Shreedevi Kulkarni, heart-centered meditation led by Ms. Shilpa Mondkar, and a felicitation of the yoga resource persons.",
    photos: eventPhotos('international-yoga-day-2026', 5, '12th International Yoga Day'),
  },
  {
    id: 'yoga-with-youth-2026',
    title: 'Yoga with Youth 2026',
    year: '2026',
    date: '18 Jun 2026',
    time: '6:30 AM – 9:00 AM',
    location: 'Gateway of India, Mumbai',
    students: '1000 participants',
    description:
      'The 3rd Official Countdown Event to the 12th International Day of Yoga under the Ministry of AYUSH, Government of India, Heartfulness Institute, and MDNIY, held at the iconic Gateway of India. With Chief Guest Shri Prataprao Jadhav and distinguished dignitaries, participants performed mass yoga asanas, meditation, and a powerful Shankhnaad conch-blowing ceremony.',
    photos: eventPhotos('yoga-with-youth-2026', 5, 'Yoga with Youth 2026'),
  },
  {
    id: 'yogmahotsav-summit-2026',
    title: 'IIT Bombay Wellness Fest – Yogmahotsav Summit',
    year: '2026',
    date: '13 Jun 2026',
    time: '11:00 AM – 1:00 PM',
    location: 'P. C. Saxena Auditorium, IIT Bombay',
    students: '75+ participants',
    description:
      'Organized by Heartfulness in collaboration with Yogastha, Flourishing Hub IIT Bombay, and TAPAS at the P. C. Saxena Auditorium. The summit featured guided Heartfulness meditation, accessible Chair Yoga, Brighter Minds cognitive exercises, keynote addresses by Shri Sanjay Bhatia (Former IAS) and Dr. Deepak Marla, and a panel discussion on mindfulness in leadership and education.',
    photos: eventPhotos('yogmahotsav-summit-2026', 6, 'IIT Bombay Wellness Fest – Yogmahotsav Summit'),
  },
  {
    id: 'plantation-drive-2026',
    title: 'World Environment Day - Plantation Drive',
    year: '2026',
    date: '5 Jun 2026',
    time: '8:00 AM – 11:00 AM',
    location: 'Parsik Hill, CBD Belapur, Navi Mumbai',
    students: '10 committee members',
    description:
      "Organized on World Environment Day under the theme 'Plant Today, Breathe Tomorrow,' this mass tree plantation drive was a joint initiative with Navi Mumbai Municipal Corporation (NMMC) Garden Department, Heartfulness Institute, and Adani Realty. Senior civic dignitaries including Municipal Commissioner Shri Kailash Shinde IAS participated alongside TAPAS student volunteers.",
    photos: eventPhotos('plantation-drive-2026', 4, 'World Environment Day - Plantation Drive'),
  },
  {
    id: 'ashram-visit-iit-bombay-2026',
    title: 'Ashram Visit with Faculty Members of IIT Bombay',
    year: '2026',
    date: '21 May 2026',
    location: 'Babuji Memorial Ashram, Panvel',
    students: '15 participants',
    description:
      "The 'Heartfulness Faculty-Student Synergy & Wellness Conclave' brought together distinguished faculty members from IIT Bombay with TAPAS students at Babuji Memorial Ashram, Panvel. The retreat featured Heartfulness meditation sitting, recreational outdoor and indoor team challenges, sound healing therapy, and an engaging interactive circle bridging academic excellence and mental wellness.",
    photos: eventPhotos('ashram-visit-iit-bombay-2026', 3, 'Ashram Visit with Faculty Members of IIT Bombay'),
  },
  {
    id: '21-days-meditation-2026',
    title: '21 Days Meditation Challenge',
    year: '2026',
    date: '16 Mar – 5 Apr 2026',
    time: '7:30 PM – 8:15 PM',
    location: 'Online',
    students: '20 participants',
    description:
      'An immersive 21-day meditation journey designed around the 21-Day habit formation rule to make mindfulness a daily lifestyle habit. Led by faculty coordinator Shilpa Mondkar Ma’am with special guest sessions by Dr. Nivedita Shreyans, the program taught core meditation techniques including the Water Visualization Method and five essential steps for cultivating inner stillness.',
    photos: eventPhotos('21-days-meditation-2026', 4, '21 Days Meditation Challenge'),
  },
  {
    id: 'dhyanotsav-sy-2026',
    title: 'Dhyanotsav (SY)',
    year: '2026',
    date: '9–11 Mar 2026',
    time: 'Morning & Evening Sessions',
    location: 'Auditorium, Pillai College of Engineering',
    students: '500+ students',
    description:
      'A 3-day wellness initiative conducted for Second Year students at Pillai College of Engineering Auditorium. The event combined Heartfulness guided meditation by Shilpa Ma’am, cognitive brain-training exercises through Brighter Minds sessions with Geetanjali Ma’am, Sound Healing sessions by Bhavika Ma’am, and personal development discussions led by Sahil Sir.',
    photos: eventPhotos('dhyanotsav-sy-2026', 3, 'Dhyanotsav (SY)'),
  },
  {
    id: 'dhyanotsav-fy-2026',
    title: 'Dhyanotsav (FY)',
    year: '2026',
    date: '19–21 Jan 2026',
    time: 'Morning & Evening Sessions',
    location: 'Auditorium, Pillai College of Engineering',
    students: '950+ students',
    description:
      'A flagship 3-day meditation and wellness program organized for First Year students of PCE. The program featured relaxation techniques and guided meditation by Dr. Lalita Dhareshwar (30+ years with Heartfulness), the cleaning process, and prayer meditation led by Dr. Mansi Thakur and Dr. Kapil Singh Thakur, helping first-year students transition into college life with clarity, calmness, and emotional balance.',
    photos: eventPhotos('dhyanotsav-fy-2026', 7, 'Dhyanotsav (FY)'),
  },
  {
    id: 'kanha-shanti-vanam-2026',
    title: 'Kanha Shanti Vanam Visit',
    year: '2026',
    date: '11–13 Jan 2026',
    location: 'Kanha Shanti Vanam, Hyderabad',
    students: '50+ participants',
    description:
      "A 3-day spiritual and wellness retreat to Kanha Shanti Vanam, the global headquarters of Heartfulness in Hyderabad, under the theme 'Rising with Kindness.' Students engaged in morning yoga, meditation with Daaji, breakout sessions on happiness habits, inspiring keynote talks by dignitaries including Dr. S. Somanath (Former ISRO Chairman), exploration of the Yatra Garden, and cultural evening events.",
    photos: eventPhotos('kanha-shanti-vanam-2026', 6, 'Kanha Shanti Vanam Visit'),
  },
  {
    id: 'weekly-meditation-2026',
    title: 'Weekly Meditation (Offline)',
    year: '2026',
    date: 'Weekly sessions',
    location: 'College Campus, Pillai College of Engineering',
    students: '10–20 per session',
    description:
      'Conducted twice weekly in offline mode after lecture hours by faculty coordinator Prof. Shilpa Mondkar. Each 45-minute session includes relaxation followed by Heartfulness meditation, open to all students, faculties, lab assistants, and staff members across the college.',
    photos: eventPhotos('weekly-meditation-2026', 2, 'Weekly Meditation (Offline)'),
  },
  {
    id: 'wellness-fest-2025',
    title: 'Wellness Fest 2025',
    year: '2025',
    date: '20–22 Feb 2025',
    location: 'Tilak Education Society, YMT & Partner Campuses',
    students: '1000+',
    description:
      'Organized and coordinated across multiple partner colleges including Tilak Education Society and YMT Colleges. The three-day wellness festival engaged youth through mindfulness sessions, experiential meditation workshops, and health awareness drives.',
    photos: eventPhotos('wellness-fest-2025', 6, 'Wellness Fest 2025'),
  },
  {
    id: 'dhyanratri-2025',
    title: 'Dhyanratri 2025',
    year: '2025',
    date: '22–30 Sep 2025',
    time: '7:30 PM – 8:00 PM',
    location: 'Online',
    students: '25–30 participants',
    description:
      'TAPAS successfully conducted Dhyanratri 2025, a 9-day meditation initiative during Navratri. Conducted online by Shilpa Mondkar Ma’am, each 30-minute evening session introduced guided meditation, simple breathing exercises, and mindfulness techniques to help students relieve academic anxiety and build a lasting daily meditation habit.',
    photos: eventPhotos('dhyanratri-2025', 3, 'Dhyanratri 2025'),
  },
  {
    id: 'dhyanotsav-2024',
    title: 'Dhyanotsav 2024',
    year: '2024',
    location: 'Pillai College of Engineering',
    students: '1200',
    description:
      'Dhyanotsav 2024 introduced over 1,200 students to heart-centered meditation practices, relaxation techniques, and inner stillness, fostering focus and stress relief across academic departments.',
    photos: eventPhotos('dhyanotsav-2024', 3, 'Dhyanotsav 2024'),
  },
  {
    id: 'dhyanratri-2024',
    title: 'Dhyanratri 2024',
    year: '2024',
    location: 'Online',
    description:
      'A nine-day guided evening meditation series held during Navratri to help students develop calm, focus, and emotional balance through regular daily meditation.',
    photos: eventPhotos('dhyanratri-2024', 5, 'Dhyanratri 2024'),
  },
  {
    id: 'yoga-by-the-bay-2024',
    title: 'International Yoga Day – Yoga by the Bay',
    year: '2024',
    location: 'Marine Drive, Mumbai',
    description:
      'A vibrant celebration of International Yoga Day held at Marine Drive, Mumbai. Participants gathered by the bay for sunrise yoga asanas, guided relaxation, and mindfulness by the sea.',
    photos: eventPhotos('yoga-by-the-bay-2024', 2, 'International Yoga Day – Yoga by the Bay'),
  },
  {
    id: '21-days-meditation-2024',
    title: '21 Days Meditation Challenge',
    year: '2024',
    location: 'Online',
    students: '1000+ overall',
    description:
      'Online 21-Day Meditation Challenge open to all. Guides participants through simple relaxation and focus techniques. Helps build a consistent meditation routine. Certificates awarded on the final day. Our team managed the registrations for all participants. We also handled daily attendance tracking throughout the challenge.',
    photos: eventPhotos('21-days-meditation-2024', 6, '21 Days Meditation Challenge'),
  },
  {
    id: 'go-flow-run-2024',
    title: 'Go Flow Run',
    year: '2024',
    date: '8 Dec 2024',
    time: '6:00 AM',
    location: 'Bandra Kurla Complex (BKC), Mumbai',
    students: '200+',
    description:
      'Focused on women empowerment, awareness blended fitness, menstrual health awareness & community support. Featured categories: 3 km Run, 5 km Run, 10 km Run. TAPAS has actively participated and supported the initiative to empower woman.',
    photos: eventPhotos('go-flow-run-2024', 6, 'Go Flow Run'),
  },
  {
    id: 'wht-now-2024',
    title: 'WHT NOW',
    year: '2024',
    location: 'Asiatic Library',
    description:
      'Conducted digital safety awareness activities. Volunteers organized and managed programs. Performed skits and interactive segments. Promoted safe and responsible online behaviour. 2024 rally held at Asiatic Library. Flash mobs and youth messages showcased. Advocated for cyber safety and empowerment.',
    photos: eventPhotos('wht-now-2024', 2, 'WHT NOW'),
  },
  {
    id: 'women-appreciation-2023',
    title: 'Women’s Appreciation & Recognition Program',
    year: '2023',
    location: 'Pillai College of Engineering',
    students: '33 colleagues honored',
    description:
      'A special initiative honoring 33 female faculty members and colleagues with the Stree Jyoti Puraskar, acknowledging their dedicated contributions with awards, certificates, and mementos.',
    photos: eventPhotos('women-appreciation-2023', 7, 'Women’s Appreciation & Recognition Program'),
  },
  {
    id: 'world-meditation-day-2023',
    title: 'World Meditation Day',
    year: '2023',
    location: 'Pillai Group of Institutions',
    description:
      'Celebration of World Meditation Day across Pillai institutions, introducing students and faculty to Heartfulness meditation and collective peace practices.',
    photos: eventPhotos('world-meditation-day-2023', 3, 'World Meditation Day'),
  },
  {
    id: 'dhyanotsav-2023',
    title: 'Dhyanotsav',
    year: '2023',
    students: '1000',
    description:
      'Dhyanotsav is a meditation-based event designed to help understand the true meaning of inner peace. It introduces participants to simple yet powerful Heartfulness meditation practices. The event encourages students to slow down, breathe, and reconnect with themselves. Students experience how meditation can calm their thoughts and improve focus.',
    photos: eventPhotos('dhyanotsav-2023', 5, 'Dhyanotsav'),
  },
  {
    id: '21-days-meditation-2023',
    title: '21 Days Meditation Challenge',
    year: '2023',
    date: '11–31 Mar 2023',
    time: '8:00 PM',
    location: 'Online',
    students: '200+',
    description:
      'Online 21-Day Meditation Challenge open to all. Guides participants through simple relaxation and focus techniques. Helps build a consistent meditation routine. Certificates awarded on the final day. Our team managed the registrations for all participants. We also handled daily attendance tracking throughout the challenge.',
    photos: eventPhotos('21-days-meditation-2023', 5, '21 Days Meditation Challenge'),
  },
  {
    id: 'sunday-group-meditation-2023',
    title: 'Sunday Group Meditation',
    year: '2023',
    date: '5 Feb 2023',
    location: 'Pillai College Auditorium',
    students: '150+ abhyasis',
    description:
      'TAPAS, in collaboration with the Heartfulness Institute and SRCM Panvel Ashram, organized a serene Sunday Group Meditation session on 5th February at the Pillai College Auditorium. Over 150 abhyasis participated in the event, which aimed to promote inner peace, emotional well-being, and mindfulness. The volunteers from TAPAS efficiently guided participants, ensuring smooth coordination and a calm atmosphere throughout the session.',
    photos: eventPhotos('sunday-group-meditation-2023', 5, 'Sunday Group Meditation'),
  },
  {
    id: 'wellness-fest-yog-mahotsav-2023',
    title: 'Wellness Fest – Yog Mahotsav',
    year: '2023',
    date: '29 Apr–1 May 2023',
    location: 'CIDCO Exhibition Centre, Vashi',
    students: '1000',
    description:
      "The Wellness Fest – Yog Mahotsav, organized by Shri Ram Chandra Mission's Heartfulness Institute, was held from 29th April to 1st May 2023 at the CIDCO Exhibition & Convention Centre, Vashi.",
    photos: eventPhotos('wellness-fest-yog-mahotsav-2023', 5, 'Wellness Fest – Yog Mahotsav'),
  },
  {
    id: '21-days-meditation-2022',
    title: '21 Days Meditation Challenge',
    year: '2022',
    location: 'Online',
    description:
      'Online 21-Day Meditation Challenge open to all. Guides participants through simple relaxation and focus techniques. Helps build a consistent meditation routine. Certificates awarded on the final day. Our team managed the registrations for all participants. We also handled daily attendance tracking throughout the challenge.',
    photos: eventPhotos('21-days-meditation-2022', 5, '21 Days Meditation Challenge'),
  },
  {
    id: 'kanha-shanti-vanam-2022',
    title: 'Kanha Shanti Vanam Visit',
    year: '2022',
    date: '12–14 Aug 2022',
    location: 'Kanha Shanti Vanam',
    students: '700',
    description:
      "National Youth Sangam at Kanha Shanti Vanam empowers youth through leadership, unity, and spiritual growth. It lets students visit the world's largest meditation hall and connect with peers nationwide. The visit deepens Heartfulness practice through guided group meditation and interactive sessions. Students learn practical mindfulness techniques to build focus, purpose, and emotional resilience.",
    photos: eventPhotos('kanha-shanti-vanam-2022', 4, 'Kanha Shanti Vanam Visit'),
  },
];

export const pastEventYears = ['2026', '2025', '2024', '2023', '2022'];

export function getPastEvent(id: string) {
  return pastEvents.find((event) => event.id === id);
}
