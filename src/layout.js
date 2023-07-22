import { Banner } from './components/banner';
import { About } from './components/about';
import { Footer } from './components/footer';
import { NavBar } from './components/navbar';

import { Work } from './components/work';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
export const Layout = () => {
    return (
      <>
        <Banner />
        <Work />
        <Footer />
      </>
    );
  };
  