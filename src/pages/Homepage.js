import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';
import { 
  Security as SecurityIcon,
  Code as CodeIcon,
  Smartphone as SmartphoneIcon,
  Web as WebIcon,
  Tv as TvIcon,
  CheckCircle as CheckIcon,
  Download as DownloadIcon,
  GitHub as GitHubIcon,
  Speed as SpeedIcon,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  People as PeopleIcon,
  Insights as InsightsIcon,
  Business as BusinessIcon,
  Rocket as RocketIcon,
  Stars as StarsIcon,
  AutoAwesome as AutoAwesomeIcon,
  Groups as GroupsIcon,
  AttachMoney as AttachMoneyIcon,
  CalendarMonth as CalendarMonthIcon,
  Visibility as VisibilityIcon,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';

const PageContainer = styled(Box)(() => ({
  minHeight: '100vh',
  backgroundColor: '#f8f9fa'
}));

const HeroSection = styled(Box)(() => ({
  background: 'linear-gradient(135deg, #112a48 0%, #3a7580 100%)',
  color: 'white',
  padding: '120px 0',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    pointerEvents: 'none'
  }
}));

const SectionContainer = styled(Container)(() => ({
  padding: '80px 0'
}));

const FeatureCard = styled(Card)(() => ({
  height: '100%',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)',
  border: '1px solid rgba(17, 42, 72, 0.08)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(17, 42, 72, 0.2)'
  }
}));

const StyledButton = styled(Button)(() => ({
  borderRadius: '30px',
  padding: '14px 32px',
  fontWeight: '600',
  textTransform: 'none',
  fontSize: '16px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease'
}));

const PrimaryButton = styled(StyledButton)(() => ({
  background: 'linear-gradient(135deg, #112a48, #3a7580)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(135deg, #0d1f35, #2a5560)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(17, 42, 72, 0.3)'
  }
}));

const SecondaryButton = styled(StyledButton)(() => ({
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  color: 'white',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    transform: 'translateY(-2px)'
  }
}));

const DiagramBox = styled(Box)(() => ({
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  borderRadius: '24px',
  padding: '48px',
  textAlign: 'center',
  border: '3px dashed #112a48',
  margin: '32px 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 70% 30%, rgba(17, 42, 72, 0.05) 0%, transparent 50%)',
    pointerEvents: 'none'
  }
}));

const PricingCard = styled(Card)(({ featured }) => ({
  borderRadius: '24px',
  padding: '32px',
  textAlign: 'center',
  position: 'relative',
  border: featured ? '3px solid #112a48' : '1px solid #e9ecef',
  background: featured ? 'linear-gradient(135deg, #112a48 0%, #3a7580 100%)' : '#fff',
  color: featured ? 'white' : 'inherit',
  transform: featured ? 'scale(1.05)' : 'scale(1)',
  boxShadow: featured ? '0 16px 48px rgba(17, 42, 72, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: featured ? 'scale(1.08)' : 'scale(1.02)',
    boxShadow: featured ? '0 20px 60px rgba(17, 42, 72, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.15)'
  }
}));

const Homepage = () => {
  const useCases = [
    {
      platform: 'Mobile Apps',
      useCase: 'Hyper-personalized UX & in-app targeting',
      integration: 'Native SDK (Swift/Kotlin/React Native)',
      roi: '40% increase in engagement'
    },
    {
      platform: 'Websites',
      useCase: 'Audience segmentation, lead scoring, content ranking',
      integration: 'JS SDK',
      roi: '60% better conversion rates'
    },
    {
      platform: 'Digital Billboards',
      useCase: 'Real-time trend display based on location + intent',
      integration: 'API + custom hardware plug-in',
      roi: '3x more relevant ads'
    }
  ];

  const dataSignals = [
    { 
      signal: 'Device Metadata', 
      description: 'OS, device type, screen size, time zone, browser/platform capabilities',
      icon: <SmartphoneIcon sx={{ color: '#112a48', fontSize: 32 }} />
    },
    { 
      signal: 'Location Context', 
      description: 'GPS coordinates, IP geolocation, venue proximity, neighborhood demographics',
      icon: <LocationIcon sx={{ color: '#112a48', fontSize: 32 }} />
    },
    { 
      signal: 'Interaction Events', 
      description: 'Clicks, hovers, swipes, zooms, page flow, session depth, dwell time',
      icon: <SpeedIcon sx={{ color: '#112a48', fontSize: 32 }} />
    },
    { 
      signal: 'Temporal Patterns', 
      description: 'Usage timing, frequency patterns, seasonal behavior, peak activity windows',
      icon: <TimeIcon sx={{ color: '#112a48', fontSize: 32 }} />
    },
    { 
      signal: 'Demographic Inference', 
      description: 'Age range estimation, income tier modeling, lifestyle clustering, interest categories',
      icon: <PeopleIcon sx={{ color: '#112a48', fontSize: 32 }} />
    },
    { 
      signal: 'Intent Modeling', 
      description: 'Purchase intent scoring, content affinity, engagement prediction, churn risk',
      icon: <PsychologyIcon sx={{ color: '#112a48', fontSize: 32 }} />
    }
  ];

  const privacyFeatures = [
    'Zero PII collected - no names, emails, or personal identifiers',
    'Anonymized at source with advanced hashing techniques',
    'GDPR, CCPA, and PIPEDA compliant by design',
    'Event-level consent management with configurable prompts',
    'Data minimization principles built into every collection point',
    'Automatic data expiration and deletion workflows'
  ];

  const technicalFeatures = [
    {
      title: 'Lightning Fast Integration',
      description: 'One-line SDK installation with zero configuration required',
      icon: <SpeedIcon sx={{ color: '#112a48', fontSize: 40 }} />
    },
    {
      title: 'Enterprise Security',
      description: 'Industry standard with end-to-end encryption',
      icon: <ShieldIcon sx={{ color: '#112a48', fontSize: 40 }} />
    },
    {
      title: 'Real-time Processing',
      description: 'Sub-100ms event processing with global edge network',
      icon: <TrendingUpIcon sx={{ color: '#112a48', fontSize: 40 }} />
    },
    {
      title: 'Advanced Analytics',
      description: 'ML + Agentic AI',
      icon: <InsightsIcon sx={{ color: '#112a48', fontSize: 40 }} />
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: '/mo',
      description: 'Ideal for startups & indie devs',
      features: [
        'Up to 25K events/month',
        'Basic signal clustering & intent dashboard',
        'Standard SDK + integration docs',
        'Community support',
        'Basic analytics dashboard'
      ],
      cta: 'Get Started',
      featured: false
    },
    {
      name: 'Pro',
      price: '$499',
      period: '/mo',
      yearlyPrice: '$5K',
      yearlyPeriod: '/year',
      description: 'Everything in Free, plus advanced features',
      features: [
        'Up to 1 million events/month',
        'Advanced ML pipeline',
        'Real-time segments & trend overlays',
        'Email support & standard SLA',
        'Access to usage-based ML API',
        'Custom dashboards',
        'API access'
      ],
      cta: 'Start Pro',
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '(starting at $4K/mo)',
      description: 'Everything in Pro, plus enterprise features',
      features: [
        'Unlimited events',
        'Private cloud or on-prem deployment',
        'Dedicated account manager',
        'Premium SLA, SOC2 compliance',
        'Custom integrations: CDP, DSP, ad servers',
        'Revenue share options for DOOH partners',
        'White-label solution',
        '24/7 premium support'
      ],
      cta: 'Contact Sales',
      featured: false
    }
  ];

  const addOnOptions = [
    {
      name: 'Usage-Based ML API',
      description: 'Pay-per-query or per-million events',
      details: 'Real-time scoring for deeper personalization'
    },
    {
      name: 'DOOH Revenue Share',
      description: 'Proven CPM uplift? We split the win with retail partners',
      details: 'Revenue sharing model for digital billboard partners'
    }
  ];

  const companyHighlights = [
    {
      title: 'AI-Powered Analytics',
      description: 'The most advanced cross surface privacy safe layer using ML + Agentic AI',
      icon: <AutoAwesomeIcon sx={{ color: '#112a48', fontSize: 40 }} />
    },
    {
      title: 'Privacy First',
      description: 'Our core mission is building privacy-safe infrastructure for real world intent',
      icon: <SecurityIcon sx={{ color: '#112a48', fontSize: 40 }} />
    },
    {
      title: 'Innovation Driven',
      description: 'Pushing the boundaries of what\'s possible in behavioral analytics',
      icon: <RocketIcon sx={{ color: '#112a48', fontSize: 40 }} />
    },
    {
      title: 'Enterprise Ready',
      description: 'Trusted by enterprise companies worldwide for mission-critical applications',
      icon: <StarsIcon sx={{ color: '#112a48', fontSize: 40 }} />
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
            Building Privacy Safe Infrastructure for Real World Intent
          </Typography>
          <Typography variant="h4" sx={{ mb: 6, opacity: 0.95, maxWidth: '900px', margin: '0 auto 48px auto' }}>
            Eventis Technologies revolutionizes behavioral analytics with our Anon SDK
          </Typography>
          <Button variant="contained" size="large" sx={{ mr: 2, mb: 2 }} onClick={() => window.open('mailto:team@oncabaret.com', '_blank')}>
            Get Started
          </Button>
          <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white', mb: 2 }}>
            Learn More
          </Button>
        </Container>
      </HeroSection>

      {/* Company Highlights */}
      <Box sx={{ backgroundColor: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8, fontWeight: 700, color: '#2c3e50' }}>
            Why Eventis Technologies?
          </Typography>
          
          <Grid container spacing={4}>
            {companyHighlights.map((highlight, index) => (
              <Grid item xs={12} md={6} key={index}>
                <FeatureCard>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {highlight.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* What is the Anon Intent Graph SDK */}
      <SectionContainer maxWidth="lg" id="product">
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700, color: '#2c3e50' }}>
          Introducing the Anon Intent Graph SDK
        </Typography>
        
        <DiagramBox>
          <Typography variant="h5" sx={{ mb: 4, color: '#112a48', fontWeight: 700 }}>
            Lightweight SDK • Cross-Platform • Privacy-First • Real-Time
          </Typography>
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <SmartphoneIcon sx={{ fontSize: 64, color: '#112a48', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>iOS & Android</Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>Native Swift/Kotlin + React Native support</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <WebIcon sx={{ fontSize: 64, color: '#112a48', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Web & JavaScript</Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>Vanilla JS, React, Vue, Angular compatible</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <TvIcon sx={{ fontSize: 64, color: '#112a48', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Digital Billboards</Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>Custom hardware integration APIs</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ color: '#495057', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Our SDK automatically captures behavioral events like clicks, hovers, swipes, zooms, page visits, scrolls, idle time, 
            tap-to-save, share, and dismiss actions. <strong>Zero PII collected</strong> — behavioral patterns power anonymous profiles 
            that respect user privacy while delivering actionable insights.
          </Typography>
        </DiagramBox>
      </SectionContainer>

      {/* Technical Features */}
      <Box sx={{ backgroundColor: 'white', py: 10 }} id="features">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8, fontWeight: 700, color: '#2c3e50' }}>
            Built for Developers, Designed for Scale
          </Typography>
          
          <Grid container spacing={4}>
            {technicalFeatures.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <FeatureCard>
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
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Data Signals Captured */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8, fontWeight: 700, color: '#2c3e50' }}>
            Data Signals Captured
          </Typography>
          
          <Grid container spacing={4}>
            {dataSignals.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <FeatureCard>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <Box sx={{ mr: 3, mt: 0.5 }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                          {item.signal}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center', p: 4, backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
            <Typography variant="h6" sx={{ color: '#112a48', fontWeight: 600, mb: 2 }}>
              Enhanced Intelligence Pipeline
            </Typography>
            <Typography variant="body1" sx={{ color: '#495057' }}>
              → Third-party data enrichment → Real-time ML processing → Behavioral clustering → Intent scoring
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Beyond Traditional Analytics */}
      <Box sx={{ backgroundColor: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8, fontWeight: 700, color: '#2c3e50' }}>
            Beyond Traditional User Analytics
          </Typography>
          
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 8, color: '#6c757d', maxWidth: '800px', margin: '0 auto 64px auto' }}>
            We create behavioral profiles that outperform industry standards by leveraging advanced ML + Agentic AI to understand real-world intent patterns
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <CardContent sx={{ p: 5, textAlign: 'center' }}>
                  <GroupsIcon sx={{ fontSize: 64, color: '#112a48', mb: 3 }} />
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
                    Crowd Analysis
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                    Real-time crowd behavior modeling that identifies group dynamics, flow patterns, and collective intent signals across physical and digital spaces
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <FeatureCard>
                <CardContent sx={{ p: 5, textAlign: 'center' }}>
                  <CalendarMonthIcon sx={{ fontSize: 64, color: '#112a48', mb: 3 }} />
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
                    Seasonality Intelligence
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                    Advanced temporal pattern recognition that predicts seasonal trends, event-driven behaviors, and cyclical user intent across multiple time horizons
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <FeatureCard>
                <CardContent sx={{ p: 5, textAlign: 'center' }}>
                  <AttachMoneyIcon sx={{ fontSize: 64, color: '#112a48', mb: 3 }} />
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
                    Dynamic Pricing
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                    AI-powered dynamic pricing for digital billboards based on real-time audience analysis, location context, and predictive demand modeling
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center', p: 6, backgroundColor: '#f8f9fa', borderRadius: '24px', border: '2px solid #112a48' }}>
            <Typography variant="h5" sx={{ color: '#112a48', fontWeight: 700, mb: 3 }}>
              Industry-Leading Performance
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#112a48', mb: 1 }}>
                  97%
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 600 }}>
                  Accuracy in behavioral prediction
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#112a48', mb: 1 }}>
                  3x
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 600 }}>
                  Better than traditional analytics
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#112a48', mb: 1 }}>
                  &lt;50ms
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 600 }}>
                  Real-time processing latency
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Use Cases by Platform */}
      <SectionContainer maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8, fontWeight: 700, color: '#2c3e50' }}>
          Use Cases by Platform
        </Typography>
        
        <TableContainer component={Paper} sx={{ borderRadius: '20px', boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)', overflow: 'hidden' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#112a48' }}>
                <TableCell sx={{ fontWeight: 700, fontSize: '16px', color: 'white', py: 3 }}>Platform</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '16px', color: 'white', py: 3 }}>Use Case</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '16px', color: 'white', py: 3 }}>Integration</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '16px', color: 'white', py: 3 }}>Typical ROI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {useCases.map((row, index) => (
                <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f8f9fa' }, '&:nth-of-type(even)': { backgroundColor: '#fafafa' } }}>
                  <TableCell sx={{ fontWeight: 600, py: 3, fontSize: '15px' }}>{row.platform}</TableCell>
                  <TableCell sx={{ py: 3, fontSize: '15px' }}>{row.useCase}</TableCell>
                  <TableCell sx={{ py: 3 }}>
                    <Chip 
                      label={row.integration} 
                      size="medium" 
                      sx={{ backgroundColor: '#e0f2f1', color: '#3a7580', fontWeight: 500 }}
                    />
                  </TableCell>
                  <TableCell sx={{ py: 3 }}>
                    <Chip 
                      label={row.roi} 
                      size="medium" 
                      sx={{ backgroundColor: '#e8f5e8', color: '#2e7d32', fontWeight: 500 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionContainer>

      {/* Pricing Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 10 }} id="pricing">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 3, fontWeight: 700, color: '#2c3e50' }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 8, color: '#6c757d', maxWidth: '700px', margin: '0 auto 64px auto' }}>
            Start free and scale as you grow. No hidden fees, transparent pricing. 
            Choose the plan that <strong style={{ color: '#112a48' }}>fits your needs</strong> and budget.
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PricingCard featured={plan.featured}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    {plan.name}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h2" component="span" sx={{ fontWeight: 800 }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="h6" component="span" sx={{ opacity: 0.8 }}>
                      {plan.period}
                    </Typography>
                    {plan.yearlyPrice && (
                      <Typography variant="body2" sx={{ opacity: 0.7, mt: 1, display: 'block' }}>
                        or {plan.yearlyPrice}{plan.yearlyPeriod}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, minHeight: '48px' }}>
                    {plan.description}
                  </Typography>
                  <List sx={{ mb: 4, textAlign: 'left' }}>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckIcon sx={{ color: plan.featured ? 'white' : '#4caf50', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{ 
                            fontSize: '14px',
                            color: plan.featured ? 'white' : 'inherit'
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant={plan.featured ? "outlined" : "contained"}
                    fullWidth
                    size="large"
                    href={plan.cta === 'Contact Sales' ? 'mailto:team@oncabaret.com' : plan.cta === 'Get Started' ? 'mailto:team@oncabaret.com' : plan.cta === 'Start Pro' ? 'mailto:team@oncabaret.com' : '#'}
                    sx={{
                      borderRadius: '12px',
                      py: 2,
                      fontWeight: 600,
                      backgroundColor: plan.featured ? 'transparent' : '#112a48',
                      borderColor: plan.featured ? 'white' : '#112a48',
                      color: plan.featured ? 'white' : 'white',
                      '&:hover': {
                        backgroundColor: plan.featured ? 'rgba(255,255,255,0.1)' : '#0d1f36'
                      }
                    }}
                  >
                    {plan.cta}
                  </Button>
                </PricingCard>
              </Grid>
            ))}
          </Grid>

          {/* Add-On Options */}
          <Box sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 600, color: '#2c3e50' }}>
              Add-On Options
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {addOnOptions.map((addon, index) => (
                <Grid item xs={12} md={5} key={index}>
                  <Card sx={{ 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', 
                    border: '2px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(17, 42, 72, 0.15)',
                      transform: 'translateY(-4px)'
                    }
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50', mb: 2 }}>
                        {addon.name}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#6c757d', mb: 2, lineHeight: 1.6 }}>
                        {addon.description}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#495057', fontStyle: 'italic' }}>
                        {addon.details}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: 8, textAlign: 'center', p: 4, backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
              Multi-Platform Discounts Available
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d' }}>
              Deploying across multiple surfaces? Bundle SDK licenses with ML API access for additional savings. 
              DOOH partners enjoy exclusive revenue sharing opportunities.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Privacy & Compliance */}
      <Box sx={{ backgroundColor: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8, fontWeight: 700, color: '#2c3e50' }}>
            Privacy & Compliance First
          </Typography>
          
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Card sx={{ borderRadius: '20px', boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)', overflow: 'hidden' }}>
                <CardContent sx={{ p: 6 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <SecurityIcon sx={{ fontSize: 80, color: '#4caf50' }} />
                  </Box>
                  <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 600, color: '#2c3e50' }}>
                    Built with Privacy by Design
                  </Typography>
                  <List>
                    {privacyFeatures.map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon>
                          <CheckIcon sx={{ color: '#4caf50', fontSize: 24 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '16px' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Getting Started */}
      <SectionContainer maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8, fontWeight: 700, color: '#2c3e50' }}>
          Getting Started
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FeatureCard>
              <CardContent sx={{ p: 5, textAlign: 'center' }}>
                <GitHubIcon sx={{ fontSize: 64, color: '#112a48', mb: 3 }} />
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
                  SDK Repository
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', mb: 4, lineHeight: 1.6 }}>
                  Access our comprehensive GitHub repository with complete documentation, sample implementations, 
                  and integration guides for all major platforms.
                </Typography>
                <Button 
                  variant="outlined" 
                  size="large"
                  href="https://github.com/oncabteam/anon"
                  target="_blank"
                  sx={{ 
                    borderRadius: '12px',
                    borderColor: '#112a48',
                    color: '#112a48',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#112a48',
                      color: 'white'
                    }
                  }}
                >
                  View Documentation
                </Button>
              </CardContent>
            </FeatureCard>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FeatureCard>
              <CardContent sx={{ p: 5, textAlign: 'center' }}>
                <CodeIcon sx={{ fontSize: 64, color: '#112a48', mb: 3 }} />
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
                  Quick Integration
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', mb: 4, lineHeight: 1.6 }}>
                  One-click install guides for React Native, iOS, Android, and JavaScript. 
                  Compatible with Amplitude, Segment, Mixpanel, and Google Analytics.
                </Typography>
                <Button 
                  variant="outlined" 
                  size="large"
                  href="mailto:team@oncabaret.com"
                  sx={{ 
                    borderRadius: '12px',
                    borderColor: '#112a48',
                    color: '#112a48',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#112a48',
                      color: 'white'
                    }
                  }}
                >
                  Get Support
                </Button>
              </CardContent>
            </FeatureCard>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Call to Action */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #112a48 0%, #3a7580 100%)',
        color: 'white',
        py: 12,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 4, fontWeight: 700 }}>
            Ready to Transform Your Analytics?
          </Typography>
          <Typography variant="h5" sx={{ mb: 8, opacity: 0.9, maxWidth: '700px', margin: '0 auto 64px auto' }}>
            Join forward-thinking companies using privacy-safe behavioral analytics to drive growth
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
            <PrimaryButton 
              size="large" 
              href="mailto:team@oncabaret.com"
              sx={{ 
                backgroundColor: 'white', 
                color: '#112a48',
                fontSize: '18px',
                py: 2,
                px: 4,
                '&:hover': { 
                  backgroundColor: '#f8f9fa',
                  transform: 'translateY(-3px)'
                }
              }}
            >
              Get Started
            </PrimaryButton>
            <SecondaryButton size="large" startIcon={<DownloadIcon />} href="https://github.com/oncabteam/anon" target="_blank" sx={{ fontSize: '18px', py: 2, px: 4 }}>
              Download SDK
            </SecondaryButton>
            <SecondaryButton size="large" href="mailto:team@oncabaret.com" sx={{ fontSize: '18px', py: 2, px: 4 }}>
              Schedule Demo
            </SecondaryButton>
          </Box>

          <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', gap: 6, flexWrap: 'wrap', opacity: 0.8 }}>
            <Typography variant="body2">✓ Flexible pricing models</Typography>
            <Typography variant="body2">✓ Multi-platform support</Typography>
            <Typography variant="body2">✓ Setup in under 5 minutes</Typography>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default Homepage; 