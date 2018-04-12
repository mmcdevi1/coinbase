import React from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';

class WizardForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      page: 1
    }
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  previousPage = () => {
    this.setState({
      page: this.state.page - 1
    })
  }

  onSubmit (formProps) {
    console.log(formProps)
  }

  renderFirstPage () {
    if (this.state.page === 1) {
      return <WizardFormFirstPage onClickSubmit={this.nextPage} />
    }
  }

  renderSecondPage () {
    if (this.state.page === 2) {
      return <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} />
    }
  }

  renderThirdPage () {
    const { onSubmit } = this; 

    if (this.state.page === 3) {
      return <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit} />
    }
  }

  renderAll () {
    return (
      <div>
        {this.renderFirstPage()}
        {this.renderSecondPage()}
        {this.renderThirdPage()}
      </div>
    )
  }

  render () {
    return (
      <div>
        <h4>Wizard Form</h4>
        {this.renderAll()}
      </div>
    )
  }
}

export default WizardForm;