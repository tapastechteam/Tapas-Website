export type LeadershipRole = 'president' | 'vice-president' | 'secretary' | 'vice-secretary';

export type TeamMember = {
  name: string;
  designation: string;
  leadershipRole?: LeadershipRole;
  imagePath?: string | null;
};

export type HistoricalTeam = {
  academicYear: string;
  groupPhotoPath: string | null;
  members: readonly TeamMember[];
};
