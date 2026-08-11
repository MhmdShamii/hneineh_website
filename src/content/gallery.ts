import type { GalleryLink, Localized } from './types'

export const gallerySection: Localized<{ title: string }> = {
  ar: { title: 'خلينا نوسع افقك' },
  en: { title: 'Let’s Broaden Your Horizon' },
}

export const galleryPageText: Localized<{ backToHome: string }> = {
  ar: { backToHome: 'الرئيسية' },
  en: { backToHome: 'Home' },
}

export const galleryLinkCta: Localized<{ viewMore: string }> = {
  ar: { viewMore: 'استعرض المزيد' },
  en: { viewMore: 'View More' },
}

export const galleryLinks: Localized<GalleryLink[]> = {
  ar: [
    {
      id: 'carpentry',
      title: 'نجارتنا',
      description: 'استعرض مجموعة من أعمال النجارة التي نفذناها بأيادٍ حرفية.',
      href: '/gallery/carpentry',
      imageAlt: 'صورة من أعمال النجارة',
      imageSrc: '/carpentry.png',
    },
    {
      id: 'design',
      title: 'تصميمنا',
      description: 'تجوّل في مشاريع التصميم الداخلي التي حوّلنا فيها الأفكار إلى واقع.',
      href: '/gallery/design',
      imageAlt: 'صورة من أعمال التصميم',
      imageSrc: '/interior.png',
    },
  ],
  en: [
    {
      id: 'carpentry',
      title: 'Our Carpentry',
      description: 'Browse a collection of carpentry work we’ve crafted by hand.',
      href: '/gallery/carpentry',
      imageAlt: 'Photo of carpentry work',
      imageSrc: '/carpentry.png',
    },
    {
      id: 'design',
      title: 'Our Design',
      description: 'Explore interior design projects where we turned ideas into reality.',
      href: '/gallery/design',
      imageAlt: 'Photo of design work',
      imageSrc: '/interior.png',
    },
  ],
}

export const galleryPlaceholderImages: Localized<{
  carpentry: { id: string; label: string }[]
  design: { id: string; label: string }[]
}> = {
  ar: {
    carpentry: Array.from({ length: 9 }, (_, i) => ({
      id: `carpentry-${i + 1}`,
      label: `صورة مشروع نجارة ${i + 1}`,
    })),
    design: Array.from({ length: 9 }, (_, i) => ({
      id: `design-${i + 1}`,
      label: `صورة مشروع تصميم ${i + 1}`,
    })),
  },
  en: {
    carpentry: Array.from({ length: 9 }, (_, i) => ({
      id: `carpentry-${i + 1}`,
      label: `Carpentry project photo ${i + 1}`,
    })),
    design: Array.from({ length: 9 }, (_, i) => ({
      id: `design-${i + 1}`,
      label: `Design project photo ${i + 1}`,
    })),
  },
}
