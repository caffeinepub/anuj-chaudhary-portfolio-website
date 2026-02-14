import { Database, Users, TrendingUp, ExternalLink } from 'lucide-react';
import Section from '../Section';
import Reveal from '../Reveal';

export default function ProjectsSection() {
  const projects = [
    {
      icon: Database,
      title: 'SQL Sales Analysis Project',
      description: 'Analyzed sales dataset to identify top 3 cities for store expansion based on revenue, demand, rent, and growth.',
      tools: ['SQL', 'Data Analysis', 'Business Intelligence'],
      outcome: 'Identified optimal expansion locations with comprehensive revenue and growth metrics, enabling data-driven strategic decisions for business expansion.',
    },
    {
      icon: Users,
      title: 'Customer Churn Dashboard',
      description: 'Built end-to-end analytics solution using SQL + Power BI to identify churn patterns and retention opportunities.',
      tools: ['SQL', 'Power BI', 'Data Visualization'],
      outcome: 'Created interactive dashboard revealing key churn drivers and retention strategies, providing actionable insights for customer success teams.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics Research',
      description: 'Research study on predictive analytics for risk management in quick commerce startups focusing on inventory, logistics, and cost optimization.',
      tools: ['Predictive Analytics', 'Research', 'Risk Management'],
      outcome: 'Developed comprehensive framework for risk mitigation in quick commerce operations, addressing inventory optimization and logistics efficiency.',
    },
  ];

  return (
    <Section id="projects" className="bg-background">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Real-world analytics projects demonstrating expertise in SQL, Power BI, and predictive modeling
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100}>
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <project.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Outcome</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
