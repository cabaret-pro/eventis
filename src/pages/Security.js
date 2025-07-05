import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Security as SecurityIcon, Shield as ShieldIcon, Lock as LockIcon, Verified as VerifiedIcon } from '@mui/icons-material';

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

const SecurityCard = styled(Card)(() => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)',
  border: '1px solid rgba(17, 42, 72, 0.08)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  }
}));

const Security = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using AES-256 encryption',
      icon: <LockIcon sx={{ fontSize: 48, color: '#112a48' }} />
    },
    {
      title: 'Privacy by Design',
      description: 'Built from the ground up with privacy-first architecture',
      icon: <ShieldIcon sx={{ fontSize: 48, color: '#112a48' }} />
    },
    {
      title: 'SOC 2 Compliance Target',
      description: 'Working toward SOC 2 certification with industry security best practices',
      icon: <VerifiedIcon sx={{ fontSize: 48, color: '#112a48' }} />
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Multi-layered security with continuous verification',
      icon: <SecurityIcon sx={{ fontSize: 48, color: '#112a48' }} />
    }
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <ContentPaper>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4, color: '#2c3e50', textAlign: 'center' }}>
            Security & Trust
          </Typography>
          
          <Typography variant="h5" sx={{ mb: 8, color: '#6c757d', textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
            Your trust is our foundation. We employ enterprise-grade security measures to protect your data and ensure the integrity of our services.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {securityFeatures.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <SecurityCard>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </SecurityCard>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Data Protection
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            We implement comprehensive data protection measures to ensure your information remains secure and private:
          </Typography>
          
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="AES-256 encryption for all data at rest" />
            </ListItem>
            <ListItem>
              <ListItemText primary="TLS 1.3 encryption for all data in transit" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Regular security audits and penetration testing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Multi-factor authentication for all accounts" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Role-based access controls and least privilege principles" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Infrastructure Security
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            Our infrastructure is built on secure cloud platforms with multiple layers of protection:
          </Typography>
          
          <List sx={{ mb: 4 }}>

            <ListItem>
              <ListItemText primary="Distributed denial-of-service (DDoS) protection" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Automated security monitoring and alerting" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Regular security updates and patch management" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Geographically distributed data centers for redundancy" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Compliance & Certifications
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            We maintain strict compliance with industry standards and regulations:
          </Typography>
          
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="GDPR (General Data Protection Regulation) compliant" />
            </ListItem>
            <ListItem>
              <ListItemText primary="CCPA (California Consumer Privacy Act) compliant" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Targeting SOC 2 Type II certification" />
            </ListItem>
            <ListItem>
              <ListItemText primary="ISO 27001 security management standards" />
            </ListItem>
            <ListItem>
              <ListItemText primary="PIPEDA (Personal Information Protection and Electronic Documents Act) compliant" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Privacy-First Design
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            Our Anon SDK is designed with privacy as the core principle:
          </Typography>
          
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="No personally identifiable information (PII) collection" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Anonymous behavioral profiling without user identification" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Data minimization and purpose limitation" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Automatic data retention policies" />
            </ListItem>
            <ListItem>
              <ListItemText primary="User consent management and opt-out capabilities" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Incident Response
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            We have established comprehensive incident response procedures to quickly address any security concerns:
          </Typography>
          
          <List sx={{ mb: 4 }}>
            <ListItem>
              <ListItemText primary="24/7 security monitoring and threat detection" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Rapid incident response team with defined escalation procedures" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Transparent communication with affected parties" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Regular security training for all team members" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Post-incident analysis and improvement processes" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Security Questions?
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            If you have questions about our security practices or need to report a security issue, please contact our security team:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#112a48' }}>
            Email: team@oncabaret.com
          </Typography>
          <Typography variant="body1" sx={{ color: '#6c757d' }}>
            Subject: Security Inquiry
          </Typography>
        </ContentPaper>
      </Container>
    </PageContainer>
  );
};

export default Security; 