import React from 'react';
import { Provider, connect } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import AppNavigator from './Stack';
import reducer from './reducer';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}


export default App;
