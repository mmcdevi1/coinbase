import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import userActions from '../actions/user';

const { getUser } = userActions;

class ProfilePage extends React.Component {
  componentDidMount () {
    this.props.getUser();
  }

  render () {
    const { user } = this.props;

    return (
      <div>
        Profile page of {user.username}
        <div>
          {user.firstName}
        </div>
      </div>
    ) 
  }
}

function mapStateToProps (state) {
  return {
    user: state.User
  }
}

export default connect(mapStateToProps, { getUser })(ProfilePage);