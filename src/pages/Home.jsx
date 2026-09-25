import Layout from '../components/layout/Layout';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Solar from '../sections/Solar';
import Work from '../sections/Work';
import About from '../sections/About';
import Process from '../sections/Process';
import ServiceAreas from '../sections/ServiceAreas';
import Faq from '../sections/Faq';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Solar />
      <Work />
      <About />
      <Process />
      <ServiceAreas />
      <Faq />
      <Contact />
    </Layout>
  );
}
