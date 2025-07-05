import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LocationOn as LocationIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 2px 20px rgba(17, 42, 72, 0.1)',
  borderBottom: '1px solid rgba(17, 42, 72, 0.1)',
}));

const Logo = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const NavButton = styled(Button)(() => ({
  color: '#2c3e50',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  padding: '8px 16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(17, 42, 72, 0.1)',
    color: '#112a48',
  },
}));

const CTAButton = styled(Button)(() => ({
  background: 'linear-gradient(135deg, #112a48, #3a7580)',
  color: 'white',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '25px',
  padding: '10px 24px',
  boxShadow: '0 4px 15px rgba(17, 42, 72, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #0d1f35, #2a5560)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(17, 42, 72, 0.4)',
  },
}));

const LocationChip = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(17, 42, 72, 0.1)',
  color: '#112a48',
  borderRadius: '20px',
  padding: '4px 12px',
  fontSize: '12px',
  fontWeight: 600,
  gap: '4px',
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navigationItems = [
    { label: 'Product', action: () => scrollToSection('product') },
    { label: 'Features', action: () => scrollToSection('features') },
    { label: 'Pricing', action: () => scrollToSection('pricing') },
    { label: 'Documentation', action: () => window.open('https://github.com/oncabteam/anon', '_blank') },
  ];

  const drawer = (
    <Box sx={{ width: 250, height: '100%', backgroundColor: '#f8f9fa' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item, index) => (
          <ListItem button key={index} onClick={item.action}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem button onClick={() => window.open('mailto:team@oncabaret.com', '_blank')}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo and Company Info */}
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <img 
                  src="/logo-text.png" 
                  alt="Eventis Technologies Logo"
                  style={{ height: '50px', width: 'auto' }}
                />
                <LocationChip>
                  <LocationIcon sx={{ fontSize: 14 }} />
                  Built in NYC
                </LocationChip>
              </Box>
            </Logo>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navigationItems.map((item, index) => (
                  <NavButton key={index} onClick={item.action}>
                    {item.label}
                  </NavButton>
                ))}
                                 <Box sx={{ mx: 1 }}>
                   <CTAButton 
                     onClick={() => window.open('mailto:team@oncabaret.com', '_blank')}
                   >
                     Get Started
                   </CTAButton>
                 </Box>
                <IconButton 
                  color="primary" 
                  onClick={() => window.open('https://github.com/oncabteam/anon', '_blank')}
                  sx={{ ml: 1 }}
                >
                  <GitHubIcon />
                </IconButton>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed header */}
      <Toolbar />
    </>
  );
};

export default Header; 