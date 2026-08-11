import type { StatItem } from './types'

export const hero = {
  id: 'hero',
  headline: 'البيت يلي متخيّلو... صار وقته يصير حقيقة',
  scrollHint: 'استمر في التمرير لاستكشاف الرحلة',
  frames: {
    basePath: '/frames/frame_',
    extension: 'webp',
    count: 121,
    padLength: 4,
  },
}

export const heroStats: StatItem[] = [
  { id: 'years', value: '46+', label: 'سنة من التميز' },
  { id: 'completed', value: '3K+', label: 'عمل منجز' },
  { id: 'happy-clients', value: '3K+', label: 'زبون راضي' },
  { id: 'projects', value: '320+', label: 'مشروع' },
  { id: 'founders', value: '3', label: 'مؤسسون' },
]
