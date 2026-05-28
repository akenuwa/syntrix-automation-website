'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
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

  const machineryImages = [
    {
      src: '/images/hydraulic-press.png',
      alt: 'Hydraulic Press machinery',
      title: 'Hydraulic Press',
    },
    {
      src: '/images/pneumatic-press.png',
      alt: 'Pneumatic Press machinery',
      title: 'Pneumatic Press',
    },
    {
      src: '/images/press-stamping-die.png',
      alt: 'Press Stamping Die',
      title: 'Press Stamping Die',
    },
    {
      src: '/images/press-auxiliary-accessories.png',
      alt: 'Press Auxiliary Accessories',
      title: 'Press Auxiliary Accessories',
    },
    {
      src: '/images/rod-billet-cutting.png',
      alt: 'Rod Billet Cutting Machine',
      title: 'Rod Billet Cutting Machine',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <p className="text-sm font-medium text-accent">
                Heavy Duty Machinery Automation Specialists
              </p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Marine &amp; Military <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Heavy Machinery</span> Automation
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="max-w-2xl text-lg text-foreground/70 md:text-xl">
              We develop, maintain, and assemble heavy duty machinery automation systems for marine vessels and military defense applications. Trusted by navies and defense contractors worldwide.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact" className="gap-2">
                Request a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Our Capabilities</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-4 md:gap-8"
          >
            {[
              { label: 'Naval Vessels Equipped', value: '200+' },
              { label: 'Defense Projects', value: '500+' },
              { label: 'Years Experience', value: '25+' },
              { label: 'Engineers Worldwide', value: '300+' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-2xl font-bold text-accent md:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs text-foreground/60 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Company Photos */}
          <motion.div variants={itemVariants} className="pt-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10321209_713095568753255_3472548773213599776_o-cqAOnSLpRHun7nEptLRnysjbMkzC5x.jpg"
                  alt="Leadership touring industrial facility"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2027%2C%202026%2C%2010_34_37%20AM-ri20zCaVZKZILlnp3fy44n9wmCwBlH.png"
                  alt="CEO presenting Syntrix vision"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Heavy Duty Machinery Gallery */}
          <motion.div variants={itemVariants} className="pt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 md:text-3xl">
              Our Heavy Duty Machinery Systems
            </h2>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
              {machineryImages.slice(0, 3).map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 grid-cols-2 mt-4">
              {machineryImages.slice(3).map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
