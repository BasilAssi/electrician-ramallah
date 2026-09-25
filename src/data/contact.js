// كل معلومات التواصل بمكان واحد — عدّل هون بس.
// الأرقام بالصيغة الدولية بدون + أو أصفار (970 أو 972 حسب الشبكة).

export const business = {
  name: { ar: 'م. علاء عاصي', en: 'Eng. Alaa Assi' },
  city: { ar: 'رام الله', en: 'Ramallah' },
  region: { ar: 'فلسطين', en: 'Palestine' },
  email: '', // اختياري
  mapsUrl: '', // رابط Google Maps (اختياري)
};

export const phones = [
  { id: 'main', labelKey: 'contact.labels.main', number: '972529557602', whatsapp: true },
];

export const hours = {
  // لأجل Schema.org
  schema: 'Sa-Th 08:00-20:00',
  labelKey: 'contact.hours',
};

// مخفية لحد ما نعرف الأرقام الصح — حط القيمة (مثلاً '10+') وبتظهر لحالها.
export const stats = [
  { id: 'years', value: null },
  { id: 'projects', value: null },
  { id: 'solar', value: null },
];
