type MailtoFields = {
  name: string
  phone: string
  email: string
  message: string
}

/** Builds a mailto: URL with the form values laid out in a readable body. */
export function buildMailtoUrl(recipient: string, subject: string, fields: MailtoFields): string {
  const body = [
    `الاسم: ${fields.name}`,
    `الهاتف: ${fields.phone}`,
    `البريد الإلكتروني: ${fields.email}`,
    '',
    fields.message,
  ].join('\n')

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
