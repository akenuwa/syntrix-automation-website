import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Syntrix Automation',
  description: 'Join our team of experts. Explore career opportunities at Syntrix Automation.',
};

const jobOpenings = [
  {
    title: 'Senior Controls Engineer',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Senior',
    experience: '7+ years',
    description: 'We&apos;re looking for an experienced controls engineer with expertise in DCS and PLC programming.',
  },
  {
    title: 'Systems Architect',
    location: 'London, UK',
    type: 'Full-time',
    level: 'Senior',
    experience: '10+ years',
    description: 'Design comprehensive automation solutions for large-scale industrial projects.',
  },
  {
    title: 'Software Engineer - Python',
    location: 'Singapore, SG',
    type: 'Full-time',
    level: 'Mid-level',
    experience: '4+ years',
    description: 'Develop backend systems and real-time analytics platforms for automation projects.',
  },
  {
    title: 'Project Manager',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Mid-level',
    experience: '5+ years',
    description: 'Lead complex industrial automation projects from design through completion.',
  },
  {
    title: 'Electrical Engineer',
    location: 'Frankfurt, Germany',
    type: 'Full-time',
    level: 'Mid-level',
    experience: '3+ years',
    description: 'Design electrical systems and control panels for industrial applications.',
  },
  {
    title: 'Technical Support Specialist',
    location: 'Remote',
    type: 'Full-time',
    level: 'Entry-level',
    experience: '1+ years',
    description: 'Provide technical support to clients and help troubleshoot automation systems.',
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Join Our Team
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Build your career with a global leader in industrial automation. We&apos;re looking for talented professionals passionate about technology and innovation.
            </p>
          </div>
        </section>

        {/* Culture & Benefits */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Why Work at Syntrix?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Global Opportunities',
                  description: 'Work on projects across multiple continents and industries with a diverse, international team.',
                },
                {
                  title: 'Continuous Learning',
                  description: 'Access to training programs, certifications, and professional development opportunities.',
                },
                {
                  title: 'Competitive Compensation',
                  description: 'Competitive salaries, bonuses, and comprehensive benefits packages.',
                },
                {
                  title: 'Work-Life Balance',
                  description: 'Flexible working arrangements and generous paid time off policies.',
                },
                {
                  title: 'Innovation Focus',
                  description: 'Work with cutting-edge technologies and contribute to industry innovation.',
                },
                {
                  title: 'Career Growth',
                  description: 'Clear career progression paths and opportunities for advancement and specialization.',
                },
              ].map((benefit) => (
                <Card key={benefit.title} className="border-border/40 bg-card/50 p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/60">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card
                  key={job.title}
                  className="border-border/40 bg-card/50 p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 cursor-pointer group"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-4 items-start">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                        {job.title}
                      </h3>
                      <p className="text-foreground/60 mb-4">
                        {job.description}
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-foreground/70">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-foreground/70">{job.experience}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start md:items-end">
                      <div className="space-y-1 text-right">
                        <p className="text-xs text-foreground/50 uppercase tracking-wide">{job.level}</p>
                        <p className="text-sm font-medium text-accent">{job.type}</p>
                      </div>
                      <button className="text-accent hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium mt-2">
                        View Job
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Internship Program */}
        <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Internship Program
                </h2>
                <p className="text-lg text-foreground/70">
                  Launch your career with Syntrix. Our internship program provides hands-on experience working on real automation projects with experienced mentors.
                </p>
                <ul className="space-y-3">
                  {[
                    'Mentorship from industry experts',
                    'Real project experience',
                    'Professional development training',
                    'Competitive internship stipends',
                    'Potential full-time opportunities',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="border-border/40 bg-background p-8 h-64 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <p className="text-4xl font-bold text-accent">Launch</p>
                  <p className="text-foreground/60">
                    Your automation career starts here
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-3xl px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Don&apos;t see the right position?
            </h2>
            <p className="text-lg text-foreground/70">
              Send us your resume and tell us about your interests. We&apos;re always looking for talented professionals to join our team.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-colors">
              Send Your Resume
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
