import { Award, TrendingDown, BarChart, MapPin, BadgeCheck } from 'lucide-react';
import Section from '../Section';
import Reveal from '../Reveal';

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      text: '98% operational accuracy achievement',
    },
    {
      icon: TrendingDown,
      text: 'Reduced revisions by 25%',
    },
    {
      icon: BarChart,
      text: 'Built churn analytics dashboard',
    },
    {
      icon: MapPin,
      text: 'Ranked top cities via SQL analysis',
    },
    {
      icon: BadgeCheck,
      text: 'Microsoft Skill India certified in AI applications',
    },
  ];

  return (
    <Section id="achievements" className="bg-muted/30">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </Reveal>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <achievement.icon className="text-primary" size={24} />
                </div>
                <p className="text-muted-foreground text-lg pt-2">{achievement.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
