'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Advanced Refinery Control System',
    industry: 'Petrochemical',
    description: 'Implemented distributed control system for major refinery increasing efficiency by 23%.',
    tags: ['DCS', 'Process Control', 'SCADA'],
  },
  {
    title: 'Smart Manufacturing Line',
    industry: 'Automotive',
    description: 'Fully automated production line with AI-driven quality control reducing defects by 45%.',
    tags: ['Robotics', 'Vision Systems', 'IoT'],
  },
  {
    title: 'Grid Management Platform',
    industry: 'Renewable Energy',
    description: 'Real-time grid balancing system managing 500MW of distributed solar and wind capacity.',
    tags: ['Smart Grid', 'Real-time Control', 'Analytics'],
  },
  {
    title: 'Pharmaceutical Clean Room',
    industry: 'Pharmaceutical',
    description: 'GMP-compliant automation system with full environmental monitoring and traceability.',
    tags: ['GMP Compliance', 'HVAC Control', 'Traceability'],
  },
  {
    title: 'Logistics Hub Automation',
    industry: 'Logistics',
    description: 'Automated warehouse with robotic picking and sorting system handling 50K packages daily.',
    tags: ['Robotics', 'Conveyor Systems', 'Warehouse Mgmt'],
  },
  {
    title: 'Water Treatment Plant',
    industry: 'Utilities',
    description: 'Complete automation of treatment processes improving water quality and reducing costs.',
    tags: ['Process Automation', 'Quality Control', 'Optimization'],
  },
];

export function ProjectsSection() {
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
            Featured Projects
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            Real-world solutions delivering measurable results for industry leaders.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="group h-full border-border/40 bg-gradient-to-br from-card/80 to-card/40 p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg cursor-pointer overflow-hidden relative">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex-1">
                      {project.title}
                    </h3>
                  </div>

                  <Badge variant="secondary" className="w-fit">
                    {project.industry}
                  </Badge>

                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
