import type { Localized, ProcessStep } from './types'

export const processSection: Localized<{ title: string }> = {
  ar: { title: 'رحلتك معنا' },
  en: { title: 'Process' },
}

export const processSteps: Localized<ProcessStep[]> = {
  ar: [
    {
      id: 'plan-together',
      numeral: '١',
      title: 'منخطط سوا',
      body: 'منزورك ومنقيس كل تفصيل. لنضمن إنو كل قطعة تركب بمكانها... كأنها خُلقت إلو. ',
      imageAlt: 'صورة من جلسة التخطيط',
    },
    {
      id: 'share-vision',
      numeral: '٢',
      title: 'بتخبرنا شو متخيل',
      body: 'منفوت على راسك. منسمعك، ومنفهم شو عم تتخيل، حتى قبل ما تقدر توصفه. منضيف خبرتنا لنخلق أفكار... ما بتشبه غيرك.',
      imageAlt: 'صورة من مرحلة تصور الفكرة',
    },
    {
      id: 'choose-materials',
      numeral: '٣',
      title: 'منختار المواد معك',
      body: 'منختار الجودة... قبل أي شي. منساعدك تختار المواد والألوان يلي بتناسب ذوقك وأسلوب حياتك. مننتقي أجود الخامات لنضمن إنو كل قطعة بتبقى بنفس جمالها لسنين.',
      imageAlt: 'صورة من اختيار المواد',
    },
    {
      id: 'vision-in-detail',
      numeral: '٤',
      title: 'كل تفصيل إلو سبب',
      body: 'مهندسينا المختصّين بيدرسوا كل تفصيل بدقّة، لأن الجمال وحده ما بيكفي... كل عنصر لازم يكون عملي، مريح، ومصمّم ليخدم حياتك اليومية.',
      imageAlt: 'صورة من مرحلة تصميم التفاصيل',
    },
    {
      id: 'craft-begins',
      numeral: '٥',
      title: 'هون بتبلّش الحرفة',
      body: 'من أول خطوة لآخر تفصيل، منلتزم بالدقة، الإتقان والعناية، لنقدم قطعة تعكس ثقتكم فينا.',
      imageAlt: 'صورة من التنفيذ داخل الورشة',
    },
    {
      id: 'deliver-more',
      numeral: '٦',
      title: 'منسلّمك أكتر من ما توقعت',
      body: 'منركب كل قطعة بمكانها. وبأول نظرة... بتحس إنو هيدا المكان خلق إلك.',
      imageAlt: 'صورة من تسليم المشروع النهائي',
    },
  ],
  en: [
    {
      id: 'plan-together',
      numeral: '1',
      title: 'We Plan Together',
      body: 'Your journey with us starts with a visit, where we measure every last detail — so every piece fits its place as if it were made for it.',
      imageAlt: 'Photo from a planning session',
    },
    {
      id: 'share-vision',
      numeral: '2',
      title: 'You Share Your Vision',
      body: 'Tell us what you picture in your mind. We listen, and understand what you’re imagining, even before you can fully put it into words — then add our own expertise to shape ideas that are truly yours.',
      imageAlt: 'Photo from the vision stage',
    },
    {
      id: 'choose-materials',
      numeral: '3',
      title: 'We Choose the Materials With You',
      body: 'Quality comes first. We help you choose the materials and colors that match your taste and lifestyle, selecting only the finest to make sure every piece keeps its beauty for years.',
      imageAlt: 'Photo from selecting materials',
    },
    {
      id: 'vision-in-detail',
      numeral: '4',
      title: 'Every Detail Has a Purpose',
      body: 'Before manufacturing begins, every project is studied through an interior architect’s eye. Beauty alone isn’t enough — every detail has to be practical, comfortable, and designed to serve your daily life.',
      imageAlt: 'Photo from the detailed design stage',
    },
    {
      id: 'craft-begins',
      numeral: '5',
      title: 'This Is Where the Craft Begins',
      body: 'From the very first step to the final detail, we commit to precision, mastery, and care — to deliver a piece that reflects your trust in us.',
      imageAlt: 'Photo from the workshop floor',
    },
    {
      id: 'deliver-more',
      numeral: '6',
      title: 'We Deliver More Than You Expected',
      body: 'We install every piece exactly in place. From the first glance, you’ll feel like this space was made for you — that’s what makes your experience unforgettable, and your dream real.',
      imageAlt: 'Photo from the final project handover',
    },
  ],
}
