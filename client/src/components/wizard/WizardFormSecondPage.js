import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash'; 

const COMPETITORS = [
  '23 and Me',
  'Ancestry DNA',
  'Other'
];

class WizardFormSecondPage extends React.Component {
  renderField (field) {
    return (
      <input type={field.type} {...field.input} />
    )
  }

  render () {
    const { handleSubmit, previousPage } = this.props;

    return (
      <div>
        <h4>Have you ever done a DNA test before?</h4>
        <form onSubmit={ handleSubmit }>
          {COMPETITORS.map((competitor, index) => {
            return (
              <div key={index}>
                <label>{competitor}</label>
                <Field
                  type="checkbox"
                  component={this.renderField}
                  name={_.kebabCase(competitor)}
                />
              </div>
            )
          })}
          <button type="button" onClick={previousPage}>Previous</button>
          <button type="submit">Continue</button>
        </form>
      </div>
    )
  }
}

const form = reduxForm({
  form: 'wizard',
  fields: COMPETITORS.map(competitor => { return _.kebabCase(competitor) }),
  destroyOnUnmount: false
})(WizardFormSecondPage)

export default connect(null)(form);