import { useState, type ChangeEvent, type FormEvent } from 'react'
import { contactFields, contactSection, contactValidationMessages } from '../content/contact'
import Bdi from './ui/Bdi'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

type FormState = Record<string, string>
type Status = 'idle' | 'submitting' | 'success' | 'error'

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    if ((form.elements.namedItem('botcheck') as HTMLInputElement | null)?.checked) return

    const nextErrors: FormState = {}
    for (const field of contactFields) {
      const message = validate(field, values[field.name] ?? '')
      if (message) nextErrors[field.name] = message
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      const response = await fetch(contactSection.web3formsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: contactSection.web3formsAccessKey,
          subject: contactSection.emailSubject,
          from_name: values.name ?? '',
          ...values,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setValues({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

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
              disabled={status === 'submitting'}
              className="mt-2 rounded-md bg-olive px-8 py-3 font-body text-greige transition hover:scale-[1.02] hover:opacity-90 disabled:opacity-60 disabled:hover:scale-100 sm:col-span-2 sm:justify-self-start"
            >
              {status === 'submitting' ? contactSection.submittingLabel : contactSection.submitLabel}
            </button>

            {status === 'success' && (
              <p className="font-body text-sm text-olive sm:col-span-2" role="status">
                {contactSection.successMessage}
              </p>
            )}
            {status === 'error' && (
              <p className="font-body text-sm text-red-700 sm:col-span-2" role="alert">
                {contactSection.errorMessage} <Bdi>{contactSection.recipientEmail}</Bdi>
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
