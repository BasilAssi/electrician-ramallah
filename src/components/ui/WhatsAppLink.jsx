import Button from './Button';
import useLang from '../../hooks/useLang';
import { buildWaLink } from '../../utils/whatsapp';
import { formatPhone } from '../../utils/phone';

export default function WhatsAppLink({ number, label, className }) {
  const { t } = useLang();
  return (
    <Button
      href={buildWaLink(number, t('meta.whatsappMessage'))}
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
