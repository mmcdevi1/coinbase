// Higher Order Component

import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends React.Component {
    // static contextTypes = {
    //   router: React.PropTypes.object    
    // }

    componentWillMount () {
      if (!this.props.authenticated) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    return { authenticated: state.Auth.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}