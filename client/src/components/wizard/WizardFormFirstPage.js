import React from 'react';
import { connect } from 'react-redux';
import authActions from '../../actions/auth'

const { updateUser } = authActions; 

class WizardFormFirstPage extends React.Component {
  onClickSubmit () {
    this.props.updateUser({ contributor: true });
    this.props.onClickSubmit();
  }

  render () {
    return (
      <div>
        <h3>Our mission is to build a DNA community</h3>
        <button onClick={() => this.onClickSubmit()}>Accept</button>
        <button>Decline</button>
      </div>
    )
  }
}

export default connect(null, { updateUser })(WizardFormFirstPage);