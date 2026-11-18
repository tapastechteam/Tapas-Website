import type { Metadata } from 'next';
import ResourcesHero from '@/components/resources/ResourcesHero';
import GuidedMeditationVideo from '@/components/resources/GuidedMeditationVideo';
import CoreEcosystemGrid from '@/components/resources/CoreEcosystemGrid';
import DigitalToolsSection from '@/components/resources/DigitalToolsSection';
import RecommendedReading from '@/components/resources/RecommendedReading';

export const metadata: Metadata = {
  title: 'Resources | TAPAS-PCE | Heartfulness Meditation & Wellness Club',
  description:
    'Curated library of Heartfulness digital apps, official ecosystem portals, and recommended books by Daaji.',
};

/**
 * Resources Page Component (Server Component)
 * Sections:
 *  A. Minimalist Page Header (Curated Library)
 *  A½. Guided Meditation Video (Prominent Featured Section)
 *  B. Heartful resource (Filterable 6 Links with Category Sidebar)
 *  C. Digital Tools & Publications (HeartsApp, Magazine, YouTube)
 *  D. Recommended Reading (Curated Bookshelf)
 */
export default function ResourcesPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-16 md:gap-20 pt-8 pb-24 md:pt-12">
      {/* A. Minimalist Page Header */}
      <ResourcesHero />

      {/* A½. Featured Guided Meditation Video */}
      <GuidedMeditationVideo />

      {/* B. Heartful resource Section */}
      <CoreEcosystemGrid />

      {/* C. Digital Tools & Publications */}
      <DigitalToolsSection />

      {/* D. Recommended Reading Showcase */}
      <RecommendedReading />
    </div>
  );
}
