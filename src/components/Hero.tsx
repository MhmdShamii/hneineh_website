import type { StatItem } from '../content/types'
import { heroFrames, heroStats, heroText } from '../content/hero'
import { useAppReady } from '../hooks/useAppReady'
import { useCountUp } from '../hooks/useCountUp'
import { usePick } from '../i18n/languageContext'
import { buildFrameUrls } from '../lib/frames'
import Bdi from './ui/Bdi'
import Reveal from './ui/Reveal'
import HeroFrameSequence from './HeroFrameSequence'

const frames = buildFrameUrls(heroFrames)

function StatValue({ stat, shouldStart }: { stat: StatItem; shouldStart: boolean }) {
  const display = useCountUp(stat.value, shouldStart)
  return <Bdi>{display}</Bdi>
}

export default function Hero() {
  const appReady = useAppReady()
  const text = usePick(heroText)
  const stats = usePick(heroStats)

  return (
    <section id="top" aria-label={text.headline}>
      <HeroFrameSequence
        frames={frames}
        placeholderFrameCount={heroFrames.count}
        overlay={
          <div className="flex h-full flex-col items-center justify-center gap-10 px-6 text-center">
            <Reveal>
              <h1 className="font-display max-w-3xl text-3xl leading-snug text-greige drop-shadow-md sm:text-5xl">
                {text.headline}
              </h1>
            </Reveal>

            <Reveal delayMs={150}>
              <dl className="grid w-full max-w-3xl grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center gap-1">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-body text-2xl font-semibold text-greige drop-shadow sm:text-3xl">
                      <StatValue stat={stat} shouldStart={appReady} />
                    </dd>
                    <dd className="font-body text-xs text-greige drop-shadow sm:text-sm">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delayMs={300}>
              <p className="font-body text-sm text-greige drop-shadow">{text.scrollHint}</p>
            </Reveal>
          </div>
        }
      />
    </section>
  )
}
