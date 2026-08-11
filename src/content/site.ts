import type { SocialLink } from './types'

/**
 * Site-wide brand data — shared between the nav and footer today, and the
 * single record a future admin panel would edit for global brand settings.
 */
export const site = {
  id: 'huneineh',
  name: 'Huneineh',
  nameArabic: 'حنينة',
  tagline: 'Design & Carpentry — Since 1980',
  email: 'info@hneineh.com',
  logoAlt: 'شعار حنينة للنجارة والتصميم',
  logos: {
    /** Wordmark + icon lockup — nav bar on tablet/desktop */
    horizontal: '/logos/hneineh-horizontal-logo.svg',
    /** Compact icon mark — nav bar on mobile, and the primary brand mark */
    primaryIcon: '/logos/hneineh-primary-icon.svg',
    /** Secondary icon mark — used as the loading/spinner glyph */
    secondaryIcon: '/logos/hneineh-secondary-icon.svg',
  },
}

export const socialLinks: SocialLink[] = [
  { id: 'facebook', label: 'فيسبوك', url: 'https://facebook.com/' },
  { id: 'pinterest', label: 'بينتيريست', url: 'https://pinterest.com/' },
  { id: 'instagram', label: 'انستغرام', url: 'https://instagram.com/' },
]
