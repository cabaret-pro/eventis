import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

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

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <ContentPaper>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4, color: '#2c3e50' }}>
            Privacy Policy
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, color: '#6c757d', fontSize: '16px' }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Our Privacy Commitment
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            At Eventis Technologies, privacy is at the core of everything we do. Our Anon SDK is built with privacy-by-design principles, 
            ensuring that we collect behavioral insights without compromising individual privacy. We are committed to transparency 
            about our data practices and your rights.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Information We Collect
          </Typography>
          
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#2c3e50' }}>
            Behavioral Data (Non-PII)
          </Typography>
          <List sx={{ mb: 3 }}>
            <ListItem>
              <ListItemText primary="Device metadata (OS, browser, screen size)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Interaction patterns (clicks, scrolls, hovers)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Session information (duration, pages visited)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Location context (city-level, not precise location)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Temporal patterns (usage timing, frequency)" />
            </ListItem>
          </List>

          <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#2c3e50' }}>
            Website Data
          </Typography>
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="Contact form submissions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Newsletter subscriptions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Support requests" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            What We Don't Collect
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            We explicitly do not collect:
          </Typography>
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="Names, email addresses, or phone numbers (except when voluntarily provided)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Precise GPS coordinates or exact locations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Social security numbers or government IDs" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Financial information or payment details" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Health information or biometric data" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            How We Use Information
          </Typography>
          
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="Create anonymous behavioral profiles for analytics" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Improve our SDK and services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Provide customer support" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comply with legal obligations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Prevent fraud and abuse" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Data Sharing
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            We do not sell, rent, or share your personal information with third parties, except:
          </Typography>
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="With your explicit consent" />
            </ListItem>
            <ListItem>
              <ListItemText primary="To comply with legal requirements" />
            </ListItem>
            <ListItem>
              <ListItemText primary="With service providers who help operate our services (under strict confidentiality agreements)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="In case of business transfer or acquisition" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Your Rights
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            You have the right to:
          </Typography>
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="Access your data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Correct inaccurate data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Delete your data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Restrict processing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Data portability" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Object to processing" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Contact Us
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            For privacy-related questions or requests, contact us at:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#112a48' }}>
            Email: team@oncabaret.com
          </Typography>
          <Typography variant="body1" sx={{ color: '#6c757d' }}>
            Subject: Privacy Policy Inquiry
          </Typography>
        </ContentPaper>
      </Container>
    </PageContainer>
  );
};

export default PrivacyPolicy; 