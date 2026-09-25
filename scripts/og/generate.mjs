// يولّد صورة المشاركة (Open Graph) لكل لغة: public/og-image.jpg و public/og-image-en.jpg
// التشغيل: npm run og
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { business, phones } from '../../src/data/contact.js';
import { formatPhone } from '../../src/utils/phone.js';
import { renderHtml } from '../lib/render.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const OUT = resolve(ROOT, 'marketing/og');
const PHOTO = '../../public/images/alaa-assi-electrician-ramallah-800.webp';

const C = { ink: '#14202e', paper: '#f5f2ea', volt: '#f5b700' };

const copy = {
  ar: {
    dir: 'rtl',
    kicker: 'كهربائي · رام الله والبيرة',
    title: 'م.',
    role: 'مهندس وفني كهرباء',
    services: ['تمديدات', 'صيانة أعطال', 'لوحات توزيع', 'طاقة شمسية'],
    font: "'IBM Plex Sans Arabic'",
    file: 'og-image.jpg',
  },
  en: {
    dir: 'ltr',
    kicker: 'Electrician · Ramallah & Al-Bireh',
    title: 'Eng.',
    role: 'Electrical engineer & electrician',
    services: ['Wiring', 'Repairs', 'Panels', 'Solar'],
    font: "'IBM Plex Sans'",
    file: 'og-image-en.jpg',
  },
};

const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>`;
const waIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2Z"/></svg>`;

function buildHtml(lang) {
  const c = copy[lang];
  const name = business.name[lang].replace(/^(م\.|Eng\.)\s*/, '');
  const phone = phones[0];
  // الصورة على جهة نهاية السطر، والتدرّج باتجاه النص
  const fadeTo = c.dir === 'rtl' ? 'right' : 'left';

  return `<!doctype html>
<html lang="${lang}" dir="${c.dir}">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&family=IBM+Plex+Sans:wght@400;600;700&family=IBM+Plex+Mono:wght@500;600&display=block" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body { background: ${C.ink}; color: ${C.paper}; font-family: ${c.font}, sans-serif; position: relative; }
  .photo { position: absolute; top: 0; bottom: 0; inset-inline-end: 0; width: 470px; }
  .photo img { width: 100%; height: 100%; object-fit: cover; object-position: 30% 20%; display: block; }
  .photo::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to ${fadeTo}, transparent 40%, ${C.ink} 98%); }

  .text { position: absolute; top: 70px; bottom: 70px; inset-inline-start: 72px; width: 640px; display: flex; flex-direction: column; }
  .kicker { display: flex; align-items: center; gap: 12px; font-size: 22px; font-weight: 600; color: rgba(245,242,234,.7); }
  .kicker i { width: 14px; height: 14px; background: ${C.volt}; display: block; }
  h1 { margin-top: 22px; font-size: 80px; font-weight: 700; line-height: 1.15; }
  h1 span { color: ${C.volt}; }
  .role { margin-top: 10px; font-size: 30px; color: rgba(245,242,234,.8); }
  .services { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 10px; }
  .services span { border: 1px solid rgba(245,242,234,.25); padding: 8px 16px; font-size: 20px; color: rgba(245,242,234,.85); }
  .phone { margin-top: auto; display: flex; align-items: center; gap: 16px; }
  .phone .icons { display: flex; gap: 8px; color: ${C.volt}; }
  .phone svg { width: 32px; height: 32px; }
  .phone .num { font-family: 'IBM Plex Mono', monospace; font-size: 40px; font-weight: 600; direction: ltr; }
  .tape { position: absolute; bottom: 0; left: 0; right: 0; height: 14px;
    background: repeating-linear-gradient(-45deg, ${C.volt} 0 16px, ${C.ink} 16px 32px); }
</style>
</head>
<body>
  <div class="photo"><img src="${PHOTO}" alt=""></div>
  <div class="text">
    <p class="kicker"><i></i>${c.kicker}</p>
    <h1><span>${c.title}</span> ${name}</h1>
    <p class="role">${c.role}</p>
    <div class="services">${c.services.map((s) => `<span>${s}</span>`).join('')}</div>
    <div class="phone">
      <span class="icons">${phoneIcon}${phone.whatsapp ? waIcon : ''}</span>
      <span class="num">${formatPhone(phone.number)}</span>
    </div>
  </div>
  <div class="tape"></div>
</body>
</html>`;
}

mkdirSync(OUT, { recursive: true });

for (const lang of Object.keys(copy)) {
  const htmlPath = resolve(OUT, `og-${lang}.html`);
  writeFileSync(htmlPath, buildHtml(lang));
  renderHtml(htmlPath, resolve(ROOT, 'public', copy[lang].file), { width: 1200, height: 630 });
  console.log(`OG (${lang}) → public/${copy[lang].file}`);
}
