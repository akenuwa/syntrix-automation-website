'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function GallerySection() {
  const gallery = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11429728_918437704885706_9084464199721363671_n-tCzRdXSFZQbVi6i4SrFepEHcqBG5qz.jpg',
      alt: 'Team board room meeting and collaboration',
      title: 'Leadership Meetings',
      category: 'Team',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2027%2C%202026%2C%2010_34_37%20AM-ri20zCaVZKZILlnp3fy44n9wmCwBlH.png',
      alt: 'CEO presenting company vision and strategy',
      title: 'Executive Leadership',
      category: 'Leadership',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10521732_795206670542144_1739303947362592642_o-Ppfvu7OWAJOcNXFKpbsKhNgR44fefL.jpg',
      alt: 'Industry panel discussion with executives',
      title: 'Industry Partnerships',
      category: 'Events',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10321209_713095568753255_3472548773213599776_o-cqAOnSLpRHun7nEptLRnysjbMkzC5x.jpg',
      alt: 'Leadership touring industrial facility',
      title: 'Facility Operations',
      category: 'Operations',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2027%2C%202026%2C%2010_41_47%20AM-V3zcOyruExM13mTrUyveOgdN2loz1X.png',
      alt: 'Team and military partnership collaboration',
      title: 'Strategic Partnerships',
      category: 'Partnerships',
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
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center space-y-4">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              Company Moments
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Syntrix in Action
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet our team, explore our partnerships, and see how we&apos;re transforming industrial automation globally.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={400}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-lg text-foreground/70 mb-6">
              Want to see more of what we do?
            </p>
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors">
              View Our Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
