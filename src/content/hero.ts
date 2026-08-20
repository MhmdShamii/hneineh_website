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
    headline: 'البيت يلي متخيّلو... صار وقتو يصير حقيقة',
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
    { id: 'completed', value: '٢٦٠٠+', label: 'عمل منجز' },
    { id: 'happy-clients', value: '٢٦٠٠+', label: 'زبون راضي' },
    { id: 'projects', value: '٢٨٠+', label: 'مشروع' },
    { id: 'founders', value: '٣', label: 'مؤسسون' },
  ],
  en: [
    { id: 'Excellence', value: '46+', label: 'Excellence' },
    { id: 'Completed', value: '2.6K+', label: 'Completed' },
    { id: 'Satisfied', value: '2.6K+', label: 'Satisfied' },
    { id: 'Project', value: '280+', label: 'Projects' },
    { id: 'Founders', value: '3', label: 'Founders' },
  ],
}
