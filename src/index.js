import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const mainPage = (<Login/>);

const router = (
  <div>
  <Router>
    <div>
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/login" element={mainPage} />
        <Route path="*" element={mainPage} />
      </Routes>
    </div>
  </Router>
  </div>
);

root.render(router);
reportWebVitals();
