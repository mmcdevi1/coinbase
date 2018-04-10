import React from 'react';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as types from '../../actions/types';
import * as actions from '../../actions';
import BackButton from './BackButton';
import Center from './Center';

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
    const { label, type, input, meta: { error, touched } } = field;

    return (
      <div className="form-group">
        <input className={`form-control ${(touched && error) ? 'form-contol-error' : ''}`} {...field.input} placeholder={field.placeholder} type={field.type} />
        <div className="error">
          {(touched) ? error : ''}
        </div>
      </div>
    )
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <Center>
        <BackButton />
        <div className="form-header center">
          <h3>Login</h3>
          <p>Please complete all fields.</p>
        </div>
        {this.renderAlert()}
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          <Field type="text" component={this.renderField} placeholder="Username" label="username" name="username" />
          <Field type="password" component={this.renderField} placeholder="Password" label="password" name="password" />
          
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
      </Center>
    )
  }
}

function validate (formProps) {
  const errors = {};

  if (!formProps.username) {
    errors.username = 'Username is required.'
  }

  if (!formProps.password) {
    errors.password = 'Password is required.'
  }

  return errors
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error,
    currentUser: state.auth.currentUser
  }
}

function authError (error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
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
        .catch(e => dispatch(authError('Invalid email or password. Please try again')))
    }
  }
}

const form = reduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate: validate
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(form);