import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import {
  Anchor,
  Settings,
  Wrench,
  Shield,
  Cog,
  Users,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Syntrix Automation',
  description: 'Heavy duty machinery automation services for marine and military applications including propulsion systems, assembly, and maintenance.',
};

const serviceDetails = [
  {
    icon: Anchor,
    title: 'Marine Propulsion Systems',
    shortDesc: 'Naval vessel propulsion automation.',
    fullDesc: 'Design and integration of advanced propulsion automation for naval vessels, commercial ships, and submarines. We handle diesel-electric, gas turbine, and hybrid propulsion systems.',
    benefits: [
      'Diesel-electric propulsion control',
      'Gas turbine automation systems',
      'Hybrid propulsion integration',
      'Fuel efficiency optimization',
    ],
  },
  {
    icon: Settings,
    title: 'Machinery Assembly',
    shortDesc: 'Heavy duty equipment assembly.',
    fullDesc: 'Complete assembly of heavy duty machinery including turbines, marine engines, and hydraulic systems for defense and commercial marine applications.',
    benefits: [
      'Marine engine assembly and testing',
      'Turbine installation and commissioning',
      'Hydraulic system integration',
      'Quality assurance and certification',
    ],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    shortDesc: 'Global maintenance support.',
    fullDesc: 'Comprehensive maintenance programs and emergency repair services for military and marine heavy machinery equipment deployed worldwide.',
    benefits: [
      'Preventive maintenance programs',
      '24/7 emergency repair response',
      'Spare parts logistics management',
      'On-site and shipyard repair services',
    ],
  },
  {
    icon: Shield,
    title: 'Defense Systems Integration',
    shortDesc: 'Military machinery automation.',
    fullDesc: 'Integration of automated control systems for armored vehicles, weapons platforms, military installations, and defense manufacturing facilities.',
    benefits: [
      'Armored vehicle systems automation',
      'Weapons platform integration',
      'Command and control systems',
      'Military-grade security protocols',
    ],
  },
  {
    icon: Cog,
    title: 'Heavy Equipment Automation',
    shortDesc: 'Port and shipyard automation.',
    fullDesc: 'Automation solutions for cranes, winches, deck machinery, and heavy lifting equipment used in shipyards, ports, and military logistics facilities.',
    benefits: [
      'Crane and winch automation',
      'Deck machinery control systems',
      'Container handling automation',
      'Heavy lift coordination systems',
    ],
  },
  {
    icon: Users,
    title: 'Technical Consulting',
    shortDesc: 'Expert engineering guidance.',
    fullDesc: 'Expert engineering consulting for naval architecture, defense procurement, machinery specification, and strategic project planning for marine and military clients.',
    benefits: [
      'Naval architecture consulting',
      'Defense procurement support',
      'Machinery specification development',
      'Project feasibility studies',
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
              Our Capabilities
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Full-spectrum heavy machinery automation services for marine and military applications. From initial design through deployment and ongoing maintenance, we deliver mission-critical systems.
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
                { step: '01', title: 'Assessment', desc: 'We analyze your vessel or facility requirements and operational needs.' },
                { step: '02', title: 'Engineering', desc: 'Custom machinery systems are designed to military or marine specifications.' },
                { step: '03', title: 'Assembly & Integration', desc: 'Systems are built, assembled, tested, and commissioned on-site.' },
                { step: '04', title: 'Lifecycle Support', desc: 'Ongoing maintenance, repair, and modernization services.' },
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
