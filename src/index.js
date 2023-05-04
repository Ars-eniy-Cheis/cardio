import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import reducer from './store/reducers/mainReducer'

import Login from './pages/Login';
import Admin from './pages/Admin';
import Patient from './pages/Patient';
import AddUser from './pages/AddUsser';
import ResetPassword from './pages/ResetPassword';

import EditingService from './pages/EditingService';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);

const mainPage = (<Login />);
const covidPatient = (<Patient />);
const cabsPatient = (<Patient />);
const admin = (<Admin />);
const editingService = (< EditingService />)
const addUser = (< AddUser />)
const resetPassword = (< ResetPassword />)

const router = (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/login" element={mainPage} />
        <Route path="/covid" element={editingService} />
        <Route path="/covid/patient" element={covidPatient} />
        <Route path="/cabs" element={editingService} />
        <Route path="/cabs/patient" element={cabsPatient} />
        <Route path="/admin" element={admin} />
        <Route path="/admin/add-user" element={addUser} />
        <Route path="/admin/reset-password" element={resetPassword} />
        <Route path="*" element={mainPage} />
      </Routes>
    </Router>
  </Provider>
);

root.render(router);

reportWebVitals();