// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ClientHomePage from './components/ClientHomePage';
import SensorProviderHomePage from './components/SensorProviderHomePage';
import SignInPage from './SignInPage';        
import RegisterPage from './RegisterPage';       
import PreferencesPage from './PreferencesPage';   
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/client" element={<ClientHomePage />} />
          <Route path="/provider" element={<SensorProviderHomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

