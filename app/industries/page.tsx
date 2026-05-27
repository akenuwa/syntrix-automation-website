import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import {
  Factory,
  Droplet,
  Zap,
  Pill,
  Package,
  Wind,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries | Syntrix Automation',
  description: 'Specialized automation solutions for manufacturing, energy, pharmaceutical, logistics, and more.',
};

const industryDetails = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Advanced manufacturing automation solutions.',
    challenges: [
      'Production efficiency and throughput optimization',
      'Quality control and consistency',
      'Equipment integration and synchronization',
      'Predictive maintenance systems',
    ],
    solutions: [
      'Automated production line control systems',
      'Vision-based quality inspection',
      'MES and factory floor integration',
      'IoT-enabled predictive analytics',
    ],
  },
  {
    icon: Droplet,
    title: 'Chemical & Petrochemical',
    description: 'Specialized control systems for hazardous processes.',
    challenges: [
      'Safety compliance and hazard management',
      'Process consistency under varying conditions',
      'Environmental compliance',
      'Complex multi-stage reactions',
    ],
    solutions: [
      'SIL-rated safety instrumentation',
      'Advanced DCS systems with redundancy',
      'Environmental monitoring and reporting',
      'Real-time process optimization',
    ],
  },
  {
    icon: Zap,
    title: 'Power & Energy',
    description: 'Grid management and distributed energy automation.',
    challenges: [
      'Grid stability and load balancing',
      'Renewable energy integration',
      'Real-time dispatch optimization',
      'Asset monitoring and predictive maintenance',
    ],
    solutions: [
      'SCADA and grid management systems',
      'Smart inverter control systems',
      'Advanced load forecasting',
      'Asset health monitoring platforms',
    ],
  },
  {
    icon: Pill,
    title: 'Pharmaceutical',
    description: 'GMP-compliant automation with full traceability.',
    challenges: [
      'Regulatory compliance (FDA, GMP)',
      'Batch traceability and documentation',
      'Cleanroom environment control',
      'Product safety and integrity',
    ],
    solutions: [
      'GMP-compliant DCS implementation',
      'Electronic batch record systems',
      'Cleanroom HVAC control',
      'Complete product genealogy tracking',
    ],
  },
  {
    icon: Package,
    title: 'Logistics & Distribution',
    description: 'Material handling and warehouse automation.',
    challenges: [
      'High-speed sorting and handling',
      'Inventory accuracy and visibility',
      'Labor efficiency optimization',
      'System scalability and flexibility',
    ],
    solutions: [
      'Automated conveyor and sorter control',
      'Warehouse Management Systems (WMS)',
      'Robotic picking and packing systems',
      'Real-time inventory management',
    ],
  },
  {
    icon: Wind,
    title: 'Renewable Energy',
    description: 'Smart control systems for renewable generation.',
    challenges: [
      'Intermittency management',
      'Energy storage optimization',
      'Grid connection requirements',
      'Performance monitoring and optimization',
    ],
    solutions: [
      'Wind and solar plant control systems',
      'Battery energy storage management',
      'Grid-tie inverter control',
      'Plant performance analytics',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Industries We Serve
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Deep expertise across diverse industrial sectors with specialized automation solutions tailored to your industry&apos;s unique challenges.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              {industryDetails.map((industry, idx) => {
                const IconComponent = industry.icon;
                const isEven = idx % 2 === 0;
                
                return (
                  <div
                    key={industry.title}
                    className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${isEven ? '' : 'lg:grid-cols-2'}`}
                  >
                    <div className={isEven ? 'order-1' : 'order-2'}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="inline-flex rounded-lg bg-accent/10 p-4 text-accent">
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-foreground">
                              {industry.title}
                            </h2>
                            <p className="text-foreground/60">
                              {industry.description}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            Industry Challenges
                          </h3>
                          <ul className="space-y-2">
                            {industry.challenges.map((challenge) => (
                              <li key={challenge} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/70">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            Our Solutions
                          </h3>
                          <ul className="space-y-2">
                            {industry.solutions.map((solution) => (
                              <li key={solution} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/70">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className={isEven ? 'order-2' : 'order-1'}>
                      <Card className="border-border/40 bg-card/50 h-96 p-8 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="inline-flex rounded-xl bg-accent/10 p-8 text-accent">
                            <IconComponent className="h-16 w-16" />
                          </div>
                          <p className="text-foreground/60">
                            Industry-specific automation solutions
                          </p>
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Why Choose Syntrix for Your Industry?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Deep Industry Knowledge',
                  description: 'Our teams bring decades of combined experience in your specific industry sector.',
                },
                {
                  title: 'Regulatory Expertise',
                  description: 'We understand compliance requirements and help you meet all regulatory standards.',
                },
                {
                  title: 'Proven Track Record',
                  description: 'Thousands of successful implementations across every major industry vertical.',
                },
                {
                  title: 'Specialized Training',
                  description: 'We provide comprehensive training specific to your industry and systems.',
                },
                {
                  title: 'Ongoing Support',
                  description: 'Long-term partnership with 24/7 technical support and optimization services.',
                },
                {
                  title: 'Innovation Focus',
                  description: 'We stay ahead of industry trends and emerging technologies in automation.',
                },
              ].map((benefit) => (
                <Card key={benefit.title} className="border-border/40 bg-background p-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/60">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
