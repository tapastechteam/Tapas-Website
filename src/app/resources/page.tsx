import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | TAPAS',
  description: 'Heartfulness meditation and wellness resources at Pillai University.',
};

export default function ResourcesPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-tapas-text mb-4">
        Resources
      </h1>
    </div>
  );
}
