import type { Localized, NavLink } from './types'

export const navLinks: Localized<NavLink[]> = {
  ar: [
    { id: 'process', label: 'رحلتك معنا', href: '#process' },
    { id: 'reviews', label: 'آراء عملائنا', href: '#reviews' },
    { id: 'gallery', label: 'معرض أعمالنا', href: '#gallery' },
    { id: 'faq', label: 'الأسئلة الشائعة', href: '#faq' },
    { id: 'contact', label: 'تواصل معنا', href: '#contact' },
  ],
  en: [
    { id: 'process', label: 'Your Journey', href: '#process' },
    { id: 'reviews', label: 'Client Reviews', href: '#reviews' },
    { id: 'gallery', label: 'Our Work', href: '#gallery' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Contact Us', href: '#contact' },
  ],
}

export const navContactCta: Localized<{ id: string; label: string; href: string }> = {
  ar: { id: 'nav-contact-cta', label: 'تواصل معنا', href: '#contact' },
  en: { id: 'nav-contact-cta', label: 'Contact Us', href: '#contact' },
}
