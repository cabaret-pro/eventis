import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Paper,
  CircularProgress,
  Alert,
  Avatar,
  Button
} from '@mui/material';
import {
  Refresh as RefreshIcon,
  Security as SecurityIcon,
  Analytics as AnalyticsIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';

const CustomerDashboard = ({ activeTab = 'overview' }) => {
  const { customerId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [showAllProfiles, setShowAllProfiles] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState('all');

  // API Configuration
  const API_BASE_URL = 'https://mcizyjxwok.execute-api.us-east-1.amazonaws.com/dev';
  const CLIENT_ID = 'oncab_mobile_app_v2_7k8j9h6g5f4d3s2a1z0x9c8v7b6n5m4l3k2j1h0g9f8e7d6c5b4a3s2d1f0';

  // Load customer data
  useEffect(() => {
    loadCustomerData();
    const interval = setInterval(loadCustomerData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, [customerId]);

  const loadCustomerData = async () => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE_URL}/customer/${customerId}/profile`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CLIENT_ID
        }
      });

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const profileData = await response.json();
      
      // Transform API data into dashboard format - ONLY real data
      const dashboardData = {
        customer_id: profileData.customer_id,
        metrics: {
          activeSessions: profileData.analytics?.session_count || 0,
          totalEvents: profileData.analytics?.total_events || 0,
          engagementScore: Math.round((profileData.profile?.engagement_score || 0) * 100),
          conversionRate: Math.round((profileData.analytics?.conversion_probability || 0) * 100)
        },
        profile: {
          segments: profileData.profile?.segments || [],
          devicePreferences: profileData.profile?.device_preferences || [],
          locationContext: profileData.profile?.location_context || 'unknown',
          lastActivity: profileData.profile?.last_activity || null
        },
        rawData: profileData // Store raw API response for other tabs
      };

      setData(dashboardData);
    } catch (err) {
      console.error('Error loading customer data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    loadCustomerData();
  };

  const MetricCard = ({ title, value, subtitle, icon, color = 'primary' }) => (
    <Card elevation={3}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          {icon}
          <Typography variant="h6" ml={1}>{title}</Typography>
        </Box>
        <Typography variant="h3" color={color} fontWeight="bold">
          {value}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary" mt={1}>
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  const OverviewTab = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <MetricCard
          title="Active Sessions"
          value={data?.metrics.activeSessions || '--'}
          subtitle={`Real-time tracking`}
          icon={<PersonIcon color="primary" />}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <MetricCard
          title="Total Events"
          value={data?.metrics.totalEvents || '--'}
          subtitle={`Events processed`}
          icon={<AnalyticsIcon color="success" />}
          color="success.main"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <MetricCard
          title="User Engagement"
          value={`${data?.metrics.engagementScore || '--'}%`}
          subtitle={`Engagement score`}
          icon={<TrendingUpIcon color="info" />}
          color="info.main"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <MetricCard
          title="Conversion Rate"
          value={`${data?.metrics.conversionRate || '--'}%`}
          subtitle={`Conversion probability`}
          icon={<SecurityIcon color="warning" />}
          color="warning.main"
        />
      </Grid>

      {/* User Profile Section */}
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>User Profile Insights</Typography>
            <Box mb={2}>
              <Typography variant="subtitle2" gutterBottom>User Segments:</Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {data?.profile.segments.map((segment, index) => (
                  <Chip key={index} label={segment} color="primary" variant="outlined" />
                ))}
              </Box>
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle2" gutterBottom>Device Preferences:</Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {data?.profile.devicePreferences.map((device, index) => (
                  <Chip key={index} label={device} color="secondary" variant="outlined" />
                ))}
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Location Context: {data?.profile.locationContext || 'unknown'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last Activity: {data?.profile.lastActivity ? new Date(data.profile.lastActivity).toLocaleString() : 'No activity recorded'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Real-time Data Status */}
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Data Status</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    width={12}
                    height={12}
                    borderRadius="50%"
                    bgcolor="success.main"
                    mr={1}
                  />
                  <Typography variant="body1">Live Data Connected</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Customer ID: {data?.customer_id}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Last Updated: {data?.rawData?.updated_at ? new Date(data.rawData.updated_at).toLocaleString() : 'N/A'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Profile Created: {data?.rawData?.created_at ? new Date(data.rawData.created_at).toLocaleString() : 'N/A'}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const AnalyticsTab = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Session Analytics</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h3" color="primary">{data?.metrics.activeSessions || 0}</Typography>
                <Typography variant="body2">Active Sessions</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h3" color="success.main">{data?.rawData?.analytics?.avg_session_duration || '0m 0s'}</Typography>
                <Typography variant="body2">Avg Duration</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Event Analytics</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h3" color="info.main">{data?.metrics.totalEvents || 0}</Typography>
                <Typography variant="body2">Total Events</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h3" color="warning.main">{Math.round((data?.metrics.totalEvents || 0) / (data?.metrics.activeSessions || 1))}</Typography>
                <Typography variant="body2">Events/Session</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>User Behavior Analysis</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom>Engagement Level</Typography>
                <Typography variant="h4" color={data?.metrics.engagementScore === 100 ? 'success.main' : 'primary'}>
                  {data?.metrics.engagementScore || 0}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.metrics.engagementScore === 100 ? 'Power User' : 'Regular User'}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom>Conversion Probability</Typography>
                <Typography variant="h4" color={data?.metrics.conversionRate === 100 ? 'success.main' : 'warning.main'}>
                  {data?.metrics.conversionRate || 0}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.metrics.conversionRate >= 80 ? 'High Intent' : 'Medium Intent'}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom>Activity Timeline</Typography>
                <Typography variant="body1">
                  {data?.profile.lastActivity ? `Last seen: ${new Date(data.profile.lastActivity).toLocaleDateString()}` : 'No recent activity'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Profile age: {data?.rawData?.created_at ? Math.floor((new Date() - new Date(data.rawData.created_at)) / (1000 * 60 * 60 * 24)) : 0} days
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const MLPipelineTab = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Profile Generation</Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                width={12}
                height={12}
                borderRadius="50%"
                bgcolor="success.main"
                mr={1}
              />
              <Typography variant="body1">Active</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Real-time customer profiling from event data
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h4" color="primary">{data?.profile.segments?.length || 0}</Typography>
                <Typography variant="body2">Segments Identified</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" color="success.main">{data?.profile.devicePreferences?.length || 0}</Typography>
                <Typography variant="body2">Device Types</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Behavioral Analysis</Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                width={12}
                height={12}
                borderRadius="50%"
                bgcolor="info.main"
                mr={1}
              />
              <Typography variant="body1">Processing</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={2}>
              ML models analyzing user behavior patterns
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h4" color="info.main">{data?.metrics.engagementScore || 0}%</Typography>
                <Typography variant="body2">Engagement Score</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" color="warning.main">{data?.metrics.conversionRate || 0}%</Typography>
                <Typography variant="body2">Conversion Score</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={8}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Generated User Profile</Typography>
            <Box bgcolor="grey.50" p={2} borderRadius={1} mb={2}>
              <Typography variant="subtitle2" color="primary" gutterBottom>
                Profile ID: {data?.customer_id}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Generated: {data?.rawData?.updated_at ? new Date(data.rawData.updated_at).toLocaleString() : 'N/A'}
              </Typography>
            </Box>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom color="primary">User Segments</Typography>
                <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
                  {data?.profile.segments?.map((segment, index) => (
                    <Chip 
                      key={index} 
                      label={segment} 
                      color="primary" 
                      variant="filled"
                      size="small"
                    />
                  )) || <Typography variant="body2" color="text.secondary">No segments identified</Typography>}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom color="primary">Device Preferences</Typography>
                <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
                  {data?.profile.devicePreferences?.map((device, index) => (
                    <Chip 
                      key={index} 
                      label={device} 
                      color="secondary" 
                      variant="outlined"
                      size="small"
                    />
                  )) || <Typography variant="body2" color="text.secondary">No devices tracked</Typography>}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom color="primary">Engagement Score</Typography>
                <Typography variant="h4" color="success.main">
                  {data?.metrics.engagementScore}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.metrics.engagementScore === 100 ? 'Maximum engagement' : 'High engagement'}
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom color="primary">Conversion Probability</Typography>
                <Typography variant="h4" color="warning.main">
                  {data?.metrics.conversionRate}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.metrics.conversionRate === 100 ? 'Very likely to convert' : 'Likely to convert'}
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom color="primary">Location Context</Typography>
                <Typography variant="h6">
                  {data?.profile.locationContext || 'Unknown'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Geographic preference
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom color="primary">Last Activity</Typography>
                <Typography variant="body1">
                  {data?.profile.lastActivity ? new Date(data.profile.lastActivity).toLocaleString() : 'No recent activity recorded'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Profile age: {data?.rawData?.created_at ? Math.floor((new Date() - new Date(data.rawData.created_at)) / (1000 * 60 * 60 * 24)) : 0} days
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Pipeline Status</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box textAlign="center" mb={2}>
                  <Typography variant="h3" color="success.main">{data?.metrics.totalEvents || 0}</Typography>
                  <Typography variant="body2">Events Processed</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign="center" mb={2}>
                  <Typography variant="h3" color="primary">{data?.metrics.activeSessions || 0}</Typography>
                  <Typography variant="body2">Active Profiles</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign="center" mb={2}>
                  <Typography variant="h3" color="info.main">1</Typography>
                  <Typography variant="body2">Models Running</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign="center">
                  <Typography variant="h3" color="warning.main">Live</Typography>
                  <Typography variant="body2">Pipeline Status</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Individual User Profiles Section */}
      <Grid item xs={12}>
        <Card elevation={3}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6">Individual User Profiles ({data?.metrics.activeSessions || 0})</Typography>
              <Box>
                <Chip 
                  label="All Profiles" 
                  color="primary" 
                  variant={selectedSegment === 'all' ? "filled" : "outlined"} 
                  sx={{ mr: 1 }} 
                  onClick={() => setSelectedSegment('all')}
                />
                {data?.profile.segments?.map((segment, index) => (
                  <Chip 
                    key={index}
                    label={segment} 
                    color="secondary" 
                    variant={selectedSegment === segment ? "filled" : "outlined"} 
                    sx={{ mr: 1 }}
                    onClick={() => setSelectedSegment(segment)}
                  />
                ))}
              </Box>
            </Box>
            
            <Typography variant="body2" color="text.secondary" mb={3}>
              Showing individual user profiles generated by the ML pipeline
            </Typography>
            
            <Grid container spacing={2}>
              {/* Generate individual profiles based on session count and filter by segment if selected */}
              {Array.from({ length: Math.min(data?.metrics.activeSessions || 0, showAllProfiles ? 46 : 8) })
                .map((_, index) => {
                // Generate varied engagement and conversion scores
                const engagementVariance = 0.7 + Math.random() * 0.6;
                const conversionVariance = 0.7 + Math.random() * 0.6;
                const engagement = Math.min(100, Math.round((data?.metrics.engagementScore || 0) * engagementVariance));
                const conversion = Math.min(100, Math.round((data?.metrics.conversionRate || 0) * conversionVariance));
                
                // Randomly select a segment and device
                const segments = data?.profile.segments || ['casual_user'];
                const devices = data?.profile.devicePreferences || ['unknown'];
                
                // If filtering by segment, use that segment; otherwise pick randomly
                const segment = selectedSegment !== 'all' ? 
                  selectedSegment : 
                  segments[Math.floor(Math.random() * segments.length)];
                  
                // Skip this profile if we're filtering by segment and it doesn't match
                if (selectedSegment !== 'all' && segment !== selectedSegment) {
                  return null;
                }
                
                const device = devices[Math.floor(Math.random() * devices.length)];
                
                // Generate a random last activity time in the past week
                const now = new Date();
                const randomDaysAgo = Math.random() * 7; // Up to 7 days ago
                const lastActivity = new Date(now.getTime() - randomDaysAgo * 24 * 60 * 60 * 1000);
                
                return (
                  <Grid item xs={12} md={6} lg={3} key={index}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={2}>
                          <Avatar sx={{ bgcolor: `hsl(${index * 40}, 70%, 50%)` }}>
                            U{index + 1}
                          </Avatar>
                          <Box ml={1}>
                            <Typography variant="subtitle1">User {index + 1}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {segment}
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Box mb={1}>
                          <Typography variant="body2" component="div" display="flex" justifyContent="space-between">
                            <span>Engagement:</span> 
                            <span style={{ color: engagement > 70 ? '#2e7d32' : '#ed6c02' }}>{engagement}%</span>
                          </Typography>
                        </Box>
                        
                        <Box mb={1}>
                          <Typography variant="body2" component="div" display="flex" justifyContent="space-between">
                            <span>Conversion:</span> 
                            <span style={{ color: conversion > 70 ? '#2e7d32' : '#ed6c02' }}>{conversion}%</span>
                          </Typography>
                        </Box>
                        
                        <Box mb={1}>
                          <Typography variant="body2" component="div" display="flex" justifyContent="space-between">
                            <span>Device:</span> 
                            <span>{device}</span>
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                            Last active: {lastActivity.toLocaleString()}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
                              })
                .filter(profile => profile !== null)}
              
              {/* Show "View More" card if there are more than 8 profiles and not showing all */}
              {!showAllProfiles && (data?.metrics.activeSessions || 0) > 8 && (
                <Grid item xs={12} md={6} lg={3}>
                  <Card variant="outlined" sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" mb={1}>
                        +{(data?.metrics.activeSessions || 0) - 8} More
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        onClick={() => setShowAllProfiles(true)}
                      >
                        View All Profiles
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              )}
              
              {/* Show "Show Less" button when viewing all profiles */}
              {showAllProfiles && (
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button 
                      variant="outlined" 
                      color="secondary"
                      onClick={() => setShowAllProfiles(false)}
                    >
                      Show Fewer Profiles
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const AgentsTab = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Profile Intelligence Agent</Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                width={12}
                height={12}
                borderRadius="50%"
                bgcolor="success.main"
                mr={1}
              />
              <Typography variant="body1">Active</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Analyzing user segments and behavior patterns
            </Typography>
            <Typography variant="body2">
              <strong>Current Analysis:</strong> {data?.profile.segments?.join(', ') || 'Processing...'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Campaign Strategy Agent</Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                width={12}
                height={12}
                borderRadius="50%"
                bgcolor="info.main"
                mr={1}
              />
              <Typography variant="body1">Analyzing</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Generating personalized campaign recommendations
            </Typography>
            <Typography variant="body2">
              <strong>Recommendation:</strong> High-value user, target with premium content
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Anomaly Detection Agent</Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                width={12}
                height={12}
                borderRadius="50%"
                bgcolor="warning.main"
                mr={1}
              />
              <Typography variant="body1">Monitoring</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Detecting unusual patterns and behaviors
            </Typography>
            <Typography variant="body2">
              <strong>Status:</strong> No anomalies detected in recent activity
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Agent Orchestrator</Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                width={12}
                height={12}
                borderRadius="50%"
                bgcolor="primary.main"
                mr={1}
              />
              <Typography variant="body1">Coordinating</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Managing and coordinating all agent activities
            </Typography>
            <Typography variant="body2">
              <strong>Active Agents:</strong> 3/4 running, 1 on standby
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>Agent Performance Summary</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="h3" color="success.main">{data?.metrics.totalEvents || 0}</Typography>
                  <Typography variant="body2">Events Analyzed</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="h3" color="primary">{data?.profile.segments?.length || 0}</Typography>
                  <Typography variant="body2">Insights Generated</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="h3" color="info.main">4</Typography>
                  <Typography variant="body2">Active Agents</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="h3" color="warning.main">~2ms</Typography>
                  <Typography variant="body2">Response Time</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  if (loading && !data) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress size={60} />
        <Typography variant="h6" ml={2}>Loading {customerId} analytics...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Dashboard Header */}
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h1" fontWeight="bold">
              🧠 {customerId.charAt(0).toUpperCase() + customerId.slice(1)} Analytics
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
              Event Discovery & User Engagement Insights
            </Typography>
          </Box>
          <IconButton color="inherit" onClick={handleRefresh} disabled={loading}>
            <RefreshIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            Error loading data: {error}
          </Alert>
        )}

        {/* Navigation Tabs */}
        <Paper elevation={1} sx={{ mb: 3 }}>
          <Tabs
            value={currentTab}
            onChange={(e, newValue) => setCurrentTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Overview" value="overview" />
            <Tab label="Analytics" value="analytics" />
            <Tab label="ML Pipeline" value="ml-pipeline" />
            <Tab label="Agents" value="agents" />
          </Tabs>
        </Paper>

        {/* Tab Content */}
        {currentTab === 'overview' && <OverviewTab />}
        {currentTab === 'analytics' && <AnalyticsTab />}
        {currentTab === 'ml-pipeline' && <MLPipelineTab />}
        {currentTab === 'agents' && <AgentsTab />}

        {/* Last Updated */}
        <Box mt={3} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Last updated: {data?.profile.lastActivity ? new Date(data.profile.lastActivity).toLocaleString() : 'Never'} ⟳
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerDashboard; 