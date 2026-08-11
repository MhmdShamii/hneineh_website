import type { GalleryLink } from './types'

export const gallerySection = {
  id: 'gallery',
  title: 'خلينا نوسع افقك',
}

export const galleryLinks: GalleryLink[] = [
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
]

export const galleryPlaceholderImages = {
  carpentry: Array.from({ length: 9 }, (_, i) => ({
    id: `carpentry-${i + 1}`,
    label: `صورة مشروع نجارة ${i + 1}`,
  })),
  design: Array.from({ length: 9 }, (_, i) => ({
    id: `design-${i + 1}`,
    label: `صورة مشروع تصميم ${i + 1}`,
  })),
}
