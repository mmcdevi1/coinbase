import React from 'react';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as types from '../../actions/types';
import * as actions from '../../actions';
import BackButton from './BackButton';


class Login extends React.Component {
  componentWillMount () {
    if (this.props.authenticated) {
      this.props.history.push('/')
    }
  }

  renderLogo () {
    return process.env.PUBLIC_URL + "/images/DNA-ID-LOGO-white.png";
  }

  onFormSubmit ({ username, password }) {
    console.log(this.props)
    this.props.signinUser({ username, password }, this.props.history)
  }

  renderField (field) {
    return (
      <input className="form-control" {...field.input} placeholder={field.placeholder} type={field.type} />
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
      <div>
        <BackButton />
        <div className="form-header center">
          <h3>Login</h3>
          <p>Please complete all fields.</p>
        </div>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          <div className="form-group">
            <Field type="text" component={this.renderField} placeholder="Username" label="username" name="username" />
          </div>
          <div className="form-group">
            <Field type="password" component={this.renderField} placeholder="Password" label="password" name="password" />
          </div>
          {this.renderAlert()}
          <div className="form-group">
            <button action="submit" className="btn btn-primary btn-block">Log in</button>
          </div>
          <div className="center">
            <Link to="/">Forgot password?</Link>
            <div>
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
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