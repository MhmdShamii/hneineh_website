import { Link } from 'react-router-dom'
import { galleryLinks, gallerySection } from '../content/gallery'
import ImagePlaceholder from './ui/ImagePlaceholder'
import ImageWithLoader from './ui/ImageWithLoader'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function GalleryLinksSection() {
  return (
    <section id="gallery" className="bg-greige px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={gallerySection.title} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {galleryLinks.map((link, index) => (
            <Reveal key={link.id} delayMs={index * 100}>
              <Link
                to={link.href}
                className="group block overflow-hidden rounded-lg bg-white/50 ring-1 ring-ink/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  {link.imageSrc ? (
                    <ImageWithLoader
                      src={link.imageSrc}
                      alt={link.imageAlt}
                      className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder label={link.imageAlt} ratio="video" className="rounded-none" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-body text-2xl font-semibold text-brown">{link.title}</h3>
                  <p className="font-body mt-2 text-sm text-ink/70">{link.description}</p>
                  <span className="font-body mt-4 inline-block text-sm text-olive transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    استعرض المزيد ←
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
