import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Employers from './pages/Employers';
import Candidates from './pages/Candidates';
import About from './pages/About';
import Contact from './pages/Contact';
import JobMela from './pages/JobMela';

// Layout components
import Layout from './components/layout/Layout';
import Popup from './components/home/PopUp';

function App() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      {showPopup && <Popup onClose={handleClose} />}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/:id" element={<JobDetails />} />
            <Route path="employers" element={<Employers />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="job-mela" element={<JobMela />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
