import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Zap,
  Settings,
  Cpu,
  Shield,
  TrendingUp,
  Users,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Syntrix Automation',
  description: 'Comprehensive automation and industrial engineering services tailored to your needs.',
};

const serviceDetails = [
  {
    icon: Zap,
    title: 'System Design',
    shortDesc: 'Custom automation systems engineered to your specifications.',
    fullDesc: 'Our expert engineers design custom automation systems tailored to your exact requirements. From concept through detailed design, we ensure every component works together seamlessly.',
    benefits: [
      'Custom architecture designed for your needs',
      'Full technical documentation and schematics',
      '3D modeling and simulation before deployment',
      'Scalable design for future expansion',
    ],
  },
  {
    icon: Settings,
    title: 'Integration Services',
    shortDesc: 'Seamless integration with existing infrastructure.',
    fullDesc: 'We specialize in integrating new automation systems with your existing legacy systems and infrastructure, minimizing disruption to operations.',
    benefits: [
      'Legacy system compatibility',
      'Minimal operational downtime',
      'Data migration and synchronization',
      'Testing and validation protocols',
    ],
  },
  {
    icon: Cpu,
    title: 'Control Systems',
    shortDesc: 'Advanced PLCs and distributed control.',
    fullDesc: 'Implementation of advanced programmable logic controllers (PLCs) and distributed control systems (DCS) for maximum efficiency and reliability.',
    benefits: [
      'Industrial-grade PLC programming',
      'Real-time monitoring and diagnostics',
      'Failover and redundancy systems',
      'Cloud integration capabilities',
    ],
  },
  {
    icon: Shield,
    title: 'Safety Solutions',
    shortDesc: 'Comprehensive safety system compliance.',
    fullDesc: 'Complete safety solutions meeting all international standards including SIL ratings, emergency stops, and personnel protection systems.',
    benefits: [
      'SIL 1-4 certified systems',
      'Emergency shutdown procedures',
      'Personnel safety interlocks',
      'Compliance documentation and audits',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Optimization Services',
    shortDesc: 'Performance analysis and improvement.',
    fullDesc: 'We analyze your existing systems to identify bottlenecks and optimization opportunities, delivering measurable improvements in efficiency.',
    benefits: [
      'Performance benchmarking',
      'Energy efficiency analysis',
      'Process optimization modeling',
      'Continuous improvement consulting',
    ],
  },
  {
    icon: Users,
    title: 'Consulting Services',
    shortDesc: 'Expert technical and strategic guidance.',
    fullDesc: 'Our experienced consultants provide technical expertise and strategic planning to guide your automation initiatives from planning through execution.',
    benefits: [
      'Technical feasibility studies',
      'ROI analysis and business case development',
      'Technology selection guidance',
      'Project management support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Comprehensive automation solutions designed to transform your operations. From initial design through ongoing optimization, we deliver expertise and results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceDetails.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.title} className="border-border/40 bg-card/50 p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                    <div className="space-y-6">
                      <div className="inline-flex rounded-lg bg-accent/10 p-4 text-accent">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-foreground/70 mb-4">
                          {service.fullDesc}
                        </p>
                      </div>
                      <div className="space-y-3 pt-4 border-t border-border/40">
                        <p className="text-sm font-semibold text-foreground">Key Benefits:</p>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground/60">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { step: '01', title: 'Discovery', desc: 'We analyze your needs, challenges, and objectives.' },
                { step: '02', title: 'Design', desc: 'Custom solutions are designed with your input.' },
                { step: '03', title: 'Implementation', desc: 'Systems are built, tested, and deployed.' },
                { step: '04', title: 'Support', desc: 'Ongoing optimization and technical support.' },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col gap-4">
                    <p className="text-4xl font-bold text-accent/50">{item.step}</p>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-foreground/60">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-accent/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
