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

const TermsOfService = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <ContentPaper>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4, color: '#2c3e50' }}>
            Terms of Service
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, color: '#6c757d', fontSize: '16px' }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Agreement to Terms
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            These Terms of Service ("Terms") govern your use of Eventis Technologies' Anon SDK and related services 
            ("Services") provided by Eventis Technologies, Inc. ("we," "us," or "our"). By accessing or using our Services, 
            you agree to be bound by these Terms.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Description of Services
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            Eventis Technologies provides the Anon SDK, a privacy-first behavioral analytics platform that enables 
            businesses to understand user behavior without collecting personally identifiable information. Our Services include:
          </Typography>
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="Anon SDK for mobile, web, and digital billboard platforms" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Analytics dashboard and reporting tools" />
            </ListItem>
            <ListItem>
              <ListItemText primary="API access and integration support" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Documentation and customer support" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            User Responsibilities
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            You agree to:
          </Typography>
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="Use the Services in compliance with all applicable laws and regulations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Provide accurate and complete information when requested" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Maintain the security of your account credentials" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Not attempt to circumvent or disable security measures" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Respect the privacy rights of end users" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Prohibited Uses
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            You may not use our Services to:
          </Typography>
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="Violate any laws or regulations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Collect personally identifiable information without proper consent" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Interfere with or disrupt the Services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Attempt to gain unauthorized access to our systems" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Use the Services for any illegal or harmful activities" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Intellectual Property
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            All content, features, and functionality of our Services are owned by Eventis Technologies and are protected 
            by copyright, trademark, and other intellectual property laws. You may not modify, distribute, or create 
            derivative works based on our Services without our express written permission.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Service Availability
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            We strive to maintain high availability of our Services, but we do not guarantee uninterrupted access. 
            We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or 
            without notice.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Limitation of Liability
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            To the fullest extent permitted by law, Eventis Technologies shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages arising out of or relating to your use of our Services.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Termination
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            We may terminate or suspend your access to our Services at any time, with or without cause, with or without 
            notice. Upon termination, your right to use the Services will cease immediately.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Governing Law
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            These Terms shall be governed by and construed in accordance with the laws of the State of New York, 
            without regard to its conflict of law provisions.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Contact Information
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            For questions about these Terms of Service, please contact us at:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#112a48' }}>
            Email: team@oncabaret.com
          </Typography>
          <Typography variant="body1" sx={{ color: '#6c757d' }}>
            Subject: Terms of Service Inquiry
          </Typography>
        </ContentPaper>
      </Container>
    </PageContainer>
  );
};

export default TermsOfService; 