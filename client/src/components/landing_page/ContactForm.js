import React from 'react';

class ContactForm extends React.Component {
  render () {
    return (
      <div id="contact_form" className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="center">
                <h1>Sign Up</h1>
                <p>Subscribe for more information</p>
              </div>
              <form id="mc-embedded-subscribe-form" action="https://dnaid.us17.list-manage.com/subscribe/post?u=e76ae4b591879e47ffb539873&id=eba8253bcb" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate className="validate">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input id="mce-FNAME" type="text" name="FNAME" placeholder="First Name" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input id="mce-LNAME" type="text" name="LNAME" placeholder="Last Name" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input id="mce-EMAIL" type="email" name="EMAIL" placeholder="Email" className="required email form-control" />
                    </div>
                  </div>
                </div>
                <div id="mce-responses" className="clear">
                  <div id="mce-error-response" style={{display: 'none'}} className="response" />
                  <div id="mce-success-response" style={{display: 'none'}} className="response" />
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                  <input type="text" name="b_e76ae4b591879e47ffb539873_eba8253bcb" tabIndex={-1} defaultValue />
                </div>
                <div className="clear">
                  <input id="mc-embedded-subscribe" type="submit" defaultValue="Send" name="subscribe" className="button btn btn-transparent btn-lg btn-block" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm;

