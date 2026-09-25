import Icon from '../ui/Icon';
import useLang from '../../hooks/useLang';
import { phones } from '../../data/contact';
import { toTelHref } from '../../utils/phone';
import useWhatsAppHref from '../../hooks/useWhatsAppHref';

// شريط ثابت أسفل الشاشة على الموبايل: اتصال | واتساب
export default function MobileContactBar() {
  const { t } = useLang();
  const waHref = useWhatsAppHref();
  const main = phones[0];
  const wa = phones.find((p) => p.whatsapp) ?? main;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 pb-[env(safe-area-inset-bottom)] sm:hidden">
      <a
        href={toTelHref(main.number)}
        className="flex items-center justify-center gap-2 bg-volt py-4 font-semibold text-ink"
      >
        <Icon name="phone" />
        {t('actions.call')}
      </a>
      <a
        href={waHref(wa.number)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-wa py-4 font-semibold text-white"
      >
        <Icon name="whatsapp" />
        {t('actions.whatsapp')}
      </a>
    </div>
  );
}
