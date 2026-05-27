import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Projects | Syntrix Automation',
  description: 'Explore our portfolio of successful automation and industrial engineering projects.',
};

const allProjects = [
  {
    title: 'Advanced Refinery Control System',
    industry: 'Petrochemical',
    client: 'Global Oil Corporation',
    year: 2023,
    description: 'Implemented distributed control system for major refinery increasing efficiency by 23%.',
    scope: [
      'DCS architecture design and implementation',
      'PLC programming and commissioning',
      'Integration with existing SCADA systems',
      'Staff training and documentation',
    ],
    results: [
      '23% increase in processing efficiency',
      '15% reduction in energy consumption',
      '99.8% system uptime',
      '8-month implementation',
    ],
    tags: ['DCS', 'Process Control', 'SCADA', 'Integration'],
  },
  {
    title: 'Smart Manufacturing Line',
    industry: 'Automotive',
    client: 'Leading Auto Manufacturer',
    year: 2023,
    description: 'Fully automated production line with AI-driven quality control reducing defects by 45%.',
    scope: [
      'Robotics integration and programming',
      'Vision system implementation',
      'Real-time quality monitoring',
      'Data analytics and reporting',
    ],
    results: [
      '45% reduction in defects',
      '30% increase in throughput',
      'Real-time quality tracking',
      'Zero downtime maintenance',
    ],
    tags: ['Robotics', 'Vision Systems', 'IoT', 'AI'],
  },
  {
    title: 'Grid Management Platform',
    industry: 'Renewable Energy',
    client: 'Regional Utility Company',
    year: 2022,
    description: 'Real-time grid balancing system managing 500MW of distributed solar and wind capacity.',
    scope: [
      'Smart grid control system design',
      'Renewable energy integration',
      'Real-time dispatch optimization',
      'Cloud-based monitoring platform',
    ],
    results: [
      '500MW capacity management',
      '12% improvement in grid stability',
      'Real-time monitoring dashboard',
      'Automated dispatch optimization',
    ],
    tags: ['Smart Grid', 'Real-time Control', 'Analytics', 'Cloud'],
  },
  {
    title: 'Pharmaceutical Clean Room',
    industry: 'Pharmaceutical',
    client: 'Major Pharma Company',
    year: 2022,
    description: 'GMP-compliant automation system with full environmental monitoring and traceability.',
    scope: [
      'HVAC control system design',
      'Environmental monitoring',
      'Electronic batch records',
      'Compliance documentation',
    ],
    results: [
      'FDA 21 CFR Part 11 compliant',
      'ISO 14644 Class 6 cleanroom',
      'Complete product genealogy',
      'Zero compliance issues',
    ],
    tags: ['GMP Compliance', 'HVAC Control', 'Traceability', 'Pharma'],
  },
  {
    title: 'Logistics Hub Automation',
    industry: 'Logistics',
    client: 'Global Logistics Provider',
    year: 2021,
    description: 'Automated warehouse with robotic picking and sorting system handling 50K packages daily.',
    scope: [
      'Conveyor system design and control',
      'Robotic arm integration',
      'WMS integration',
      'Safety system implementation',
    ],
    results: [
      '50,000 packages per day',
      '60% labor reduction',
      '99.2% accuracy',
      '24/7 automated operation',
    ],
    tags: ['Robotics', 'Conveyor Systems', 'WMS', 'Logistics'],
  },
  {
    title: 'Water Treatment Plant',
    industry: 'Utilities',
    client: 'Municipal Water Authority',
    year: 2021,
    description: 'Complete automation of treatment processes improving water quality and reducing costs.',
    scope: [
      'Process automation design',
      'Chemical dosing control',
      'Quality monitoring systems',
      'Operator interface design',
    ],
    results: [
      '25% cost reduction',
      'Improved water quality',
      'Compliance certification',
      'Automated operation',
    ],
    tags: ['Process Automation', 'Quality Control', 'Utilities', 'Optimization'],
  },
  {
    title: 'Wind Farm Control System',
    industry: 'Renewable Energy',
    client: 'Offshore Wind Developer',
    year: 2023,
    description: '100-turbine offshore wind farm with advanced SCADA and optimization controls.',
    scope: [
      'SCADA system development',
      'Turbine control integration',
      'Predictive maintenance',
      'Performance analytics',
    ],
    results: [
      '400MW total capacity',
      '18% improvement in energy yield',
      'Predictive maintenance system',
      'Real-time performance monitoring',
    ],
    tags: ['Wind Energy', 'SCADA', 'Predictive Maintenance', 'Analytics'],
  },
  {
    title: 'Steel Mill Automation',
    industry: 'Manufacturing',
    client: 'Integrated Steel Producer',
    year: 2022,
    description: 'Integrated automation of furnaces, rolling mills, and quality control systems.',
    scope: [
      'Furnace temperature control',
      'Rolling mill optimization',
      'Quality inspection systems',
      'Production scheduling',
    ],
    results: [
      '15% throughput increase',
      'Consistent product quality',
      'Reduced scrap rate by 20%',
      'Improved safety record',
    ],
    tags: ['Manufacturing', 'Process Control', 'Quality Systems', 'Integration'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Projects
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Explore our portfolio of successful automation and industrial engineering projects delivering real results for industry leaders worldwide.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              {allProjects.map((project, idx) => (
                <Card
                  key={project.title}
                  className="border-border/40 bg-card/50 p-8 md:p-12 hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        <div>
                          <Badge className="mb-4" variant="secondary">
                            {project.industry}
                          </Badge>
                          <h3 className="text-3xl font-bold text-foreground mb-2">
                            {project.title}
                          </h3>
                          <p className="text-lg text-foreground/70">
                            {project.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-3">
                              Project Scope
                            </h4>
                            <ul className="space-y-2">
                              {project.scope.map((item) => (
                                <li key={item} className="text-sm text-foreground/60">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-3">
                              Key Results
                            </h4>
                            <ul className="space-y-2">
                              {project.results.map((item) => (
                                <li key={item} className="text-sm text-foreground/60">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Card */}
                    <div className="flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                            Client
                          </p>
                          <p className="text-lg font-semibold text-foreground">
                            {project.client}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                            Completion Year
                          </p>
                          <p className="text-lg font-semibold text-accent">
                            {project.year}
                          </p>
                        </div>
                      </div>
                    </div>
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
