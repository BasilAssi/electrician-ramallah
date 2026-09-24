// كل معلومات التواصل بمكان واحد — عدّل هون بس.
// الأرقام بالصيغة الدولية بدون + أو أصفار (970 أو 972 حسب الشبكة).

export const business = {
  name: { ar: 'علاء عاصي', en: 'Alaa Assi' },
  city: { ar: 'رام الله', en: 'Ramallah' },
  region: { ar: 'فلسطين', en: 'Palestine' },
  email: '', // اختياري
  mapsUrl: '', // رابط Google Maps (اختياري)
};

export const phones = [
  { id: 'main', labelKey: 'contact.labels.main', number: '972566169101', whatsapp: true },
  { id: 'solar', labelKey: 'contact.labels.solar', number: '970569945333', whatsapp: true },
];

export const hours = {
  // لأجل Schema.org
  schema: 'Sa-Th 08:00-20:00',
  labelKey: 'contact.hours',
};

// TODO: عدّل الأرقام الحقيقية قبل النشر، أو اتركها null لإخفائها.
export const stats = [
  { id: 'years', value: '10+' },
  { id: 'projects', value: '400+' },
  { id: 'solar', value: '60+' },
];
