import { footerContent } from '../content/footer'
import { site, socialLinks } from '../content/site'
import Bdi from './ui/Bdi'
import Reveal from './ui/Reveal'
import SocialIcons from './ui/SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink px-6 py-10 text-greige">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-start">
          <div>
            <img src={site.logos.verticalBeige} alt={site.logoAlt} className="mx-auto h-14 w-auto sm:mx-0" />
            <p className="font-body mt-2 text-xs text-greige/60">{site.tagline}</p>
          </div>

          <SocialIcons links={socialLinks} />

          <div className="font-body text-xs text-greige/60">
            <p>
              <Bdi>{site.email}</Bdi>
            </p>
            <p className="mt-1">{footerContent.copyright(year)}</p>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
