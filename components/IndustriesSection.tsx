'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Anchor,
  Shield,
  Ship,
  Truck,
  Building2,
  Container,
} from 'lucide-react';

const industries = [
  {
    icon: Anchor,
    title: 'Naval Defense',
    description: 'Propulsion, weapons systems, and machinery automation for naval vessels and submarines.',
  },
  {
    icon: Ship,
    title: 'Commercial Marine',
    description: 'Cargo ships, tankers, and offshore vessels with advanced engine room automation.',
  },
  {
    icon: Shield,
    title: 'Military Land Systems',
    description: 'Armored vehicles, artillery systems, and mobile command center automation.',
  },
  {
    icon: Truck,
    title: 'Defense Logistics',
    description: 'Heavy transport vehicles and military supply chain machinery systems.',
  },
  {
    icon: Building2,
    title: 'Shipyard Operations',
    description: 'Dry dock equipment, heavy cranes, and shipbuilding machinery automation.',
  },
  {
    icon: Container,
    title: 'Port & Harbor',
    description: 'Container handling, gantry cranes, and port logistics equipment systems.',
  },
];

export function IndustriesSection() {
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
      <div className="absolute -right-40 top-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
            Industries We Serve
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            Specialized heavy machinery automation for marine and military sectors worldwide.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <motion.div key={industry.title} variants={itemVariants}>
                <Card className="group h-full border-border/40 bg-card/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg cursor-pointer">
                  <div className="space-y-4">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-foreground/60">
                      {industry.description}
                    </p>
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
