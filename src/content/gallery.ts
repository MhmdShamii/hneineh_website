import type { GalleryLink, Localized } from './types'

export const gallerySection: Localized<{ title: string }> = {
  ar: { title: 'خلينا نوسع افقك' },
  en: { title: 'Portfolio' },
}

export const galleryPageText: Localized<{ backToHome: string }> = {
  ar: { backToHome: 'الرئيسية' },
  en: { backToHome: 'Home' },
}

export const galleryLinkCta: Localized<{ viewMore: string }> = {
  ar: { viewMore: 'شوف أكتر' },
  en: { viewMore: 'View More' },
}

export const galleryLinks: Localized<GalleryLink[]> = {
  ar: [
    {
      id: 'carpentry',
      title: 'نجارتنا',
      description: 'حرفة مميزة، بأيادِ عمرها اكثر من خمسين سنة .',
      pageDescription: 'حرفة مميزة، بأيادِ عمرها اكثر من خمسين سنة.',
      href: '/gallery/carpentry',
      imageAlt: 'صورة من أعمال النجارة',
      imageSrc: '/carpentry.png',
    },
    {
      id: 'design',
      title: 'مهندسينا',
      description: 'الاحلام والافكار ، بخبرة مهندسنا بتصير واقع.',
      pageDescription: 'الاحلام والافكار، بخبرة مهندسنا بتصير واقع.',
      href: '/gallery/design',
      imageAlt: 'صورة من أعمال التصميم',
      imageSrc: '/interior.png',
    },
  ],
  en: [
    {
      id: 'carpentry',
      title: 'Our Carpentry',
      description: 'Take a look at our carpentry — every piece handcrafted with real attention to detail.',
      pageDescription: 'Fine craftsmanship, shaped by hands with over fifty years of experience.',
      href: '/gallery/carpentry',
      imageAlt: 'Photo of carpentry work',
      imageSrc: '/carpentry.png',
    },
    {
      id: 'design',
      title: 'Our Design',
      description: 'Step into our interior design projects — where ideas become reality.',
      pageDescription: 'Your dreams and ideas, brought to life through our engineers’ expertise.',
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
