'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Award, Shield } from 'lucide-react';

const certifications = [
  { name: 'ISO 9001', type: 'Quality Management', status: 'Active' },
  { name: 'ISO 14001', type: 'Environmental Management', status: 'Active' },
  { name: 'ISO 45001', type: 'Occupational Health & Safety', status: 'Active' },
  { name: 'IEC 61508', type: 'Functional Safety', status: 'Active' },
  { name: 'IEC 62061', type: 'Safety of Machinery Control Systems', status: 'Active' },
  { name: 'FDA 21 CFR Part 11', type: 'Electronic Records Compliance', status: 'Active' },
];

const standards = [
  { title: 'Safety Standards', items: ['SIL 1-4 Certification', 'ANSI/ISA Standards', 'NFPA Standards'] },
  { title: 'Industry Standards', items: ['IEC 61131-3', 'OPC UA Protocol', 'Modbus & Profibus'] },
  { title: 'Regulatory Compliance', items: ['FDA Pharma', 'EU Machinery Directive', 'ATEX Directives'] },
];

export function ComplianceSection() {
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
    <section className="py-20 md:py-32 relative overflow-hidden border-t border-border/40">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
            Certifications & Compliance
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            We maintain the highest standards of quality, safety, and regulatory compliance across all our operations and projects.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            ISO & International Certifications
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <motion.div key={cert.name} variants={itemVariants}>
                <Card className="border-border/40 bg-card/50 p-6 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-foreground/60">{cert.type}</p>
                    </div>
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {cert.status}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Standards & Compliance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Standards & Compliance Framework
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {standards.map((standard) => (
              <motion.div key={standard.title} variants={itemVariants}>
                <Card className="border-border/40 bg-card/50 p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {standard.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {standard.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-16 p-8 rounded-lg border border-accent/20 bg-accent/5"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Our Commitment to Excellence
          </h3>
          <p className="text-foreground/70 leading-relaxed">
            At Syntrix Automation, compliance is not just a requirement—it&apos;s a core value. We undergo regular third-party audits, maintain current certifications, and continuously update our processes to exceed industry standards. Our clients can be confident that our solutions meet the highest regulatory requirements across all industries we serve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
