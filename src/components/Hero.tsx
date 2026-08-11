import type { StatItem } from '../content/types'
import { hero, heroStats } from '../content/hero'
import { useCountUp } from '../hooks/useCountUp'
import { buildFrameUrls } from '../lib/frames'
import Bdi from './ui/Bdi'
import Reveal from './ui/Reveal'
import HeroFrameSequence from './HeroFrameSequence'

const frames = buildFrameUrls(hero.frames)

function StatValue({ stat }: { stat: StatItem }) {
  const display = useCountUp(stat.value, true)
  return <Bdi>{display}</Bdi>
}

export default function Hero() {
  return (
    <section id="top" aria-label="القسم الرئيسي">
      <HeroFrameSequence
        frames={frames}
        placeholderFrameCount={hero.frames.count}
        overlay={
          <div className="flex h-full flex-col items-center justify-center gap-10 px-6 text-center">
            <Reveal>
              <h1 className="font-display max-w-3xl text-3xl leading-snug text-greige drop-shadow-md sm:text-5xl">
                {hero.headline}
              </h1>
            </Reveal>

            <Reveal delayMs={150}>
              <dl className="grid w-full max-w-3xl grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5">
                {heroStats.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center gap-1">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-body text-2xl font-semibold text-greige drop-shadow sm:text-3xl">
                      <StatValue stat={stat} />
                    </dd>
                    <dd className="font-body text-xs text-greige/80 sm:text-sm">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delayMs={300}>
              <p className="font-body text-sm text-greige/70">{hero.scrollHint}</p>
            </Reveal>
          </div>
        }
      />
    </section>
  )
}
