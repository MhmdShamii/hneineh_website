import { footerContent } from '../content/footer'
import { site, socialLinks } from '../content/site'
import Bdi from './ui/Bdi'
import Reveal from './ui/Reveal'
import SocialIcons from './ui/SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink px-6 py-14 text-greige">
      <Reveal>
        <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
          <img src={site.logos.verticalBeige} alt={site.logoAlt} className="h-16 w-auto" />
          <p className="font-body -mt-2 text-xs text-greige/60">{site.tagline}</p>

          <SocialIcons links={socialLinks} variant="dark" />

          <div className="h-px w-12 bg-greige/15" />

          <div className="font-body flex flex-col items-center gap-1 text-xs text-greige/60">
            <Bdi>{site.email}</Bdi>
            <p>{footerContent.copyright(year)}</p>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
