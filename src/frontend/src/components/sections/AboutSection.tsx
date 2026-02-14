import { Target, Lightbulb, Wrench } from 'lucide-react';
import Section from '../Section';
import Reveal from '../Reveal';

export default function AboutSection() {
  const strengths = [
    'Analytical Thinking',
    'Problem Solving',
    'Data Visualization',
    'Attention to Detail',
  ];

  const tools = [
    'SQL',
    'Power BI',
    'Excel',
    'Python',
    'Prompt Engineering',
    'AI Tools',
  ];

  return (
    <Section id="about" className="bg-muted/30">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <Reveal delay={100}>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a dedicated Business Analytics professional pursuing my MBA at Sharda University, I combine academic excellence with practical experience in data-driven decision making. My journey in analytics has equipped me with the technical skills and business acumen needed to transform complex datasets into actionable insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in SQL, Power BI, and predictive analytics, I've successfully delivered projects that drive business value. My experience spans from sales analysis and customer churn prediction to operational excellence in real-world business environments.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-3 mb-4">
                <Target className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Career Goal</h3>
                  <p className="text-muted-foreground">
                    To work as a Business Analyst using analytics to improve business performance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-3 mb-4">
                <Lightbulb className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Core Strengths</h3>
                  <div className="flex flex-wrap gap-2">
                    {strengths.map((strength) => (
                      <span
                        key={strength}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-3 mb-4">
                <Wrench className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Technical Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
