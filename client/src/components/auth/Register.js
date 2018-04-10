import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from '../../actions/types';
import BackButton from './BackButton';
import Center from './Center';

const FIELDS = [
  { label: 'First Name', name: 'firstName' },
  { label: 'Last Name', name: 'lastName' },
  { label: 'Username', name: 'username' },
  { label: 'Email', name: 'email' },
  { label: 'Password', name: 'password' },
  { label: 'Password Confirmation', name: 'passwordConfirm' },
];

class Register extends React.Component {
  renderLogo () {
    return process.env.PUBLIC_URL + "/images/DNA-ID-LOGO-white.png";
  }

  renderField (field) {
    // This method is being passed in the component field in the Field Component in the render method
    const { label, type, input, meta: { error, touched } } = field;

    return (
      <div className="form-group">
        <input className="form-control" type={type} placeholder={label} {...input} />
        <div>{(touched) ? error : ''}</div>
      </div>
    )
  }

  onFormSubmit (formProps) {
    this.props.registerUser(formProps, this.props.history);
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div>
          {this.props.errorMessage}
        </div>
      );
    } 
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <Center>
        <BackButton />
        <div className="form-header center">
          <img id="logo" src={this.renderLogo()} alt="DNA ID Logo" />
          <h3>Register</h3>
          <p>Please complete all fields.</p>
        </div>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          {FIELDS.map(field => {
            return (
              <Field
                key={field.label}
                type={(field.name.includes('password')) ? 'password' : 'text'}
                component={this.renderField}
                label={field.label}
                name={field.name}
              />
            )
          })}
          {this.renderAlert()}
          <div className="form-group">
            <button className="btn btn-primary btn-block" action="submit">Register</button>
          </div>
          <div className="center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </Center>
    )
  }
}

function validate (formProps) {
  const errors = {},
        vowels = ['a', 'e', 'i', 'o'];

  // Required fields
  FIELDS.forEach(field => {
    const firstLetter = field.name.split('')[0];

    if (!formProps[field.name]) {
      const an = ((vowels.includes(firstLetter)) ? 'an' : 'a');
      errors[field.name] = `Please enter ${an} ${field.label.toLowerCase()}`;
    }
  });

  // Password and confirmation must match
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!';
  }

  // Password length must be 6 or more characters in length
  if (formProps.password && formProps.password.length < 6) {
    errors.password = 'Password must be 6 characters in length';
  } 

  return errors;
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

function mapDispatchToProps (dispatch) {
  return {
    registerUser: function ({ firstName, lastName, username, email, password, passwordConfirm }, history) {
      axios.post('http://localhost:5000/register', { firstName, lastName, username, email, password, passwordConfirm })
        .then(response => {
          console.log(response)
          dispatch({ type: AUTH_USER, payload: response.data.user })
          localStorage.setItem('token', response.data.token)

          // Redirect
          history.push('/')
        })
        .catch(e => dispatch(authError(e.response.data.error)))
    }
  }
}

const form = reduxForm({
  form: 'register',
  fields: ['firstName', 'lastName', 'email', 'password', 'passwordConfirm'],
  validate: validate,
})(Register)

export default connect(mapStateToProps, mapDispatchToProps)(form)