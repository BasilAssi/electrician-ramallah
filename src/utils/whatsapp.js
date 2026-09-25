// الرابط بآخر الرسالة بخلّي واتساب يعرض معاينة الموقع (صورة الـ og) بالمحادثة
export function buildWaLink(number, message = '', pageUrl = '') {
  const text = [message, pageUrl].filter(Boolean).join('\n');
  return `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}
