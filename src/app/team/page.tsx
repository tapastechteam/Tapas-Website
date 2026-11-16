import type { Metadata } from 'next';
import { TeamPage } from '@/components/team/team-page';

export const metadata: Metadata = {
  title: 'Meet the TAPAS Team',
  description:
    'Meet the TAPAS team at Pillai University, New Panvel, and explore the people behind its creative community from 2019 onward.',
};

export default function Page() {
  return <TeamPage />;
}
