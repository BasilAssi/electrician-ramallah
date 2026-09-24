// 970590000000 → +970590000000
export const toTelHref = (number) => `tel:+${number}`;

// 970590000000 → 059 000 0000 (الصيغة المحلية للعرض)
export function formatPhone(number) {
  const local = `0${number.replace(/^(970|972)/, '')}`;
  return local.replace(/^(\d{3})(\d{3})(\d+)$/, '$1 $2 $3');
}
