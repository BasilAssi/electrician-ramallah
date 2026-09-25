import useLang from './useLang';
import { buildWaLink } from '../utils/whatsapp';
import { SITE_URL, LANGS } from '../data/site';

// رابط واتساب برسالة جاهزة بلغة الصفحة + رابط الموقع (للمعاينة)
export default function useWhatsAppHref() {
  const { t, lang } = useLang();
  return (number) => buildWaLink(number, t('meta.whatsappMessage'), `${SITE_URL}${LANGS[lang].path}`);
}
