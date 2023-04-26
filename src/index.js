import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
// import { store } from './redux/configStore';
import { rootReducer } from './redux/reducer/configStore';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

reportWebVitals();
