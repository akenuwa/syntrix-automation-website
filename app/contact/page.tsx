import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Syntrix Automation',
  description: 'Get in touch with Syntrix Automation. Contact our sales and technical teams for inquiries and support.',
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
    description: 'Available during business hours',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@syntrix.com', 'sales@syntrix.com'],
    description: 'Response within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Innovation Drive', 'Industrial Park, NY 10001, USA'],
    description: 'Global Headquarters',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon-Fri: 8:00 AM - 6:00 PM ET', 'Sat: 9:00 AM - 2:00 PM ET'],
    description: 'UTC-5 Eastern Time',
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Have a project in mind? Let&apos;s discuss how Syntrix can help transform your operations.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.title} className="border-border/40 bg-card/50 p-6 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-foreground/70 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-xs text-foreground/50">
                        {info.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 md:py-32 bg-card/30 border-t border-border/40">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-foreground/70">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Locations
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { city: 'New York', region: 'North America', address: '123 Innovation Drive, NY 10001' },
                { city: 'London', region: 'Europe', address: '456 Tech Park, London EC1A 1BB' },
                { city: 'Singapore', region: 'Asia Pacific', address: '789 Innovation Hub, Singapore 018989' },
              ].map((location) => (
                <Card key={location.city} className="border-border/40 bg-card/50 p-8">
                  <h3 className="text-xl font-semibold text-accent mb-2">
                    {location.city}
                  </h3>
                  <p className="text-sm font-medium text-foreground/70 mb-4">
                    {location.region}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {location.address}
                  </p>
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
