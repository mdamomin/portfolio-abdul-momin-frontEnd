import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './ProfileComponents/NavigationBar/NavigationBar';
import TopBanner from './ProfileComponents/TopBanner/TopBanner';
import AboutMe from './ProfileComponents/AboutMe/AboutMe';
import Resume from './ProfileComponents/Resume/Resume';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Testimonial from './ProfileComponents/Testimonial/Testimonial';
import ScrollToTop from './ProfileComponents/ScrollToTop/ScrollToTop';
import ContactMe from './ProfileComponents/ContactMe/ContactMe';
import './App.css';
function App() {
  return (
    <div>
      <Router>
        <NavigationBar></NavigationBar>
        <TopBanner></TopBanner>
        <AboutMe></AboutMe>
        <Resume></Resume>
        <Testimonial></Testimonial>
        <ContactMe></ContactMe>
      </Router>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
