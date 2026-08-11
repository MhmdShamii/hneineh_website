import { socialLinks } from '../content/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { socialIconPaths } from './ui/socialIconPaths'

const socialSectionContent = {
  title: 'تابعونا',
  subtitle: 'كواليس الورشة، مشاريعنا الجديدة، وكل التفاصيل — أول بأول على صفحاتنا.',
}

export default function SocialSection() {
  return (
    <section className="bg-greige px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={socialSectionContent.title} />
        <Reveal delayMs={80}>
          <p className="font-body mx-auto mt-3 max-w-md text-center text-sm text-ink/60">
            {socialSectionContent.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {socialLinks.map((link, index) => {
            const Icon = socialIconPaths[link.id]
            return (
              <Reveal key={link.id} delayMs={index * 80}>
                <a
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
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
