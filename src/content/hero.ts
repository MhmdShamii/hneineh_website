import type { Localized, StatItem } from './types'

/** Frame-sequence config is language-agnostic — same video either way. */
export const heroFrames = {
  basePath: '/frames/frame_',
  extension: 'webp',
  count: 121,
  padLength: 4,
}

export const heroText: Localized<{ headline: string; scrollHint: string }> = {
  ar: {
    headline: 'البيت يلي متخيّلو... صار وقته يصير حقيقة',
    scrollHint: 'استمر في التمرير لاستكشاف الرحلة',
  },
  en: {
    headline: 'The home you imagined... it’s time to make it real',
    scrollHint: 'Keep scrolling to explore the journey',
  },
}

export const heroStats: Localized<StatItem[]> = {
  ar: [
    { id: 'years', value: '46+', label: 'سنة من التميز' },
    { id: 'completed', value: '3K+', label: 'عمل منجز' },
    { id: 'happy-clients', value: '3K+', label: 'زبون راضي' },
    { id: 'projects', value: '320+', label: 'مشروع' },
    { id: 'founders', value: '3', label: 'مؤسسون' },
  ],
  en: [
    { id: 'years', value: '46+', label: 'Years of Excellence' },
    { id: 'completed', value: '3K+', label: 'Projects Completed' },
    { id: 'happy-clients', value: '3K+', label: 'Happy Clients' },
    { id: 'projects', value: '320+', label: 'Projects' },
    { id: 'founders', value: '3', label: 'Founders' },
  ],
}
