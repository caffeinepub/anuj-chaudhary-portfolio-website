import { GraduationCap, Calendar } from 'lucide-react';
import Section from '../Section';
import Reveal from '../Reveal';

export default function EducationSection() {
  const education = [
    {
      degree: 'MBA – Business Analytics',
      institution: 'Sharda University',
      period: '2024–2026',
      current: true,
    },
    {
      degree: 'BBA – Human Resources',
      institution: 'Sharda University',
      period: '2021–2024',
      current: false,
    },
  ];

  return (
    <Section id="education" className="bg-background">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </Reveal>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <Reveal key={index} delay={index * 100}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                    {edu.current && (
                      <span className="ml-2 px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
