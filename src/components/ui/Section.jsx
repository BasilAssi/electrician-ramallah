import Container from './Container';

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} aria-labelledby={id && `${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
