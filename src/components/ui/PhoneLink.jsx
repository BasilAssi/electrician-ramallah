import Button from './Button';
import useLang from '../../hooks/useLang';
import { toTelHref, formatPhone } from '../../utils/phone';

export default function PhoneLink({ number, variant = 'primary', label, className }) {
  const { t } = useLang();
  return (
    <Button
      href={toTelHref(number)}
      icon="phone"
      variant={variant}
      className={className}
      aria-label={`${t('actions.callNumber')} ${formatPhone(number)}`}
    >
      {label ?? t('actions.call')}
    </Button>
  );
}
