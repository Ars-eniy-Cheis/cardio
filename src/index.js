import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import reducer from './store/reducers/mainReducer'

import LoginComponent from './pages/Login/LoginComponent';
import ChooseServiceComponent from './pages/ChooseService/ChooseServiceComponent';
import CovidComponent from './pages/Covid/CovidComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);

const mainPage = (<LoginComponent/>);
const profile = (<ChooseServiceComponent/>);
const covid = (<CovidComponent/>);

const router = (
  <Provider store={store}>
  <Router>
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/login" element={mainPage} />
        <Route path="/profile" element={profile} />
        <Route path="/profile/covid" element={covid} />
        <Route path="*" element={mainPage} />
      </Routes>
  </Router>
  </Provider>
);

root.render(router);

reportWebVitals();
