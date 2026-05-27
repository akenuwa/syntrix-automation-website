import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Syntrix Automation',
  description: 'Explore Syntrix Automation company photos, team moments, leadership, and partnerships.',
};

export default function GalleryPage() {
  const galleryItems = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11429728_918437704885706_9084464199721363671_n-tCzRdXSFZQbVi6i4SrFepEHcqBG5qz.jpg',
      alt: 'Team board room meeting and collaboration',
      title: 'Leadership Meetings',
      category: 'Team',
      description: 'Our leadership team collaborates in board room strategy sessions to drive company vision.',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2027%2C%202026%2C%2010_34_37%20AM-ri20zCaVZKZILlnp3fy44n9wmCwBlH.png',
      alt: 'CEO presenting company vision and strategy',
      title: 'Executive Leadership',
      category: 'Leadership',
      description: 'Our CEO presents Syntrix vision and commitment to innovation in industrial automation.',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10521732_795206670542144_1739303947362592642_o-Ppfvu7OWAJOcNXFKpbsKhNgR44fefL.jpg',
      alt: 'Industry panel discussion with executives',
      title: 'Industry Partnerships',
      category: 'Events',
      description: 'Syntrix leadership participates in industry panel discussions and conferences.',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10321209_713095568753255_3472548773213599776_o-cqAOnSLpRHun7nEptLRnysjbMkzC5x.jpg',
      alt: 'Leadership touring industrial facility',
      title: 'Facility Operations',
      category: 'Operations',
      description: 'Management and engineers tour industrial facilities to assess automation opportunities.',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2027%2C%202026%2C%2010_41_47%20AM-V3zcOyruExM13mTrUyveOgdN2loz1X.png',
      alt: 'Team and military partnership collaboration',
      title: 'Strategic Partnerships',
      category: 'Partnerships',
      description: 'Syntrix works with strategic partners including government and military organizations.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Syntrix in Action
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Explore moments from our leadership, partnerships, and operations as we drive innovation in industrial automation globally.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {galleryItems.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70">
                      {item.description}
                    </p>
                  </div>
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
