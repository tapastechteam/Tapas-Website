import { TeamPage } from '@/modules/team/components/team/team-page';
export const metadata = { title: 'Meet the TAPAS Team', description: 'Meet the TAPAS team at Pillai University, New Panvel, and explore the people behind its creative community from 2019 onward.' };
export default function Page() { return <div className="team-source light antialiased" style={{fontFamily:"var(--font-body), sans-serif"}}><TeamPage /></div>; }
