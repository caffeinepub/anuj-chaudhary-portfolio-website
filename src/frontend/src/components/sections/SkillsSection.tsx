import { Database, BarChart3, FileSpreadsheet, Code, Sparkles, LineChart, Eye, Brain, Target } from 'lucide-react';
import Section from '../Section';
import Reveal from '../Reveal';

export default function SkillsSection() {
  const skills = [
    { name: 'SQL', icon: Database, level: 90 },
    { name: 'Power BI', icon: BarChart3, level: 85 },
    { name: 'Excel', icon: FileSpreadsheet, level: 90 },
    { name: 'Python', icon: Code, level: 75 },
    { name: 'Prompt Engineering', icon: Sparkles, level: 80 },
    { name: 'Data Analysis', icon: LineChart, level: 90 },
    { name: 'Visualization', icon: Eye, level: 85 },
    { name: 'Critical Thinking', icon: Brain, level: 90 },
    { name: 'Problem Solving', icon: Target, level: 90 },
  ];

  return (
    <Section id="skills" className="bg-background">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technical expertise and professional competencies in business analytics
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 50}>
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
