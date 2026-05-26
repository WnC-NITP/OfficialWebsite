import type { Metadata } from 'next';
import { TEAMS } from '@/lib/data/teams';
import TeamSection from '@/components/team/TeamSection';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the talented individuals behind Web & Coding Club NIT Patna. Explore our 7 specialized teams across Web Dev, Blockchain, Gen AI, ML, PR, Social Media, and Design.',
};

export default function TeamPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-8 text-center flex flex-col items-center">
        <div className="container-wide flex flex-col items-center text-center">
          <p className="text-mono text-xs mb-4 tracking-[0.2em]">// OUR PEOPLE</p>
          <h1 className="text-display gradient-text-amber mb-4">Our Team</h1>
          <p className="text-body max-w-2xl text-lg mx-auto">
            A diverse collective of builders, designers, and thinkers organized into 7 specialized teams.
            From Team Leads who direct, to the dedicated members who bring projects to life.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Teams */}
      <div className="container-wide">
        {TEAMS.map((team, i) => (
          <div key={team.id}>
            <TeamSection team={team} />
            {i < TEAMS.length - 1 && <hr className="section-divider" />}
          </div>
        ))}
      </div>
    </main>
  );
}
