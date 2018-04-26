import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Team from './Team';
import ContactForm from './ContactForm';
import Footer from './Footer';

class LandingPage extends React.Component {
  render () {
    return (
      <div className="app">
        <div className="home">
          <Header />
          <MainContent />
        </div>
        <HowItWorks />
        <AboutUs />
        <Team />
        <ContactForm />
        <Footer />
      </div>
    )
  }
}

export default LandingPage;