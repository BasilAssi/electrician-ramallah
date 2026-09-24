# علاء عاصي – كهربائي في رام الله

Vite + React + vite-react-ssg (prerender) + Tailwind CSS v4. عربي (RTL) على `/` وإنجليزي على `/en/`.

```bash
npm install
npm run dev      # تطوير
npm run build    # يطلع HTML جاهز لكل لغة في dist/
npm run lint
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
- [ ] الدومين الحقيقي بدل `alaa-assi.vercel.app` (لو صار في دومين خاص)
- [ ] `public/og-image.jpg` (1200×630) — صورة بتظهر لما ينبعت الرابط على واتساب/فيسبوك
- [ ] صورة لعلاء بدل الـ placeholder في `src/sections/About.jsx`
- [ ] Google Business Profile + Google Search Console
