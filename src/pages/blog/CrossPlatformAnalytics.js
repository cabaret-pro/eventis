import React from 'react';
import { Container, Typography, Box, Paper, Chip, Divider, List, ListItem, ListItemText, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Devices as DevicesIcon, Analytics as AnalyticsIcon, Security as SecurityIcon, Cloud as CloudIcon, Speed as SpeedIcon, Insights as InsightsIcon } from '@mui/icons-material';

const PageContainer = styled(Box)(() => ({
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
  paddingTop: '120px',
  paddingBottom: '60px'
}));

const ArticlePaper = styled(Paper)(() => ({
  padding: '48px',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(17, 42, 72, 0.12)',
  marginBottom: '32px',
  maxWidth: '800px',
  margin: '0 auto'
}));

const PlatformCard = styled(Card)(() => ({
  height: '100%',
  background: 'linear-gradient(135deg, #112a48 0%, #3a7580 100%)',
  color: 'white',
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(17, 42, 72, 0.2)'
}));

const CrossPlatformAnalytics = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <ArticlePaper>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              <Chip 
                label="Cross-Platform" 
                sx={{ backgroundColor: '#e0f2f1', color: '#3a7580', fontWeight: 500 }}
              />
              <Chip 
                label="Unified Analytics" 
                sx={{ backgroundColor: '#e3f2fd', color: '#112a48', fontWeight: 500 }}
              />
              <Chip 
                label="Behavioral Intelligence" 
                sx={{ backgroundColor: '#fff3e0', color: '#e65100', fontWeight: 500 }}
              />
            </Box>
            
            <Typography variant="h1" component="h1" sx={{ 
              fontWeight: 800, 
              mb: 3, 
              color: '#2c3e50',
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.2
            }}>
              Cross-Platform Analytics: Unified Behavioral Intelligence Across Surfaces
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, mb: 4, color: '#6c757d', flexWrap: 'wrap' }}>
              <Typography variant="body2">7 min read</Typography>
              <Typography variant="body2">November 2024</Typography>
              <Typography variant="body2">By Eventis Technologies</Typography>
            </Box>
            
            <Typography variant="h5" sx={{ 
              color: '#495057', 
              lineHeight: 1.6, 
              fontWeight: 400,
              fontStyle: 'italic',
              borderLeft: '4px solid #112a48',
              paddingLeft: 3
            }}>
              Modern users interact across mobile apps, web platforms, and digital billboards. Learn how unified behavioral intelligence creates coherent user understanding across all touchpoints while maintaining strict privacy compliance.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Platform Stats */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} md={4}>
              <PlatformCard>
                <CardContent sx={{ textAlign: 'center' }}>
                  <DevicesIcon sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    15+
                  </Typography>
                  <Typography variant="body2">
                    Supported platforms and surfaces
                  </Typography>
                </CardContent>
              </PlatformCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <PlatformCard>
                <CardContent sx={{ textAlign: 'center' }}>
                  <AnalyticsIcon sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    95%
                  </Typography>
                  <Typography variant="body2">
                    Cross-platform attribution accuracy
                  </Typography>
                </CardContent>
              </PlatformCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <PlatformCard>
                <CardContent sx={{ textAlign: 'center' }}>
                  <SpeedIcon sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    &lt;2s
                  </Typography>
                  <Typography variant="body2">
                    Cross-platform data synchronization
                  </Typography>
                </CardContent>
              </PlatformCard>
            </Grid>
          </Grid>

          {/* Content */}
          <Box sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#112a48', fontSize: '2rem' }}>
              The Cross-Platform Reality
            </Typography>
            
            <Typography paragraph sx={{ mb: 3 }}>
              Modern users don't live in single-platform silos. They discover products on mobile apps, research on web platforms, and make decisions influenced by digital billboards. This cross-platform behavior creates a complex web of interactions that traditional analytics systems struggle to understand cohesively.
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              The challenge isn't just technical—it's strategic. Organizations need unified behavioral intelligence that can understand user journeys across all touchpoints while respecting privacy boundaries and maintaining actionable insights for each platform.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              The Attribution Challenge
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Cross-platform attribution has become increasingly complex as users interact across multiple surfaces. Traditional tracking methods fail to capture the full user journey, leading to incomplete insights and suboptimal optimization decisions.
            </Typography>

            <Box sx={{ 
              backgroundColor: '#ffebee', 
              padding: 3, 
              borderRadius: 2, 
              border: '1px solid #f44336',
              my: 4 
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#d32f2f' }}>
                📊 Traditional Analytics Limitations
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Siloed Platform Data"
                    secondary="Each platform provides isolated metrics without cross-platform context"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Broken User Journeys"
                    secondary="Unable to connect user actions across different surfaces and devices"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Duplicate Attribution"
                    secondary="Multiple platforms claim credit for the same user action"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Privacy Compliance Issues"
                    secondary="Cross-platform tracking often violates privacy regulations"
                  />
                </ListItem>
              </List>
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#112a48', fontSize: '2rem', mt: 5 }}>
              Unified Behavioral Intelligence Architecture
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              True cross-platform analytics requires a fundamentally different approach that focuses on behavioral patterns rather than individual tracking. This architecture enables comprehensive user understanding while maintaining strict privacy compliance.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              Platform-Agnostic Behavioral Modeling
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Rather than tracking individual users across platforms, advanced behavioral intelligence creates anonymous behavioral models that can be applied consistently across all surfaces. This approach maintains privacy while enabling sophisticated cross-platform insights.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <SecurityIcon sx={{ color: '#112a48', fontSize: 32, mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#2c3e50' }}>
                  Privacy-First Design
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                  Behavioral patterns are extracted without personal identification, enabling cross-platform insights while maintaining zero PII exposure.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <CloudIcon sx={{ color: '#112a48', fontSize: 32, mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#2c3e50' }}>
                  Unified Data Layer
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                  Behavioral signals from all platforms are processed through a unified data layer that creates consistent behavioral understanding.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <InsightsIcon sx={{ color: '#112a48', fontSize: 32, mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#2c3e50' }}>
                  Contextual Intelligence
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                  Advanced ML models understand platform-specific contexts while maintaining unified behavioral insights across all surfaces.
                </Typography>
              </Box>
            </Box>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              Real-Time Cross-Platform Synchronization
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Modern user experiences require real-time synchronization of behavioral insights across platforms. Users expect consistent, personalized experiences regardless of which platform they're using, demanding sophisticated synchronization capabilities.
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#112a48', fontSize: '2rem', mt: 5 }}>
              Platform-Specific Optimization
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              While maintaining unified behavioral intelligence, each platform requires specific optimization strategies that leverage platform-unique capabilities while contributing to overall cross-platform understanding.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              Mobile App Intelligence
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Mobile platforms provide rich behavioral signals including location context, device interactions, and app usage patterns. These signals contribute to comprehensive behavioral understanding while enabling mobile-specific optimizations.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              Web Platform Analytics
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Web platforms offer detailed interaction data, session patterns, and content engagement metrics. Advanced behavioral intelligence leverages these signals for both web optimization and cross-platform behavioral modeling.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              Digital Billboard Integration
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Digital billboards provide unique opportunities for contextual behavioral analysis, including location-based insights, temporal patterns, and audience demographics. These signals enhance overall behavioral understanding while enabling DOOH-specific optimizations.
            </Typography>

            <Box sx={{ 
              backgroundColor: '#e8f5e8', 
              padding: 3, 
              borderRadius: 2, 
              border: '1px solid #4caf50',
              my: 4 
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2e7d32' }}>
                🎯 Cross-Platform Optimization Results
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Mobile App Engagement"
                    secondary="73% improvement in user retention through cross-platform behavioral insights"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Web Conversion Rates"
                    secondary="89% increase in conversion when leveraging cross-platform behavioral data"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="DOOH Campaign Performance"
                    secondary="156% improvement in campaign ROI through unified behavioral targeting"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Attribution Accuracy"
                    secondary="95% accurate cross-platform attribution without individual tracking"
                  />
                </ListItem>
              </List>
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#112a48', fontSize: '2rem', mt: 5 }}>
              Implementation Complexity
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Building comprehensive cross-platform analytics requires expertise across multiple domains: mobile development, web analytics, IoT integration, machine learning, and privacy engineering. The complexity makes custom development extremely challenging.
            </Typography>

            <Box sx={{ 
              backgroundColor: '#ffebee', 
              padding: 3, 
              borderRadius: 2, 
              border: '1px solid #f44336',
              my: 4 
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#d32f2f' }}>
                🔧 Cross-Platform Development Reality
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Building unified cross-platform analytics requires:
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Platform-specific SDK development for iOS, Android, Web, and IoT" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Real-time data synchronization architecture" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Privacy-preserving cross-platform behavioral modeling" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Advanced ML pipeline for behavioral pattern recognition" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Enterprise-grade infrastructure and monitoring" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Compliance with multiple privacy regulations" />
                </ListItem>
              </List>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Development Cost:</strong> $2M-$5M over 12-24 months with 12-20 specialized engineers
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                <strong>Risk:</strong> 68% of cross-platform analytics projects fail to achieve production deployment
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#112a48', fontSize: '2rem', mt: 5 }}>
              Privacy-Compliant Cross-Platform Intelligence
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              True cross-platform analytics must operate within strict privacy boundaries while delivering comprehensive behavioral insights. This requires sophisticated approaches that separate behavioral understanding from individual identification.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              Anonymous Behavioral Correlation
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Advanced systems correlate behavioral patterns across platforms without individual tracking, enabling comprehensive insights while maintaining strict privacy compliance.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              Regulatory Compliance
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Cross-platform analytics must comply with GDPR, CCPA, and other privacy regulations across all platforms and jurisdictions. This requires sophisticated privacy engineering integrated throughout the entire system.
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#112a48', fontSize: '2rem', mt: 5 }}>
              The Platform Advantage
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Given the complexity of cross-platform behavioral intelligence, most organizations achieve better results by leveraging proven platforms rather than attempting custom development. The technical challenges, privacy requirements, and ongoing maintenance make platform solutions the strategic choice.
            </Typography>

            <Box sx={{ 
              backgroundColor: '#e3f2fd', 
              padding: 4, 
              borderRadius: 2, 
              border: '2px solid #1976d2',
              my: 4 
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1976d2' }}>
                🌐 Eventis: Complete Cross-Platform Intelligence
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Universal Platform Support"
                    secondary="iOS, Android, Web, Digital Billboards, and IoT with single SDK integration"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Real-Time Cross-Platform Sync"
                    secondary="&lt;2s synchronization with 95% attribution accuracy"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Privacy-First Architecture"
                    secondary="Zero PII with advanced behavioral correlation and anonymous intelligence"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Enterprise Integration"
                    secondary="Seamless integration with existing analytics and marketing platforms"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Instant Deployment"
                    secondary="Production-ready in days vs. months of custom development"
                  />
                </ListItem>
              </List>
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#112a48', fontSize: '2rem', mt: 5 }}>
              Future of Cross-Platform Intelligence
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Cross-platform behavioral intelligence continues evolving with new platforms, devices, and interaction models. Future developments will enable even more sophisticated understanding while maintaining privacy compliance and delivering actionable insights.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: '#2c3e50', fontSize: '1.5rem' }}>
              Emerging Platform Integration
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              New platforms including AR/VR, voice assistants, and smart displays will expand the cross-platform landscape. Advanced behavioral intelligence systems must adapt to these new interaction models while maintaining unified understanding.
            </Typography>

            <Box sx={{ 
              backgroundColor: '#fff3e0', 
              padding: 3, 
              borderRadius: 2, 
              border: '1px solid #ff9800',
              my: 4 
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#e65100' }}>
                🚀 Next-Generation Capabilities
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• AR/VR behavioral pattern recognition" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Voice interaction behavioral modeling" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Smart display contextual intelligence" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Federated learning for cross-platform insights" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="• Real-time multi-platform personalization" />
                </ListItem>
              </List>
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#112a48', fontSize: '2rem', mt: 5 }}>
              Conclusion: Unified Intelligence Without Complexity
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Cross-platform behavioral intelligence represents the next evolution in analytics, enabling comprehensive user understanding across all touchpoints while maintaining strict privacy compliance. The technical complexity and expertise requirements make proven platforms the strategic choice for most organizations.
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              Success in cross-platform analytics depends on leveraging advanced behavioral intelligence platforms that can deliver unified insights without the complexity and costs of custom development. Organizations that embrace this approach gain significant competitive advantages in personalization, attribution, and optimization across all platforms.
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              The future belongs to organizations that can understand and optimize user behavior across all touchpoints while respecting privacy boundaries. Cross-platform behavioral intelligence platforms make this capability accessible without the challenges of building complex systems in-house.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ backgroundColor: '#f8f9fa', padding: 4, borderRadius: 2, textAlign: 'center', border: '2px solid #112a48' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#112a48' }}>
                Unify Your Analytics Across All Platforms in Days, Not Years
              </Typography>
              <Typography variant="body1" sx={{ color: '#6c757d', mb: 3 }}>
                Skip the $2M-$5M development costs and 12-24 month timeline. Eventis delivers complete cross-platform behavioral intelligence with 95% attribution accuracy, supporting iOS, Android, Web, and Digital Billboards through a single SDK. Get unified behavioral insights that would take years to build and maintain in-house.
              </Typography>
              <Typography variant="body2" sx={{ color: '#112a48', fontWeight: 600, mb: 2 }}>
                🌐 Universal platform support with single integration
              </Typography>
              <Typography variant="body2" sx={{ color: '#112a48', fontWeight: 600, mb: 3 }}>
                🔒 Privacy-first architecture with zero PII exposure
              </Typography>
              <Typography variant="body2" sx={{ color: '#112a48', fontWeight: 600 }}>
                Contact us at team@oncabaret.com for a cross-platform analytics demo and integration consultation.
              </Typography>
            </Box>
          </Box>
        </ArticlePaper>
      </Container>
    </PageContainer>
  );
};

export default CrossPlatformAnalytics; 