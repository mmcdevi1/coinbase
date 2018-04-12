import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const ARR = [
  'Yes',
  'No'
];

class WizardFormThirdPage extends React.Component {
  renderField (field) {
    return (
      <input type={field.type} {...field.input} />
    )
  }

  render () {
    const { handleSubmit, previousPage, pristine, submitting } = this.props;

    return (
      <div>
        <h4>Can we send you a DNA kit?</h4>
        <form onSubmit={ handleSubmit }>
          {ARR.map((field, index) => {
            return (
              <div key={index}>
                <label>{field}</label>
                <Field
                  type="checkbox"
                  component={this.renderField}
                  label={field}
                  name={`send-dna-kit-${field.toLowerCase()}`}
                />
              </div>
            )
          })}
          <button type="button" onClick={previousPage}>Previous</button>
          <button type="submit" disabled={pristine || submitting}>Continue</button>
        </form>
      </div>
    )
  }
}

const form = reduxForm({
  form: 'wizard',
  fields: ['send-dna-kit-yes', 'send-dna-kit-no'],
  destroyOnUnmount: false
})(WizardFormThirdPage)

export default connect(null)(form);