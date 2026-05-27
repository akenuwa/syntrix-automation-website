'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Michael Chen',
    title: 'VP Operations',
    company: 'Global Manufacturing Corp',
    quote: 'Syntrix transformed our production line. Their expertise and professionalism delivered results beyond expectations. A trusted partner for years.',
    rating: 5,
  },
  {
    name: 'Sarah Anderson',
    title: 'Plant Manager',
    company: 'Energy Solutions Inc',
    quote: 'The automation system they implemented increased our efficiency by 30%. Outstanding support and technical excellence throughout.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    title: 'Director of Engineering',
    company: 'Logistics Innovations',
    quote: 'From design to deployment, Syntrix handled everything flawlessly. Their team understands our industry deeply and delivers innovative solutions.',
    rating: 5,
  },
  {
    name: 'Dr. Priya Singh',
    title: 'Quality Assurance Manager',
    company: 'PharmaCorp International',
    quote: 'Implementing a GMP-compliant system was complex, but Syntrix guided us through it seamlessly. Highly recommended for pharmaceutical automation.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -left-40 bottom-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            Trusted by industry leaders worldwide to deliver results that exceed expectations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card className="h-full border-border/40 bg-card/50 p-6 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 flex flex-col gap-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/70 italic flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/40">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-foreground/60">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-accent font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
