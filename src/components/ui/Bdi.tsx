import type { ReactNode } from 'react'

type BdiProps = {
  children: ReactNode
  className?: string
  as?: 'span' | 'div'
}

/**
 * Isolates LTR content (numbers, emails, phone numbers, hex codes) so it
 * renders correctly when embedded inside RTL-flowing Arabic text.
 */
export default function Bdi({ children, className, as: Tag = 'span' }: BdiProps) {
  return (
    <Tag dir="ltr" className={`inline-block [unicode-bidi:isolate] ${className ?? ''}`}>
      {children}
    </Tag>
  )
}
