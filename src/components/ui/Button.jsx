import Icon from './Icon';

const variants = {
  primary: 'bg-volt text-ink hover:bg-volt-deep',
  dark: 'bg-ink text-paper hover:bg-ink/85',
  whatsapp: 'bg-wa text-white hover:bg-wa/90',
  outline: 'border border-ink/25 text-ink hover:border-ink',
};

// رابط بشكل زر (كل الأزرار بالموقع روابط: tel / wa.me / anchors)
export default function Button({ href, icon, variant = 'primary', className = '', children, ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold transition-colors ${variants[variant]} ${className}`}
      {...rest}
    >
      {icon && <Icon name={icon} />}
      {children}
    </a>
  );
}
