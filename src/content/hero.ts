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
    scrollHint: 'اسحب لتحت واكتشف شو مخبّاية الرحلة',
  },
  en: {
    headline: 'The home you’ve always imagined — it’s time to make it real',
    scrollHint: 'Keep scrolling to explore the journey we’ll take together',
  },
}

export const heroStats: Localized<StatItem[]> = {
  ar: [
    { id: 'years', value: '٤٦+', label: 'سنة من التميز' },
    { id: 'completed', value: '٣٠٠٠+', label: 'عمل منجز' },
    { id: 'happy-clients', value: '٢٦٠٠+', label: 'زبون راضي' },
    { id: 'projects', value: '٣٨٠+', label: 'مشروع' },
    { id: 'founders', value: '٣', label: 'مؤسسون' },
  ],
  en: [
    { id: 'years', value: '46+', label: 'Years of Excellence' },
    { id: 'completed', value: '3K+', label: 'Projects Completed' },
    { id: 'happy-clients', value: '2.6K+', label: 'Happy Clients' },
    { id: 'projects', value: '380+', label: 'Projects' },
    { id: 'founders', value: '3', label: 'Founders' },
  ],
}
