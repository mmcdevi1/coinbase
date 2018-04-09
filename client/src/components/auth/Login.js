import React from 'react';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as types from '../../actions/types';
import * as actions from '../../actions';


class Login extends React.Component {
  onFormSubmit ({ username, password }) {
    console.log(this.props)
    this.props.signinUser({ username, password }, this.props.history)
  }

  renderField (field) {
    return (
      <input className="form-control" {...field.input} type={field.type} />
    )
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          Ooops
        </div>
      )
    }
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Username:</label>
          <Field type="text" component={this.renderField} label="username" name="username" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field type="password" component={this.renderField} label="password" name="password" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Log in</button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error,
    currentUser: state.auth.currentUser
  }
}

function mapDispatchToProps (dispatch) {
  return {
    signinUser: function ({ username, password }, history) {
      axios.post('http://localhost:5000/login', { username, password })
        .then(response => {
          console.log(response)
          dispatch({ type: types.AUTH_USER, payload: response.data.user })
          localStorage.setItem('token', response.data.token)

          // Redirect
          history.push('/')
        })
        .catch(actions.authError())
    }
  }
}

const form = reduxForm({
  form: 'login',
  fields: ['username', 'password'],
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(form);