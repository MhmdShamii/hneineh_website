import type { Localized } from './types'

export const ctaSection: Localized<{ heading: string; buttonLabel: string; buttonHref: string }> = {
  ar: {
    heading: 'جاهزين نحوّل تخيّلك إلى بيت حقيقي',
    buttonLabel: 'احجز استشارتك المجانية',
    buttonHref: '#contact',
  },
  en: {
    heading: 'Ready to turn your imagination into a real home',
    buttonLabel: 'Book Your Free Consultation',
    buttonHref: '#contact',
  },
}
