'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Anchor,
  Settings,
  Wrench,
  Shield,
  Cog,
  Users,
} from 'lucide-react';

const services = [
  {
    icon: Anchor,
    title: 'Marine Propulsion Systems',
    description: 'Design and integration of advanced propulsion automation for naval vessels, commercial ships, and submarines.',
  },
  {
    icon: Settings,
    title: 'Machinery Assembly',
    description: 'Complete assembly of heavy duty machinery including turbines, engines, and hydraulic systems for defense applications.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description: 'Comprehensive maintenance programs and emergency repair services for military and marine equipment worldwide.',
  },
  {
    icon: Shield,
    title: 'Defense Systems Integration',
    description: 'Integration of automated control systems for armored vehicles, weapons platforms, and military installations.',
  },
  {
    icon: Cog,
    title: 'Heavy Equipment Automation',
    description: 'Automation solutions for cranes, winches, deck machinery, and heavy lifting equipment in shipyards and ports.',
  },
  {
    icon: Users,
    title: 'Technical Consulting',
    description: 'Expert engineering consulting for naval architecture, defense procurement, and machinery specification.',
  },
];

export function ServicesSection() {
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
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
            Our Capabilities
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            Full-spectrum heavy machinery automation services for marine and military applications, from design to deployment.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="group relative h-full overflow-hidden border-border/40 bg-card/50 p-6 transition-all duration-300 hover:border-accent/50 hover:bg-card/80 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative space-y-4">
                    <div className="inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    
                    <p className="text-foreground/60">
                      {service.description}
                    </p>

                    <div className="pt-4">
                      <a
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                      >
                        Learn More
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
