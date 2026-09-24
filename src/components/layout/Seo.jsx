import { Head } from 'vite-react-ssg';
import useLang from '../../hooks/useLang';
import { SITE_URL, LANGS } from '../../data/site';
import { buildBusinessSchema, buildFaqSchema } from '../../utils/schema';

export default function Seo() {
  const { t, lang, dir, otherLang } = useLang();
  const url = `${SITE_URL}${LANGS[lang].path}`;
  const title = t('meta.title');
  const description = t('meta.description');

  return (
    <Head htmlAttributes={{ lang, dir }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="ar" href={`${SITE_URL}${LANGS.ar.path}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${LANGS.en.path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${LANGS.ar.path}`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta property="og:locale" content={LANGS[lang].locale} />
      <meta property="og:locale:alternate" content={LANGS[otherLang].locale} />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">{JSON.stringify(buildBusinessSchema(lang, t))}</script>
      <script type="application/ld+json">{JSON.stringify(buildFaqSchema(t))}</script>
    </Head>
  );
}
