import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App; 