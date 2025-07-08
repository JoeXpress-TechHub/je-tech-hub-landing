import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProgramsPage from './pages/ProgramsPage';
import ContactUsPage from './pages/ContactUsPage';
import GetStartedPage from './pages/GetStartedPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/aboutUs.html" element={<AboutUsPage />} />
        <Route path="/programs.html" element={<ProgramsPage />} />
        <Route path="/contactUs.html" element={<ContactUsPage />} />
        <Route path="/getStarted.html" element={<GetStartedPage />} />
      </Routes>
    </Router>
  );
}

export default App;