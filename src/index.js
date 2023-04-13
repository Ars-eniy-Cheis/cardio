import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import reducer from './store/reducers/mainReducer'

import Login from './pages/Login';
import ChooseService from './pages/ChooseService';
import Covid from './pages/Covid';
import CovidPatient from './pages/CovidPatient';
import Cabs from './pages/Cabs';
import CabsPatient from './pages/CabsPatient';
import Admin from './pages/Admin';

import EditingService from './pages/EditingService';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);

const mainPage = (<Login />);
const profile = (<ChooseService />);
const covidPatient = (<CovidPatient />);
const cabsPatient = (<CabsPatient />);
const admin = (<Admin />);
const editingService = (< EditingService />)

const router = (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/login" element={mainPage} />
        <Route path="/profile" element={profile} />
        <Route path="/profile/covid" element={editingService} />
        <Route path="/profile/covid/patient" element={covidPatient} />
        <Route path="/profile/cabs" element={editingService} />
        <Route path="/profile/cabs/patient" element={cabsPatient} />
        <Route path="/admin" element={admin} />
        <Route path="*" element={mainPage} />
      </Routes>
    </Router>
  </Provider>
);

root.render(router);

reportWebVitals();