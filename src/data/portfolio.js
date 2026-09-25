// صور الأعمال: public/images/work/<file>-480.webp و <file>-960.webp
// لإضافة صورة: جهّز الحجمين بنفس الاسم وزيد سطر هون.

export const workCategories = ['home', 'shop', 'panel', 'infra'];

// الترتيب هون هو ترتيب العرض بـ "الكل" — أقوى الصور أول.
export const workItems = [
  { file: 'panel-main-distribution', cat: 'panel', ar: 'لوحات رئيسية لمبنى تجاري', en: 'Main distribution panels, commercial building' },
  { file: 'home-open-plan-lighting', cat: 'home', ar: 'شقة سكنية: إنارة مخفية وسبوتات', en: 'Apartment: hidden LED and spotlights' },
  { file: 'shop-geometric-led', cat: 'shop', ar: 'محل ملابس: إنارة LED هندسية', en: 'Clothing store: geometric LED lighting' },
  { file: 'infra-meter-cabinet-install', cat: 'infra', ar: 'تركيب خزانة عدادات', en: 'Installing a meter cabinet' },
  { file: 'home-distribution-board', cat: 'home', ar: 'لوحة توزيع شقة مرتبة بالكامل', en: 'Neatly wired apartment distribution board' },
  { file: 'home-kitchen-led-lines', cat: 'home', ar: 'مطبخ مفتوح: خطوط LED وسبوتات', en: 'Open kitchen: LED lines and spots' },
  { file: 'panel-industrial-board', cat: 'panel', ar: 'لوحة توزيع صناعية', en: 'Industrial distribution board' },
  { file: 'shop-suspended-square-led', cat: 'shop', ar: 'محل: مربعات إنارة معلّقة', en: 'Store: suspended square LED' },
  { file: 'infra-underground-cable-prep', cat: 'infra', ar: 'تجهيز نهايات كوابل أرضية', en: 'Preparing underground cable ends' },
  { file: 'home-living-room-gypsum-lighting', cat: 'home', ar: 'صالون: إنارة جبس مخفية', en: 'Living room: recessed gypsum lighting' },
  { file: 'panel-control-indicators', cat: 'panel', ar: 'لوحة تحكم: مؤشرات وأزرار تشغيل', en: 'Control panel: indicators and switches' },
  { file: 'shop-linear-lights', cat: 'shop', ar: 'محل: خطوط إنارة متوازية', en: 'Store: parallel linear lighting' },
  { file: 'infra-outdoor-meter-cabinets', cat: 'infra', ar: 'خزائن عدادات خارجية', en: 'Outdoor meter cabinets' },
  { file: 'home-flush-panel-finished', cat: 'home', ar: 'لوحة مدفونة بالحيط بعد التشطيب', en: 'Flush-mounted panel after finishing' },
  { file: 'panel-busbar-distribution', cat: 'panel', ar: 'لوحة رئيسية: توزيع على بسبارات', en: 'Main panel: busbar distribution' },
  { file: 'shop-retail-floor-lighting', cat: 'shop', ar: 'صالة عرض: إنارة كاملة', en: 'Retail floor: complete lighting' },
  { file: 'infra-solar-array', cat: 'infra', ar: 'منظومة ألواح طاقة شمسية', en: 'Solar panel array' },
  { file: 'home-hallway-linear-led', cat: 'home', ar: 'ممر: خط إنارة LED', en: 'Hallway: linear LED' },
  { file: 'panel-motor-control', cat: 'panel', ar: 'لوحة تحكم محركات', en: 'Motor control panel' },
  { file: 'shop-shoe-store-lighting', cat: 'shop', ar: 'محل أحذية: إنارة وتمديدات', en: 'Shoe store: lighting and wiring' },
  { file: 'infra-underground-cable-joint', cat: 'infra', ar: 'وصلة كابل أرضي', en: 'Underground cable joint' },
  { file: 'home-panel-rcd-protection', cat: 'home', ar: 'لوحة شقة مع حماية تسريب', en: 'Apartment panel with RCD protection' },
  { file: 'panel-main-terminations', cat: 'panel', ar: 'توصيلات لوحة رئيسية', en: 'Main panel terminations' },
  { file: 'shop-mall-escalator-lighting', cat: 'shop', ar: 'مول: إنارة منطقة الدرج الكهربائي', en: 'Mall: escalator area lighting' },
  { file: 'infra-pump-room', cat: 'infra', ar: 'غرفة مضخات: تمديد وتشغيل', en: 'Pump room: wiring and controls' },
  { file: 'home-bedroom-ceiling-spots', cat: 'home', ar: 'غرفة نوم: سبوتات وإنارة سقف', en: 'Bedroom: ceiling spotlights' },
  { file: 'panel-cable-tray', cat: 'panel', ar: 'لوحة مع مجرى كوابل', en: 'Panel with cable tray' },
  { file: 'shop-checkout-area', cat: 'shop', ar: 'منطقة الكاشير: إنارة وتمديدات', en: 'Checkout area: lighting and power' },
  { file: 'infra-meter-cabinet-onsite', cat: 'infra', ar: 'شغل ميداني على خزانة عدادات', en: 'On site at a meter cabinet' },
  { file: 'home-sub-panel', cat: 'home', ar: 'لوحة فرعية بتمديد نظيف', en: 'Cleanly wired sub-panel' },
  { file: 'panel-installation-feed', cat: 'panel', ar: 'تركيب لوحة وتغذيتها', en: 'Panel installation and feed' },
  { file: 'infra-trench-cable-feed', cat: 'infra', ar: 'تغذية بكوابل أرضية', en: 'Trench cable feed' },
  { file: 'home-finishing-wiring', cat: 'home', ar: 'تمديدات بمرحلة التشطيب', en: 'Wiring during finishing' },
  { file: 'panel-control-door', cat: 'panel', ar: 'باب لوحة تحكم: مفاتيح تشغيل', en: 'Control panel door: selector switches' },
  { file: 'home-led-drivers-ceiling', cat: 'home', ar: 'درايفرات LED مخفية بالسقف', en: 'LED drivers hidden in the ceiling' },
  { file: 'panel-main-mccb-feeder', cat: 'panel', ar: 'قاطع رئيسي MCCB مع التغذية', en: 'Main MCCB with feeder cables' },
];

export const workImage = (file, width) => `/images/work/${file}-${width}.webp`;
