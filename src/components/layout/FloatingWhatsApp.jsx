import Icon from '../ui/Icon';
import useLang from '../../hooks/useLang';
import { phones } from '../../data/contact';
import useWhatsAppHref from '../../hooks/useWhatsAppHref';

// زر واتساب عائم للديسكتوب (الموبايل عنده MobileContactBar)
export default function FloatingWhatsApp() {
  const { t } = useLang();
  const waHref = useWhatsAppHref();
  const wa = phones.find((p) => p.whatsapp);
  if (!wa) return null;

  return (
    <a
      href={waHref(wa.number)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('actions.whatsapp')}
      className="fixed bottom-6 end-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg shadow-ink/20 transition-transform hover:scale-105 sm:grid"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
