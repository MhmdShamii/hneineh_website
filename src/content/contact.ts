import type { ContactFormField } from './types'

export const contactSection = {
  id: 'contact',
  title: 'شاركنا فرحتك',
  subtitle: 'عبّي النموذج وفريقنا بيتواصل معك بأسرع وقت.',
  recipientEmail: 'info@hneineh.com',
  emailSubject: 'طلب تواصل جديد من موقع حنينة',
  /**
   * Web3Forms delivers the submission straight to `recipientEmail` with no
   * backend of our own — https://web3forms.com. The submit endpoint is
   * fixed/public for every Web3Forms user (not environment-specific), so it
   * lives here as a constant; only the Access Key varies per account and
   * lives in .env (see .env.example). The key is public-by-design (meant to
   * ship in client code) — it's kept in .env for easy swapping, not secrecy.
   */
  web3formsEndpoint: 'https://api.web3forms.com/submit',
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  submitLabel: 'إرسال',
  submittingLabel: 'جاري الإرسال...',
  successMessage: 'تم إرسال رسالتك بنجاح، رح نتواصل معك قريبًا.',
  errorMessage: 'صار في خطأ أثناء الإرسال، جرّب مرة تانية أو تواصل معنا مباشرة على',
}

export const contactFields: ContactFormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'الاسم الكريم',
    placeholder: 'الاسم الكريم',
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
