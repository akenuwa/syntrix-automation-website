'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function MachinerySection() {
  const machinery = [
    {
      image: '/images/hydraulic-press.png',
      name: 'Hydraulic Press',
      description: 'High-force hydraulic press systems for heavy duty metal forming, stamping, and assembly operations. Precision control and reliable performance for demanding industrial applications.',
      specs: ['Force Range: 50-500 tons', 'Pressure: Up to 300 bar', 'Automation Ready'],
    },
    {
      image: '/images/pneumatic-press.png',
      name: 'Pneumatic Press',
      description: 'Fast-acting pneumatic press machines ideal for precision work and high-speed production cycles. Compact design with excellent control for manufacturing applications.',
      specs: ['Compact Design', 'High Speed Operation', 'Low Maintenance'],
    },
    {
      image: '/images/press-stamping-die.png',
      name: 'Press Stamping Die',
      description: 'Custom engineered stamping dies for precision metal forming and cutting operations. Durable construction designed for extended production runs and consistent quality.',
      specs: ['Custom Design', 'Precision Tolerance', 'Extended Tool Life'],
    },
    {
      image: '/images/press-auxiliary-accessories.png',
      name: 'Press Auxiliary Accessories',
      description: 'Complete line of support components including guide posts, cylinders, springs, and hydraulic systems to optimize press performance and reliability.',
      specs: ['Multiple Options', 'High Quality Materials', 'Easy Integration'],
    },
    {
      image: '/images/rod-billet-cutting.png',
      name: 'Rod Billet Cutting Machine',
      description: 'Precision cutting machines for rod and billet material processing. Automated systems for consistent cut lengths and minimal material waste.',
      specs: ['Precision Cutting', 'Material Waste Reduction', 'Automated Operation'],
    },
    {
      image: '/images/wire-bending-machine.png',
      name: 'Wire Bending Machine',
      description: 'Advanced wire bending systems for forming complex wire components and assemblies. Programmable control for various shapes and production volumes.',
      specs: ['Multi-Axis Control', 'Programmable Patterns', 'Wire Range: 0.5-16mm'],
    },
    {
      image: '/images/wire-straight-cutting.png',
      name: 'Wire Straight Cutting Machine',
      description: 'High-precision wire cutting equipment for straight cut applications. Maintains dimensional accuracy for quality assurance in production.',
      specs: ['Precision Accuracy', 'High-Speed Cutting', 'Consistent Length'],
    },
    {
      image: '/images/wire-phosphating-machine.png',
      name: 'Wire Phosphating Machine',
      description: 'Chemical surface treatment systems for wire protection and corrosion resistance. Industrial-grade coating processes for enhanced durability.',
      specs: ['Corrosion Resistant', 'Environmental Compliance', 'Uniform Coating'],
    },
  ];

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
    <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -200px 0px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Machinery & Equipment
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Complete portfolio of heavy duty industrial machinery for manufacturing, forming, cutting, and finishing operations
            </p>
          </motion.div>

          {/* Machinery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machinery.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Card className="border-0 overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full h-64 overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Specs */}
                    <div className="pt-4 border-t border-border/40">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {item.specs.map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-center gap-2 text-sm text-foreground/70">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
