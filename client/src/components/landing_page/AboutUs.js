import React from 'react';

class AboutUs extends React.Component {
  render () {
    return (
      <section id="about-us" style={{padding: '100px 0'}} className="about-us">
        <div className="container">
          <div className="center">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h1 style={{marginBottom: 30}}>About Us</h1>
                <p style={{marginBottom: 50}}>
                  dnaID is a company designed for you, as a human being to take control of your most identifying trait,
                  your DNA.
                  We have a core mission of helping medical research increase velocity to clinical trials
                  by gaining access to a larger research population for more conclusive results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutUs;

