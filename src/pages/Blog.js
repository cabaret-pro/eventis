import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
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
    title: 'Preparing for the Post-Cookie and PII Tracking World: A Strategic Guide for Modern Businesses',
    excerpt: 'As third-party cookies phase out and PII tracking faces increasing restrictions, discover how behavioral analytics offers a privacy-safe alternative that delivers superior insights. Learn the strategies top companies are using to future-proof their analytics stack.',
    category: 'Privacy Strategy',
    readTime: '12 min read',
    date: 'January 2025',
    image: '/api/placeholder/600/300',
    keywords: 'post-cookie analytics, PII tracking alternatives, privacy-safe analytics, behavioral intelligence, third-party cookies, GDPR compliance'
  };

  const blogPosts = [
    {
      title: 'What Are User Behavior Profiles and How Are They Better Than ID Tracking?',
      excerpt: 'Discover why user behavior profiles represent the future of digital analytics. Unlike traditional ID tracking, behavioral profiles capture intent patterns without compromising privacy, delivering 40% better conversion rates and complete GDPR compliance.',
      category: 'Behavioral Analytics',
      readTime: '10 min read',
      date: 'January 2025',
      icon: <PsychologyIcon sx={{ fontSize: 24, color: '#112a48' }} />,
      keywords: 'user behavior profiles, behavioral analytics, ID tracking alternatives, privacy-safe tracking, behavioral intelligence, user intent modeling',
      route: '/blog/user-behavior-profiles-vs-id-tracking'
    },
    {
      title: 'DOOH Opportunities for Optimized Analytics: Transforming Digital Billboard ROI',
      excerpt: 'Digital Out-of-Home (DOOH) advertising is experiencing a revolution through real-time behavioral analytics. Learn how location-based behavioral insights, crowd analysis, and dynamic pricing are delivering 3x better ad relevance and proven CPM uplift.',
      category: 'DOOH Analytics',
      readTime: '8 min read',
      date: 'January 2025',
      icon: <TrendingIcon sx={{ fontSize: 24, color: '#112a48' }} />,
      keywords: 'DOOH analytics, digital billboard optimization, location-based analytics, crowd behavior analysis, dynamic pricing, digital out-of-home advertising',
      route: '/blog/dooh-opportunities'
    },
    {
      title: 'The Future of Privacy-Safe Analytics: ML + Agentic AI Revolution',
      excerpt: 'How machine learning and agentic AI are creating a new paradigm in behavioral analytics. Achieve 97% accuracy in behavioral prediction while maintaining zero PII collection and complete privacy compliance.',
      category: 'AI Technology',
      readTime: '9 min read',
      date: 'December 2024',
      icon: <SecurityIcon sx={{ fontSize: 24, color: '#112a48' }} />,
      keywords: 'privacy-safe analytics, machine learning analytics, agentic AI, behavioral prediction, zero PII collection, privacy compliance',
      route: null
    },
    {
      title: 'Enterprise Analytics Migration: From Traditional to Privacy-Safe Solutions',
      excerpt: 'A comprehensive guide for enterprises transitioning from traditional analytics platforms to privacy-safe alternatives. Includes migration strategies, compliance considerations, and ROI optimization techniques.',
      category: 'Enterprise Strategy',
      readTime: '11 min read',
      date: 'December 2024',
      icon: <ArticleIcon sx={{ fontSize: 24, color: '#112a48' }} />,
      keywords: 'enterprise analytics migration, privacy-safe analytics, analytics platform transition, compliance migration, enterprise privacy strategy',
      route: null
    },
    {
      title: 'Real-Time Behavioral Segmentation: Advanced ML Pipeline Architecture',
      excerpt: 'Deep dive into the technical architecture powering real-time behavioral segmentation. Learn how advanced ML pipelines process millions of events with &lt;50ms latency while maintaining privacy compliance.',
      category: 'Technical Architecture',
      readTime: '13 min read',
      date: 'November 2024',
      icon: <TrendingIcon sx={{ fontSize: 24, color: '#112a48' }} />,
      keywords: 'real-time segmentation, ML pipeline architecture, behavioral segmentation, real-time analytics, machine learning infrastructure',
      route: null
    },
    {
      title: 'Cross-Platform Analytics: Unified Behavioral Intelligence Across Surfaces',
      excerpt: 'How to achieve unified behavioral intelligence across mobile apps, websites, and digital billboards. Explore cross-platform tracking strategies that respect user privacy while delivering comprehensive insights.',
      category: 'Cross-Platform',
      readTime: '7 min read',
      date: 'November 2024',
      icon: <PsychologyIcon sx={{ fontSize: 24, color: '#112a48' }} />,
      keywords: 'cross-platform analytics, unified behavioral intelligence, multi-surface tracking, mobile analytics, web analytics, digital billboard analytics',
      route: null
    }
  ];

  const categories = ['All', 'Privacy Strategy', 'Behavioral Analytics', 'DOOH Analytics', 'AI Technology', 'Enterprise Strategy', 'Technical Architecture', 'Cross-Platform'];

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
                    component={Link}
                    to="/blog/preparing-for-post-cookie-world"
                    variant="contained"
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
                    
                    {post.route ? (
                      <Button
                        component={Link}
                        to={post.route}
                        variant="outlined"
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
                    ) : (
                      <Button
                        variant="outlined"
                        disabled
                        sx={{
                          borderColor: '#ccc',
                          color: '#999',
                          cursor: 'not-allowed'
                        }}
                      >
                        Coming Soon
                      </Button>
                    )}
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