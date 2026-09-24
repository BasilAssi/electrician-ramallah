import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import PhoneLink from '../components/ui/PhoneLink';
import WhatsAppLink from '../components/ui/WhatsAppLink';
import Icon from '../components/ui/Icon';
import useLang from '../hooks/useLang';
import { business, phones, hours } from '../data/contact';
import { formatPhone } from '../utils/phone';

export default function Contact() {
  const { t } = useLang();

  return (
    <Section id="contact" className="bg-paper-deep/60 border-t border-line">
      <SectionHeading id="contact" kicker={t('contact.kicker')} title={t('contact.title')} lead={t('contact.lead')} />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {phones.map((p) => (
          <article key={p.id} className="border border-line bg-paper p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-ink-soft">{t(p.labelKey)}</h3>
            <p className="mt-2 font-latin text-3xl font-bold tracking-tight" dir="ltr">
              {formatPhone(p.number)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PhoneLink number={p.number} variant="dark" />
              {p.whatsapp && <WhatsAppLink number={p.number} />}
            </div>
          </article>
        ))}
      </div>

      <dl className="mt-10 grid gap-6 text-ink-soft sm:grid-cols-2">
        <div className="flex gap-3">
          <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <dt className="font-semibold text-ink">{t('contact.hoursTitle')}</dt>
            <dd className="mt-1">{t(hours.labelKey)}</dd>
          </div>
        </div>
        <div className="flex gap-3">
          <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <dt className="font-semibold text-ink">{t('contact.areaTitle')}</dt>
            <dd className="mt-1">
              {t('contact.area')}
              {business.mapsUrl && (
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="ms-2 underline">
                  {t('contact.maps')}
                </a>
              )}
            </dd>
          </div>
        </div>
      </dl>
    </Section>
  );
}
