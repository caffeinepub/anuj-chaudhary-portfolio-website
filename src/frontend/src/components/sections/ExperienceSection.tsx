import { Briefcase, CheckCircle2 } from 'lucide-react';
import Section from '../Section';
import Reveal from '../Reveal';

export default function ExperienceSection() {
  const achievements = [
    'Achieved 98% order accuracy for 100+ monthly orders',
    'Reduced order revisions by 25%',
    'Decreased customer complaints by 15%',
    'Coordinated client and production communication',
    'Used Excel analytics for tracking and reporting',
  ];

  return (
    <Section id="experience" className="bg-muted/30">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="text-primary" size={28} />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">Management Trainee Intern</h3>
                <p className="text-lg text-primary font-semibold mb-1">Sai Enterprises</p>
                <p className="text-muted-foreground">February 2024 – May 2024</p>
              </div>
            </div>

            <div className="space-y-3 ml-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
