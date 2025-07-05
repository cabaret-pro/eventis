import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(() => ({
  backgroundColor: '#2c3e50',
  color: 'white',
  paddingTop: '60px',
  paddingBottom: '40px',
}));

const FooterLink = styled(Link)(() => ({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  fontSize: '14px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#3a7580',
    textDecoration: 'none',
  },
}));



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <img 
                  src="/logo-text.png" 
                  alt="Eventis Technologies Logo"
                  style={{ height: '40px', width: 'auto' }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2, lineHeight: 1.6 }}>
                Building privacy safe infrastructure for real world intent. 
                Our revolutionary Anon SDK enables behavioral analytics without compromising user privacy.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <LocationIcon sx={{ fontSize: 16, color: '#3a7580' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Built in New York City
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Product Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Product
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="#product">Anon SDK</FooterLink>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="https://github.com/oncabteam/anon" target="_blank">
                Documentation
              </FooterLink>
              <FooterLink href="https://github.com/oncabteam/anon" target="_blank">
                GitHub
              </FooterLink>
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="#dashboard">Dashboard</FooterLink>
              <FooterLink href="https://github.com/oncabteam/anon" target="_blank">
                API Reference
              </FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="mailto:team@oncabaret.com">Contact</FooterLink>
              <FooterLink href="mailto:team@oncabaret.com">Press</FooterLink>
            </Box>
          </Grid>


        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © {currentYear} Eventis Technologies. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/security">Security</FooterLink>
            <FooterLink href="/security">Compliance</FooterLink>
          </Box>
        </Box>

        {/* Extra Info */}
        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', textAlign: 'center' }}>
            🏗️ Building the future of privacy-safe behavioral analytics • 🔒 GDPR, CCPA & PIPEDA Compliant • 🚀 NYC Tech
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 