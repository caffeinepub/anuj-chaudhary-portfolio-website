import { ArrowRight, Download, Mail } from 'lucide-react';
import Section from '../Section';
import Reveal from '../Reveal';

export default function HomeSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="w-full">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Anuj Chaudhary
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-8">
              Business Analytics Professional | Aspiring Business Analyst
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Business Analytics postgraduate with hands-on experience in SQL, Power BI, and predictive analysis, focused on delivering data-driven insights that support business growth and strategic decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/assets/Anuj_Chaudhary_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
