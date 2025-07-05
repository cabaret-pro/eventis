import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Security from './pages/Security';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import PreparingForPostCookieWorld from './pages/blog/PreparingForPostCookieWorld';
import UserBehaviorProfilesVsIdTracking from './pages/blog/UserBehaviorProfilesVsIdTracking';
import DOOHOpportunities from './pages/blog/DOOHOpportunities';
import FuturePrivacySafeAnalytics from './pages/blog/FuturePrivacySafeAnalytics';
import EnterpriseAnalyticsMigration from './pages/blog/EnterpriseAnalyticsMigration';
import RealTimeBehavioralSegmentation from './pages/blog/RealTimeBehavioralSegmentation';
import CrossPlatformAnalytics from './pages/blog/CrossPlatformAnalytics';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/preparing-for-post-cookie-world" element={<PreparingForPostCookieWorld />} />
          <Route path="/blog/user-behavior-profiles-vs-id-tracking" element={<UserBehaviorProfilesVsIdTracking />} />
          <Route path="/blog/dooh-opportunities" element={<DOOHOpportunities />} />
          <Route path="/blog/future-privacy-safe-analytics" element={<FuturePrivacySafeAnalytics />} />
          <Route path="/blog/enterprise-analytics-migration" element={<EnterpriseAnalyticsMigration />} />
          <Route path="/blog/real-time-behavioral-segmentation" element={<RealTimeBehavioralSegmentation />} />
          <Route path="/blog/cross-platform-analytics" element={<CrossPlatformAnalytics />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App; 