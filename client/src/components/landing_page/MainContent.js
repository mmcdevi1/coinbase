import React from 'react';
import RotatingText from '../RotatingText';

class MainContent extends React.Component {
  renderImage () {
    return process.env.PUBLIC_URL + "/images/DNA-infographic-web.png";
  }

  render () {
    return (
      <div className="container main-image">
        <div id="wrapper">
          <div id="page">
            <div id="content_container">
              <div id="content">
                <section className="text-center hero hero-message">
                  <h1>
                    <RotatingText 
                      cursor={false} 
                      items={[
                        'Curious about your DNA?', 
                        'Want to help cure disease?', 
                        'Need some extra cash?', 
                        'Find out how much your DNA is worth']} 
                    />
                  </h1>
                  <br />
                  <img src={this.renderImage()} alt="DNA Infographic" className="hero-image img-responsive" />
                  <br />
                  <br />
                  <p className="bold">
                    Sign up for our Beta launch. First 1000 customers get DNA sequencing for free!
                  </p>
                  <a href="#contact_form" className="btn btn-success btn-lg">
                    Sign up for early access
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent;