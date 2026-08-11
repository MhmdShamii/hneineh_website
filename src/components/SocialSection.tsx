import { site, siteText, socialLinks } from '../content/site'
import { socialSection } from '../content/social'
import { usePick } from '../i18n/languageContext'
import SectionHeading from './ui/SectionHeading'
import { socialIconPaths } from './ui/socialIconPaths'
import SplitWindowReveal from './ui/SplitWindowReveal'
import { useInView } from '../hooks/useInView'

export default function SocialSection() {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const section = usePick(socialSection)
  const links = usePick(socialLinks)
  const text = usePick(siteText)

  return (
    <section ref={ref} className="bg-greige">
      <SplitWindowReveal isInView={isInView} centerIcon={site.logos.primaryIcon} centerIconAlt={text.logoAlt}>
        <div className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={section.title} />
            <p className="font-body mx-auto mt-3 max-w-md text-center text-sm text-ink/60">{section.subtitle}</p>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {links.map((link) => {
                const Icon = socialIconPaths[link.id]
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex flex-col items-center gap-3 rounded-lg bg-white/50 p-6 text-center ring-1 ring-ink/10 transition hover:-translate-y-1 hover:bg-white/80 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-brown transition-colors group-hover:bg-olive group-hover:text-greige">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-body text-sm text-ink/80">{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </SplitWindowReveal>
    </section>
  )
}
