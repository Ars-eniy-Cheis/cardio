import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Admin from '../pages/Admin';

const admin = (<Admin />)

const AdminRoute = () => {
    return (
        <Routes>
            <Route path="/users/*" element={admin} />
        </Routes>
    )
}

export default AdminRoute;