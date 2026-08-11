import type { ContactFormField } from './types'

export const contactSection = {
  id: 'contact',
  title: 'شاركنا فرحتك',
  subtitle: 'عبّي النموذج وفريقنا بيتواصل معك بأسرع وقت.',
  /** No backend yet — the form opens a pre-filled draft in the user's own mail app. */
  recipientEmail: 'info@hneineh.com',
  emailSubject: 'طلب تواصل جديد من موقع حنينة',
  submitLabel: 'إرسال عبر البريد الإلكتروني',
  openedMessage: 'رح ينفتحلك تطبيق البريد وفيه رسالتك جاهزة، بس أكّد الإرسال من هناك.',
  fallbackNotice: 'إذا ما انفتح تطبيق البريد تلقائيًا، تواصل معنا مباشرة على',
}

export const contactFields: ContactFormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'الاسم الكامل',
    placeholder: 'اسمك الكامل',
    type: 'text',
    required: true,
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'رقم الهاتف',
    placeholder: '٧٠ ١٢٣ ٤٥٦',
    type: 'tel',
    required: true,
    isLtr: true,
  },
  {
    id: 'email',
    name: 'email',
    label: 'البريد الإلكتروني',
    placeholder: 'name@example.com',
    type: 'email',
    required: true,
    isLtr: true,
  },
  {
    id: 'message',
    name: 'message',
    label: 'رسالتك',
    placeholder: 'شاركنا تفاصيل مشروعك أو أي ملاحظات...',
    type: 'textarea',
    required: true,
  },
]

export const contactValidationMessages = {
  required: 'هالحقل مطلوب',
  invalidEmail: 'الرجاء إدخال بريد إلكتروني صحيح',
  invalidPhone: 'الرجاء إدخال رقم هاتف صحيح',
}
