import Button from './Button';
import useLang from '../../hooks/useLang';
import useWhatsAppHref from '../../hooks/useWhatsAppHref';
import { formatPhone } from '../../utils/phone';

export default function WhatsAppLink({ number, label, className }) {
  const { t } = useLang();
  const waHref = useWhatsAppHref();
  return (
    <Button
      href={waHref(number)}
      icon="whatsapp"
      variant="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`${t('actions.whatsappNumber')} ${formatPhone(number)}`}
    >
      {label ?? t('actions.whatsapp')}
    </Button>
  );
}
