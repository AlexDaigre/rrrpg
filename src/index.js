import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

const StoreAndApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
ReactDOM.render(<StoreAndApp />, document.getElementById('root'));
registerServiceWorker();
