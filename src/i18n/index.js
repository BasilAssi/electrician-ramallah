import ar from './ar';
import en from './en';

export const dictionaries = { ar, en };

export function translate(lang, key) {
  const value = key.split('.').reduce((node, part) => node?.[part], dictionaries[lang]);
  if (value === undefined && import.meta.env.DEV) {
    console.warn(`[i18n] missing "${key}" for "${lang}"`);
  }
  return value ?? key;
}
