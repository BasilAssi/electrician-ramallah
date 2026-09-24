import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import MobileContactBar from './MobileContactBar';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileContactBar />
      <FloatingWhatsApp />
    </>
  );
}
