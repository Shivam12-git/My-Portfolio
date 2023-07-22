import { Banner } from './components/banner';
import { Footer } from './components/footer';
import { Work } from './components/work';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Layout = () => {
    return (
      <>
        <Banner />
        <Work />
        <Footer />
      </>
    );
  };
  