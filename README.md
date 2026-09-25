# علاء عاصي – كهربائي في رام الله

Vite + React + vite-react-ssg (prerender) + Tailwind CSS v4. عربي (RTL) على `/` وإنجليزي على `/en/`.

```bash
npm install
npm run dev      # تطوير
npm run build    # يطلع HTML جاهز لكل لغة في dist/
npm run lint
npm run qr       # كرت QR → marketing/qr/
npm run og       # صور المشاركة → public/og-image.jpg و og-image-en.jpg
```

## وين بعدّل؟
| الشي | الملف |
| --- | --- |
| الاسم، الأرقام، الواتساب، الأرقام الإحصائية | `src/data/contact.js` |
| الدومين (canonical / hreflang) | `src/data/site.js` + `public/sitemap.xml` + `public/robots.txt` |
| كل النصوص | `src/i18n/ar.js` و `src/i18n/en.js` |
| قائمة الخدمات / الشمسي / الأسئلة / المناطق | `src/data/*.js` (+ النص بملفات i18n) |
| الألوان والخط | `src/index.css` (`@theme`) |

## قبل النشر
- [ ] أرقام حقيقية في `contact.js` وقيم `stats` الحقيقية (أو `null` لإخفائها)
- [ ] الدومين الحقيقي بدل `electrician-ramallah-v1.vercel.app` (لو صار في دومين خاص)
- [x] `public/og-image.jpg` (1200×630) — صورة بتظهر لما ينبعت الرابط على واتساب/فيسبوك
- [x] صورة م. علاء في `src/sections/About.jsx`
- [ ] Google Business Profile + Google Search Console
