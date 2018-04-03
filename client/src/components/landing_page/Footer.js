import React from 'react';

class Team extends React.Component {
  render () {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">© 2018 DNA iD</div>
            <div className="col-sm-4">
              <div className="center"><a href="mailto:contact@dnaid.co">Contact Us - Contact@dnaid.co</a></div>
            </div>
            <div className="col-sm-4">
              <div className="pull-right">Site by <span>DNA iD</span></div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Team;

