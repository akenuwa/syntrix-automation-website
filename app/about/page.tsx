import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import {
  Target,
  Lightbulb,
  Heart,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Syntrix | Marine & Military Machinery Specialists',
  description: 'Learn about Syntrix Automation, our history in heavy duty machinery for marine and military applications, and our commitment to defense excellence.',
};

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue excellence in every project, delivering solutions that exceed expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuous innovation drives us to develop cutting-edge automation solutions.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with transparency and maintain the highest ethical standards.',
  },
  {
    icon: Globe,
    title: 'Global Vision',
    description: 'We think globally while delivering locally relevant solutions to diverse markets.',
  },
];

const team = [
  { name: 'Dr. James Mitchell', role: 'Chief Executive Officer', years: '25+ years industry experience' },
  { name: 'Sarah Chen', role: 'Chief Technology Officer', years: '20+ years automation expertise' },
  { name: 'Michael Rodriguez', role: 'VP Operations', years: '18+ years project management' },
  { name: 'Dr. Priya Patel', role: 'VP Engineering', years: '22+ years system design' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              About Syntrix Automation
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Leading heavy duty machinery automation for marine vessels and military defense applications. Trusted by navies and defense contractors across six continents.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-foreground/70">
                  Founded in 1998, Syntrix Automation began with a mission to revolutionize heavy duty machinery automation for the marine and military sectors. What started as a team of five naval engineers has grown into a global organization serving over 200 naval vessels and 500+ defense projects worldwide.
                </p>
                <p className="text-lg text-foreground/70">
                  Today, our 300+ team members bring diverse expertise in marine propulsion systems, military machinery, shipyard operations, and defense manufacturing to every project we undertake.
                </p>
                <p className="text-lg text-foreground/70">
                  We specialize in developing, maintaining, and assembling heavy duty machinery automation systems for naval vessels, commercial ships, armored vehicles, and military installations.
                </p>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11429728_918437704885706_9084464199721363671_n-tCzRdXSFZQbVi6i4SrFepEHcqBG5qz.jpg"
                  alt="Syntrix Automation team in board room meeting"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To deliver world-class heavy machinery automation solutions that enable naval forces and defense organizations to operate more effectively and safely. We are committed to continuous innovation and to building long-term partnerships with military and maritime clients worldwide.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To be the global leader in marine and military heavy machinery automation, recognized for our expertise in propulsion systems, defense manufacturing, and shipyard operations. We envision a future where our automation systems strengthen naval capabilities and protect those who serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title} className="border-border/40 bg-card/50 p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-foreground/60">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team & Meeting */}
        <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Leadership & Collaboration
            </h2>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-16">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10521732_795206670542144_1739303947362592642_o-Ppfvu7OWAJOcNXFKpbsKhNgR44fefL.jpg"
                  alt="Leadership team panel discussion"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Our Leadership Team</h3>
                <p className="text-lg text-foreground/70">
                  Our executive team brings together decades of combined experience in industrial automation, engineering, and global business operations.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {team.map((member) => (
                    <div key={member.name} className="border-l-4 border-accent pl-4 py-2">
                      <p className="font-semibold text-foreground">{member.name}</p>
                      <p className="text-accent text-sm font-medium">{member.role}</p>
                      <p className="text-foreground/60 text-sm">{member.years}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Photo */}
            <div className="overflow-hidden rounded-lg shadow-lg mt-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2027%2C%202026%2C%2010_41_47%20AM-V3zcOyruExM13mTrUyveOgdN2loz1X.png"
                alt="Syntrix team leadership and partnership"
                width={1200}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
