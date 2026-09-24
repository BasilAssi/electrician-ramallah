import { business, phones, hours } from '../data/contact';
import { faqIds } from '../data/faq';
import { areaIds } from '../data/areas';
import { SITE_URL, LANGS } from '../data/site';

export function buildBusinessSchema(lang, t) {
  const url = `${SITE_URL}${LANGS[lang].path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${SITE_URL}/#business`,
    name: business.name[lang],
    alternateName: business.name[lang === 'ar' ? 'en' : 'ar'],
    description: t('meta.description'),
    url,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: phones.map((p) => `+${p.number}`),
    ...(business.email && { email: business.email }),
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city[lang],
      addressCountry: 'PS',
    },
    areaServed: areaIds
      .filter((id) => id !== 'villages')
      .map((id) => ({ '@type': 'City', name: t(`areas.items.${id}`) })),
    openingHours: hours.schema,
    knowsAbout: ['Electrical wiring', 'Solar energy', 'On-grid solar', 'Off-grid solar', 'Electrical maintenance'],
    inLanguage: lang,
  };
}

export function buildFaqSchema(t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqIds.map((id) => ({
      '@type': 'Question',
      name: t(`faq.items.${id}.q`),
      acceptedAnswer: { '@type': 'Answer', text: t(`faq.items.${id}.a`) },
    })),
  };
}
