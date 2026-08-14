import type { Localized } from './types'

export const ctaSection: Localized<{ heading: string; buttonLabel: string; buttonHref: string }> = {
  ar: {
    heading: 'خلي تجربتك مميزة وخلينا نحقق حلمك.',
    buttonLabel: 'احجز استشارتك المجانية',
    buttonHref: '#contact',
  },
  en: {
    heading: 'Ready to Turn Your Vision Into a Real Home?',
    buttonLabel: 'Book Your Free Consultation',
    buttonHref: '#contact',
  },
}
