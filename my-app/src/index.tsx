//react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
//redux imports
import { Provider } from 'react-redux';
import {store} from './Assets/Redux/store';

//components import 
import {App} from './Pages/home';
//performance report import
import reportWebVitals from './reportWebVitals';
//basic styles
import './index.css';
//create the root container
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//render the component at the root container
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
