import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Admin, CustomRoutes, WithPermissions } from "react-admin";

import reducer from './store/reducers/mainReducer';

import Doctor from './pages/Doctor';
import AdminComponent from './pages/Admin';
import CustomLogin from './pages/CustomLogin';

import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/Ars-eniy-Cheis/cardio-admin-test');

const store = createStore(reducer);

const doctor = (<Doctor />)
const admin = (<AdminComponent />)
const App = () => (
    <Provider store={store}>
        <Admin authProvider={authProvider} dataProvider={dataProvider} requireAuth>
            <CustomRoutes>
                <Route path="/users/*" element={admin} />
                <Route path="/patients/*" element={doctor} />
            </CustomRoutes>
        </Admin>
    </Provider>
);

export default App;