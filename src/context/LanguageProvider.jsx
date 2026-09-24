import { useMemo } from 'react';
import { LanguageContext } from './LanguageContext';
import { translate } from '../i18n';
import { LANGS } from '../data/site';

export default function LanguageProvider({ lang, children }) {
  const value = useMemo(() => {
    const other = lang === 'ar' ? 'en' : 'ar';
    return {
      lang,
      dir: LANGS[lang].dir,
      otherLang: other,
      otherPath: LANGS[other].path,
      t: (key) => translate(lang, key),
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
