import { faqItems, faqSection } from '../content/faq'
import Accordion from './ui/Accordion'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function FaqSection() {
  return (
    <section id="faq" className="bg-greige px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={faqSection.title} />

        <Reveal className="mt-12" delayMs={100}>
          <Accordion
            defaultOpenId={faqItems[0]?.id}
            items={faqItems.map((item) => ({
              id: item.id,
              question: item.question,
              content: (
                <>
                  <p>{item.answer}</p>
                  {item.subList && (
                    <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                      {item.subList.map((service) => (
                        <li key={service.id} className="flex items-center gap-2 text-sm">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ),
            }))}
          />
        </Reveal>
      </div>
    </section>
  )
}
