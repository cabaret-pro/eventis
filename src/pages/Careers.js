import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { Work as WorkIcon, LocationOn as LocationIcon, School as SchoolIcon, Psychology as PsychologyIcon } from '@mui/icons-material';

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

const JobCard = styled(Card)(() => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)',
  border: '1px solid rgba(17, 42, 72, 0.08)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  }
}));

const BenefitCard = styled(Card)(() => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(17, 42, 72, 0.08)',
  border: '1px solid rgba(17, 42, 72, 0.08)',
}));

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior AI/ML Engineer',
      department: 'Engineering',
      location: 'NYC / Remote',
      type: 'Full-time',
      description: 'Lead the development of our ML + agentic AI behavioral analytics platform',
      requirements: ['5+ years ML/AI experience', 'Python/TensorFlow expertise', 'Privacy-preserving ML knowledge']
    },
    {
      title: 'Privacy Engineer',
      department: 'Engineering',
      location: 'NYC / Remote',
      type: 'Full-time',
      description: 'Ensure our privacy-first architecture meets the highest standards',
      requirements: ['Privacy engineering experience', 'GDPR/CCPA expertise', 'Cryptography knowledge']
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'NYC / Remote',
      type: 'Full-time',
      description: 'Build beautiful, intuitive interfaces for our analytics platform',
      requirements: ['React/TypeScript expert', '3+ years experience', 'Design system experience']
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'NYC',
      type: 'Full-time',
      description: 'Drive enterprise adoption of our privacy-safe analytics platform',
      requirements: ['Technical sales experience', 'Analytics background', 'Enterprise software sales']
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary & Equity',
      description: 'Industry-leading compensation with meaningful equity stake',
      icon: <WorkIcon sx={{ fontSize: 40, color: '#112a48' }} />
    },
    {
      title: 'NYC Office + Remote',
      description: 'Beautiful NYC office with full remote flexibility',
      icon: <LocationIcon sx={{ fontSize: 40, color: '#112a48' }} />
    },
    {
      title: 'Learning & Development',
      description: 'Conference attendance, courses, and continuous learning budget',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#112a48' }} />
    },
    {
      title: 'Privacy-First Mission',
      description: 'Work on technology that makes a positive impact on user privacy',
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#112a48' }} />
    }
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <ContentPaper>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4, color: '#2c3e50', textAlign: 'center' }}>
            Join the Privacy Revolution
          </Typography>
          
          <Typography variant="h5" sx={{ mb: 8, color: '#6c757d', textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
            Help us build the future of privacy-safe behavioral analytics. Work with cutting-edge AI technology while making a positive impact on user privacy.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Why Work at Eventis?
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, fontSize: '18px' }}>
            At Eventis Technologies, you'll be at the forefront of the privacy-first analytics revolution. We're building technology 
            that will define how businesses understand user behavior while respecting privacy rights. Join a team of world-class 
            engineers, designers, and privacy experts who are passionate about creating technology that benefits both businesses and users.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <BenefitCard>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {benefit.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </BenefitCard>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 6, color: '#112a48' }}>
            Open Positions
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {openPositions.map((job, index) => (
              <Grid item xs={12} md={6} key={index}>
                <JobCard>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                        {job.title}
                      </Typography>
                      <Chip 
                        label={job.type} 
                        size="small" 
                        sx={{ backgroundColor: '#e0f2f1', color: '#3a7580', fontWeight: 500 }}
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                      <Chip 
                        label={job.department} 
                        size="small" 
                        sx={{ backgroundColor: '#f3e5f5', color: '#7b1fa2' }}
                      />
                      <Chip 
                        label={job.location} 
                        size="small" 
                        sx={{ backgroundColor: '#e8f5e8', color: '#2e7d32' }}
                      />
                    </Box>

                    <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6, mb: 3 }}>
                      {job.description}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
                      Key Requirements:
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {job.requirements.map((req, idx) => (
                        <Typography key={idx} variant="body2" sx={{ color: '#6c757d', mb: 0.5 }}>
                          • {req}
                        </Typography>
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      href="mailto:team@oncabaret.com?subject=Application for Senior AI/ML Engineer"
                      sx={{
                        backgroundColor: '#112a48',
                        '&:hover': {
                          backgroundColor: '#0d1f36'
                        }
                      }}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </JobCard>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#112a48' }}>
            Our Culture
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6, fontSize: '18px' }}>
            We believe in building a diverse, inclusive team where everyone can do their best work. Our culture is built on:
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
                Innovation & Learning
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                We encourage experimentation, continuous learning, and pushing the boundaries of what's possible.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
                Transparency & Trust
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Open communication, honest feedback, and building trust through transparency in everything we do.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
                Impact & Purpose
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Every team member contributes to our mission of building privacy-safe infrastructure for the future.
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', p: 6, backgroundColor: '#112a48', borderRadius: '16px', color: 'white' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
              Don't See Your Role?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to the privacy revolution.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="mailto:team@oncabaret.com?subject=General Application"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white'
                }
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </ContentPaper>
      </Container>
    </PageContainer>
  );
};

export default Careers; 