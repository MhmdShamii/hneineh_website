import type { ReactElement } from 'react'
import type { SocialLink, SocialPlatform } from '../../content/types'

const iconPaths: Record<SocialPlatform, ReactNodeFactory> = {
  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93v-1.9c0-.86.24-1.44 1.47-1.44h1.57V4.44A21 21 0 0 0 14.4 4.3c-2.2 0-3.7 1.34-3.7 3.8v2.24H8.14v2.96h2.56V21z" />
    </svg>
  ),
  pinterest: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3a9 9 0 0 0-3.28 17.38c-.05-.75-.09-1.9.02-2.72.1-.74.66-4.7.66-4.7s-.17-.34-.17-.83c0-.78.45-1.36 1.02-1.36.48 0 .71.36.71.79 0 .48-.31 1.2-.46 1.87-.13.56.28 1.02.83 1.02 1 0 1.77-1.05 1.77-2.58 0-1.35-.97-2.29-2.36-2.29-1.6 0-2.55 1.2-2.55 2.45 0 .48.19.99.42 1.27a.17.17 0 0 1 .04.16l-.16.66c-.03.11-.09.14-.2.08-.77-.36-1.25-1.48-1.25-2.38 0-1.94 1.41-3.72 4.06-3.72 2.13 0 3.79 1.52 3.79 3.55 0 2.12-1.34 3.82-3.19 3.82-.62 0-1.21-.33-1.41-.71l-.38 1.47c-.14.53-.51 1.19-.76 1.6A9 9 0 1 0 12 3" />
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
}

type ReactNodeFactory = (props: { className?: string }) => ReactElement

type SocialIconsProps = {
  links: SocialLink[]
  className?: string
  iconClassName?: string
}

export default function SocialIcons({ links, className, iconClassName }: SocialIconsProps) {
  return (
    <ul className={`flex items-center gap-3 ${className ?? ''}`}>
      {links.map((link) => {
        const Icon = iconPaths[link.id]
        return (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:scale-105 hover:bg-olive hover:text-greige"
            >
              <Icon className={iconClassName ?? 'h-4 w-4'} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
