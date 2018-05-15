import React from 'react';
import { Provider } from 'react-redux';
import PublicRoutes from './router';
import store from './reducers/store';
import currentUser from './utils/currentUser';
import cart from './utils/cart';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Provider store={store}>
          <PublicRoutes />
        </Provider>
      </div>
    )
  }
}

export default App;