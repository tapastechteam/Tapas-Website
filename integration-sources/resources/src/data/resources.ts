/**
 * TAPAS-PCE Resources Library Data
 * --------------------------------
 * Single source of truth for all curated resources, official Heartfulness links,
 * digital tools, reading lists, and wellness guides.
 *
 * Future committee members can update, add, or reorder entries here
 * without modifying any UI components or styling.
 */

export interface EcosystemLink {
  id: string;
  title: string;
  category: "Guidance" | "Philosophy & Practice" | "Organization" | "Headquarters" | "Environment" | "Center";
  description: string;
  url: string;
  isExternal: boolean;
  featured?: boolean;
}

export interface DigitalTool {
  id: string;
  name: string;
  badge: string;
  description: string;
  highlights: string[];
  url: string;
  type: "app" | "magazine" | "media";
  actionLabel: string;
}

export interface RecommendedBook {
  id: string;
  title: string;
  author: string;
  coAuthor?: string;
  tag: "Beginners" | "Habits & Focus" | "Deeper Practice";
  takeaway: string;
  description: string;
  url: string;
}

/* =========================================================================
   0. FEATURED GUIDED MEDITATION VIDEO
   Prominently showcased video resource for guided meditation practice
   ========================================================================= */
export interface FeaturedVideo {
  title: string;
  eyebrow: string;
  description: string;
  youtubeId: string;
  url: string;
}

export const FEATURED_VIDEO: FeaturedVideo = {
  title: "Guided Meditation",
  eyebrow: "EXPERIENCE HEARTFULNESS",
  description:
    "Begin your meditation journey with this guided Heartfulness relaxation and meditation session led by a certified trainer. Perfect for first-time practitioners and experienced seekers alike.",
  youtubeId: "gDClb-yjNdQ",
  url: "https://youtu.be/gDClb-yjNdQ?si=xFS-GZAxm7IByxzk",
};

/* =========================================================================
   1. HEARTFUL RESOURCE LINKS
   The 6 primary official portals connecting students to global Heartfulness
   ========================================================================= */
export const CORE_ECOSYSTEM_LINKS: EcosystemLink[] = [
  {
    id: "daaji",
    title: "Daaji – The Global Guide of Heartfulness",
    category: "Guidance",
    description: "Official portal of Kamlesh D. Patel (Daaji), fourth spiritual guide of the Heartfulness movement and author of international bestsellers.",
    url: "https://www.daaji.org/",
    isExternal: true,
    featured: true,
  },
  {
    id: "sahaj-marg",
    title: "Sahaj Marg",
    category: "Philosophy & Practice",
    description: "The natural path of Raja Yoga meditation focused on the human heart, inner balance, and spiritual evolution.",
    url: "http://sahajmarg.org/",
    isExternal: true,
  },
  {
    id: "srcm",
    title: "Shri Ram Chandra Mission",
    category: "Organization",
    description: "Global non-profit educational and spiritual organization promoting universal brotherhood, meditation, and inner peace since 1945.",
    url: "http://www.srcm.org/",
    isExternal: true,
  },
  {
    id: "kanha-shanti-vanam",
    title: "Kanha Shanti Vanam",
    category: "Headquarters",
    description: "The global headquarters of Heartfulness near Hyderabad, home to the world's largest meditation center accommodating 100,000 seekers.",
    url: "https://kanha.sahajmarg.org/",
    isExternal: true,
    featured: true,
  },
  {
    id: "green-kanha",
    title: "Green Kanha",
    category: "Environment",
    description: "An acclaimed ecological mega-initiative transforming barren land into a lush sanctuary of rare flora, water bodies, and wildlife.",
    url: "https://heartfulness.org/kanha/green-initiatives",
    isExternal: true,
  },
  {
    id: "gurugram-center",
    title: "Gurugram Meditation Center",
    category: "Center",
    description: "A premier green urban retreat and meditation haven in NCR offering silent contemplation, youth workshops, and holistic training.",
    url: "https://heartfulness.org/gurugram/",
    isExternal: true,
  },
];

/* =========================================================================
   2. DIGITAL TOOLS & PUBLICATIONS
   Self-practice applications and monthly literature for college students
   ========================================================================= */
export const DIGITAL_TOOLS: DigitalTool[] = [
  {
    id: "heartsapp",
    name: "HeartsApp",
    badge: "Free Mobile App",
    description: "Free guided meditation sessions with certified live trainers available 24/7 across the globe at the tap of a button.",
    highlights: ["On-demand live trainers", "Daily mood tracking", "Guided relaxation tracks"],
    url: "https://heartfulness.org/en/heartsapp/",
    type: "app",
    actionLabel: "Explore HeartsApp",
  },
  {
    id: "magazine",
    name: "Heartfulness Magazine",
    badge: "Monthly Publication",
    description: "Monthly articles, science-backed research, and practical essays on mindfulness, focus, emotional fitness, and balanced living.",
    highlights: ["Free digital access", "Interviews with thought leaders", "Self-development exercises"],
    url: "https://www.heartfulnessmagazine.com/",
    type: "magazine",
    actionLabel: "Read Online Edition",
  },
  {
    id: "youtube",
    name: "Heartfulness YouTube",
    badge: "Official Channel",
    description: "Extensive video archive featuring guided relaxation audios, student masterclasses, and talks by Daaji on personal evolution.",
    highlights: ["Guided relaxation videos", "Student masterclasses", "Youth podcasts & Q&As"],
    url: "https://www.youtube.com/@heartfulness",
    type: "media",
    actionLabel: "Watch on YouTube",
  },
];

/* =========================================================================
   3. RECOMMENDED READING (BOOKSHELF)
   Foundational literature by Kamlesh D. Patel (Daaji)
   ========================================================================= */
export const RECOMMENDED_BOOKS: RecommendedBook[] = [
  {
    id: "heartfulness-way",
    title: "The Heartfulness Way",
    author: "Kamlesh D. Patel (Daaji)",
    coAuthor: "Joshua Pollock",
    tag: "Beginners",
    takeaway: "A practical dialogue unveiling the simple science of heart-centered meditation for modern everyday life.",
    description: "Structured as an accessible conversation between a seeker and Daaji, this book demystifies meditation, cleaning, and prayer without dogma.",
    url: "https://theheartfulnessway.com/",
  },
  {
    id: "designing-destiny",
    title: "Designing Destiny",
    author: "Kamlesh D. Patel (Daaji)",
    tag: "Habits & Focus",
    takeaway: "Learn how the ancient principles of destiny and karma can be consciously rewritten through disciplined mental habits.",
    description: "Essential reading for students navigating high-stakes academic pressure, personal identity, decision making, and lifestyle balance.",
    url: "https://designingdestiny.com/",
  },
  {
    id: "spiritual-anatomy",
    title: "Spiritual Anatomy",
    author: "Kamlesh D. Patel (Daaji)",
    tag: "Deeper Practice",
    takeaway: "An atlas of the sixteen chakras and energy points guiding your journey of consciousness through the spiritual anatomy.",
    description: "A profound roadmap mapping ancient yogic wisdom to neurological and physiological insights for advanced seekers.",
    url: "https://spiritualanatomy.com/",
  },
];
