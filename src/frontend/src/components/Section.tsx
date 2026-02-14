import { ReactNode } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className={`container mx-auto px-4 max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
