import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import ChooseService from '../pages/ChooseService';
import Covid from '../pages/Covid';
import CovidPatient from '../pages/CovidPatient';
import Cabs from '../pages/Cabs';
import CabsPatient from '../pages/CabsPatient';

const mainPage = (<Login />);
const profile = (<ChooseService />);
const covid = (<Covid />);
const covidPatient = (<CovidPatient />);
const cabs = (<Cabs />);
const cabsPatient = (<CabsPatient />);

const Doctor = () => {
    return (
        <Routes>
            <Route path="/profile" element={profile} />
            <Route path="/profile/covid" element={covid} />
            <Route path="/profile/covid/patient" element={covidPatient} />
            <Route path="/profile/cabs" element={cabs} />
            <Route path="/profile/cabs/patient" element={cabsPatient} />
        </Routes>
    )
}

export default Doctor;