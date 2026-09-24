export default function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</Tag>;
}
