import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { Article as ArticleIcon, TrendingUp as TrendingIcon, Psychology as PsychologyIcon, Security as SecurityIcon } from '@mui/icons-material';

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

const BlogCard = styled(Card)(() => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)',
  border: '1px solid rgba(17, 42, 72, 0.08)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    cursor: 'pointer'
  }
}));

const FeaturedCard = styled(Card)(() => ({
  borderRadius: '20px',
  boxShadow: '0 12px 40px rgba(17, 42, 72, 0.15)',
  border: '2px solid #112a48',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    cursor: 'pointer'
  }
}));

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Privacy-Safe Analytics: How ML + Agentic AI is Revolutionizing User Understanding',
    excerpt: 'Discover how our breakthrough approach to behavioral analytics delivers unprecedented insights while maintaining complete user privacy.',
    category: 'Technology',
    readTime: '8 min read',
    date: 'December 2024',
    image: '/api/placeholder/600/300'
  };

  const blogPosts = [
    {
      title: 'Beyond Traditional Analytics: The Rise of Behavioral Intelligence',
      excerpt: 'Traditional analytics platforms are failing businesses and users alike. Here\'s how behavioral intelligence changes everything.',
      category: 'Analytics',
      readTime: '5 min read',
      date: 'November 2024',
      icon: <TrendingIcon sx={{ fontSize: 24, color: '#112a48' }} />
    },
    {
      title: 'Privacy by Design: Building Trust in the Age of Data',
      excerpt: 'Why privacy-by-design isn\'t just a compliance requirement—it\'s a competitive advantage that builds lasting customer trust.',
      category: 'Privacy',
      readTime: '6 min read',
      date: 'November 2024',
      icon: <SecurityIcon sx={{ fontSize: 24, color: '#112a48' }} />
    },
    {
      title: 'Crowd Analysis and Dynamic Pricing: The AI Revolution in Digital Advertising',
      excerpt: 'How real-time crowd behavior analysis is transforming digital billboard advertising with AI-powered dynamic pricing.',
      category: 'AI',
      readTime: '7 min read',
      date: 'October 2024',
      icon: <PsychologyIcon sx={{ fontSize: 24, color: '#112a48' }} />
    },
    {
      title: 'GDPR, CCPA, and Beyond: Navigating the Global Privacy Landscape',
      excerpt: 'A comprehensive guide to privacy regulations and how businesses can stay compliant while leveraging user data.',
      category: 'Compliance',
      readTime: '9 min read',
      date: 'October 2024',
      icon: <SecurityIcon sx={{ fontSize: 24, color: '#112a48' }} />
    },
    {
      title: 'Seasonality Intelligence: Predicting User Behavior Across Time',
      excerpt: 'How advanced temporal pattern recognition helps businesses anticipate and respond to seasonal behavior changes.',
      category: 'Technology',
      readTime: '6 min read',
      date: 'September 2024',
      icon: <TrendingIcon sx={{ fontSize: 24, color: '#112a48' }} />
    },
    {
      title: 'The ROI of Privacy-Safe Analytics: Why Businesses Are Making the Switch',
      excerpt: 'Real-world case studies showing how privacy-first analytics delivers better results than traditional tracking.',
      category: 'Business',
      readTime: '8 min read',
      date: 'September 2024',
      icon: <ArticleIcon sx={{ fontSize: 24, color: '#112a48' }} />
    }
  ];

  const categories = ['All', 'Technology', 'Privacy', 'Analytics', 'AI', 'Business', 'Compliance'];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <ContentPaper>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4, color: '#2c3e50', textAlign: 'center' }}>
            Insights & Perspectives
          </Typography>
          
          <Typography variant="h5" sx={{ mb: 8, color: '#6c757d', textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
            Explore the latest insights on privacy-safe analytics, AI innovation, and the future of behavioral understanding
          </Typography>

          {/* Featured Post */}
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: '#112a48' }}>
            Featured Article
          </Typography>

          <FeaturedCard sx={{ mb: 8 }}>
            <Grid container>
              <Grid item xs={12} md={5}>
                <Box 
                  sx={{ 
                    height: { xs: 200, md: 300 }, 
                    background: 'linear-gradient(135deg, #112a48 0%, #3a7580 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: { xs: '20px 20px 0 0', md: '20px 0 0 20px' }
                  }}
                >
                  <ArticleIcon sx={{ fontSize: 80, color: 'white', opacity: 0.8 }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Chip 
                      label={featuredPost.category} 
                      size="small" 
                      sx={{ backgroundColor: '#e0f2f1', color: '#3a7580', fontWeight: 500 }}
                    />
                    <Typography variant="body2" sx={{ color: '#6c757d' }}>
                      {featuredPost.readTime} • {featuredPost.date}
                    </Typography>
                  </Box>
                  
                  <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50' }}>
                    {featuredPost.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6, mb: 4, flex: 1 }}>
                    {featuredPost.excerpt}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    href="mailto:team@oncabaret.com?subject=Blog Article Request"
                    sx={{
                      backgroundColor: '#112a48',
                      alignSelf: 'flex-start',
                      '&:hover': {
                        backgroundColor: '#0d1f36'
                      }
                    }}
                  >
                    Read Full Article
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </FeaturedCard>

          {/* Categories Filter */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: '#112a48' }}>
              Browse by Category
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map((category, index) => (
                <Chip
                  key={index}
                  label={category}
                  clickable
                  sx={{
                    backgroundColor: index === 0 ? '#112a48' : 'transparent',
                    color: index === 0 ? 'white' : '#112a48',
                    border: '1px solid #112a48',
                    '&:hover': {
                      backgroundColor: '#112a48',
                      color: 'white'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Blog Posts Grid */}
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 6, color: '#112a48' }}>
            Latest Articles
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={6} key={index}>
                <BlogCard>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      {post.icon}
                      <Box>
                        <Chip 
                          label={post.category} 
                          size="small" 
                          sx={{ backgroundColor: '#f3e5f5', color: '#7b1fa2', mb: 1 }}
                        />
                        <Typography variant="body2" sx={{ color: '#6c757d' }}>
                          {post.readTime} • {post.date}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                      {post.title}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ color: '#6c757d', lineHeight: 1.6, mb: 3 }}>
                      {post.excerpt}
                    </Typography>
                    
                    <Button
                      variant="outlined"
                      href="mailto:team@oncabaret.com?subject=Blog Article Request"
                      sx={{
                        borderColor: '#112a48',
                        color: '#112a48',
                        '&:hover': {
                          backgroundColor: '#112a48',
                          color: 'white'
                        }
                      }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </BlogCard>
              </Grid>
            ))}
          </Grid>

          {/* Newsletter Signup */}
          <Box sx={{ textAlign: 'center', p: 6, backgroundColor: '#112a48', borderRadius: '20px', color: 'white' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
              Stay Updated
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', margin: '0 auto 32px auto' }}>
              Get the latest insights on privacy-safe analytics, AI innovation, and industry trends delivered to your inbox.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="mailto:team@oncabaret.com?subject=Newsletter Subscription"
              sx={{
                color: 'white',
                borderColor: 'white',
                borderRadius: '25px',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white'
                }
              }}
            >
              Subscribe to Newsletter
            </Button>
          </Box>

          {/* Coming Soon Notice */}
          <Box sx={{ mt: 6, textAlign: 'center', p: 4, backgroundColor: '#f8f9fa', borderRadius: '16px', border: '1px solid #e9ecef' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
              More Content Coming Soon
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d' }}>
              We're actively publishing new content about privacy-safe analytics, AI innovation, and industry insights. 
              Contact us at <strong>team@oncabaret.com</strong> for specific topics you'd like us to cover.
            </Typography>
          </Box>
        </ContentPaper>
      </Container>
    </PageContainer>
  );
};

export default Blog; 