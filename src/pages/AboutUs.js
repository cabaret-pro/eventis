import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Business as BusinessIcon, LocationOn as LocationIcon, Psychology as PsychologyIcon, AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';

const PageContainer = styled(Box)(() => ({
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
  paddingTop: '120px',
  paddingBottom: '60px'
}));

const ContentPaper = styled(Paper)(() => ({
  padding: '48px',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)',
  marginBottom: '32px'
}));

const ValueCard = styled(Card)(() => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)',
  border: '1px solid rgba(17, 42, 72, 0.08)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  }
}));

const AboutUs = () => {
  const companyValues = [
    {
      title: 'Privacy First',
      description: 'We believe privacy is a fundamental right. Everything we build puts user privacy at the forefront.',
      icon: <PsychologyIcon sx={{ fontSize: 48, color: '#112a48' }} />
    },
    {
      title: 'Innovation Driven',
      description: 'We push the boundaries of what\'s possible in behavioral analytics using cutting-edge AI technology.',
      icon: <AutoAwesomeIcon sx={{ fontSize: 48, color: '#112a48' }} />
    },
    {
      title: 'Built in NYC',
      description: 'Founded in the heart of New York City, we embody the entrepreneurial spirit and innovation of the city.',
      icon: <LocationIcon sx={{ fontSize: 48, color: '#112a48' }} />
    },
    {
      title: 'Enterprise Ready',
      description: 'We build solutions that scale with your business, from startup to enterprise.',
      icon: <BusinessIcon sx={{ fontSize: 48, color: '#112a48' }} />
    }
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <ContentPaper>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4, color: '#2c3e50', textAlign: 'center' }}>
            About Eventis Technologies
          </Typography>
          
          <Typography variant="h5" sx={{ mb: 8, color: '#6c757d', textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
            Building privacy-safe infrastructure for real-world intent through revolutionary ML + agentic AI technology
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Our Mission
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, fontSize: '18px' }}>
            At Eventis Technologies, we're revolutionizing how businesses understand user behavior while maintaining the highest 
            standards of privacy protection. Our mission is to build privacy-safe infrastructure that enables companies to gain 
            actionable insights from real-world intent without compromising individual privacy.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            The Problem We're Solving
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, fontSize: '18px' }}>
            Traditional analytics platforms collect vast amounts of personal data, creating privacy risks and compliance challenges. 
            Meanwhile, businesses still need to understand their users' behavior to make informed decisions. We've created a solution 
            that gives you the insights you need while protecting user privacy through advanced anonymous behavioral profiling.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Our Innovation
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, fontSize: '18px' }}>
            The Anon SDK represents a breakthrough in privacy-safe analytics. Using advanced ML + agentic AI, we create behavioral 
            profiles that provide unprecedented insights into user intent without collecting personally identifiable information. 
            Our technology goes beyond traditional analytics to offer:
          </Typography>

          <Box sx={{ mb: 6, p: 4, backgroundColor: '#f8f9fa', borderRadius: '16px', border: '2px solid #112a48' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
                  Crowd Analysis
                </Typography>
                <Typography variant="body2" sx={{ color: '#6c757d' }}>
                  Real-time understanding of group dynamics and collective behavior patterns
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
                  Seasonality Intelligence
                </Typography>
                <Typography variant="body2" sx={{ color: '#6c757d' }}>
                  Advanced temporal pattern recognition for predictive behavioral modeling
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
                  Dynamic Pricing
                </Typography>
                <Typography variant="body2" sx={{ color: '#6c757d' }}>
                  AI-powered pricing optimization for digital advertising and content
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: '#112a48' }}>
            Our Values
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {companyValues.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ValueCard>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </ValueCard>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Industry Leadership
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, fontSize: '18px' }}>
            Our behavioral analytics platform delivers industry-leading performance with 97% accuracy in behavioral prediction, 
            3x better results than traditional analytics, and real-time processing with less than 50ms latency. We're trusted by 
            enterprise companies worldwide for mission-critical applications.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            The Future of Analytics
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, fontSize: '18px' }}>
            We're not just building another analytics platform – we're defining the future of privacy-safe behavioral understanding. 
            As privacy regulations become stricter and user expectations evolve, our technology provides the foundation for 
            sustainable, ethical data practices that benefit both businesses and users.
          </Typography>

          <Box sx={{ textAlign: 'center', p: 4, backgroundColor: '#112a48', borderRadius: '16px', color: 'white' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Ready to Transform Your Analytics?
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Join the privacy-first revolution in behavioral analytics
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, mt: 2 }}>
              Contact us: team@oncabaret.com
            </Typography>
          </Box>
        </ContentPaper>
      </Container>
    </PageContainer>
  );
};

export default AboutUs; 