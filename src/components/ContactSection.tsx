import { useState, type ChangeEvent, type FormEvent } from 'react'
import { contactFields, contactSection, contactValidationMessages } from '../content/contact'
import { buildMailtoUrl } from '../lib/mailto'
import Bdi from './ui/Bdi'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

type FormState = Record<string, string>
type Status = 'idle' | 'opened'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[0-9+\s-]{7,}$/

function validate(field: (typeof contactFields)[number], value: string): string | null {
  if (field.required && !value.trim()) return contactValidationMessages.required
  if (field.type === 'email' && value && !emailPattern.test(value)) {
    return contactValidationMessages.invalidEmail
  }
  if (field.type === 'tel' && value && !phonePattern.test(value)) {
    return contactValidationMessages.invalidPhone
  }
  return null
}

export default function ContactSection() {
  const [values, setValues] = useState<FormState>({})
  const [errors, setErrors] = useState<FormState>({})
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: FormState = {}
    for (const field of contactFields) {
      const message = validate(field, values[field.name] ?? '')
      if (message) nextErrors[field.name] = message
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const mailtoUrl = buildMailtoUrl(contactSection.recipientEmail, contactSection.emailSubject, {
      name: values.name ?? '',
      phone: values.phone ?? '',
      email: values.email ?? '',
      message: values.message ?? '',
    })
    window.open(mailtoUrl, '_blank')
    setStatus('opened')
  }

  return (
    <section id="contact" className="bg-greige px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title={contactSection.title} />
        <Reveal delayMs={100}>
          <p className="font-body mt-2 text-center text-ink/70">{contactSection.subtitle}</p>
        </Reveal>

        <Reveal delayMs={100}>
          <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-5 sm:grid-cols-2">
            {contactFields.map((field) => {
              const error = errors[field.name]
              const spansFullWidth = field.type === 'email' || field.type === 'textarea'
              const commonProps = {
                id: field.id,
                name: field.name,
                placeholder: field.placeholder,
                value: values[field.name] ?? '',
                onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                  handleChange(field.name, e.target.value),
                'aria-invalid': Boolean(error),
                'aria-describedby': error ? `${field.id}-error` : undefined,
                dir: field.isLtr ? ('ltr' as const) : undefined,
                className: `w-full rounded-md bg-white/60 px-4 py-3 font-body text-ink ring-1 ring-ink/15 transition focus:outline-none focus:ring-2 focus:ring-olive ${
                  field.isLtr ? 'text-start' : ''
                }`,
              }

              return (
                <div key={field.id} className={spansFullWidth ? 'sm:col-span-2' : ''}>
                  <label htmlFor={field.id} className="font-body mb-1.5 block text-sm text-ink/80">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea rows={4} {...commonProps} />
                  ) : (
                    <input type={field.type} {...commonProps} />
                  )}
                  {error && (
                    <p id={`${field.id}-error`} className="font-body mt-1 text-xs text-red-700">
                      {error}
                    </p>
                  )}
                </div>
              )
            })}

            <button
              type="submit"
              className="mt-2 rounded-md bg-olive px-8 py-3 font-body text-greige transition hover:scale-[1.02] hover:opacity-90 sm:col-span-2 sm:justify-self-start"
            >
              {contactSection.submitLabel}
            </button>

            {status === 'opened' && (
              <p className="font-body text-sm text-olive sm:col-span-2" role="status">
                {contactSection.openedMessage}
              </p>
            )}

            <p className="font-body text-xs text-ink/50 sm:col-span-2">
              {contactSection.fallbackNotice} <Bdi>{contactSection.recipientEmail}</Bdi>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
