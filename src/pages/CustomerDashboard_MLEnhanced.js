// Enhanced ML Profile Tab Component
import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Badge,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  ShoppingCart as ShoppingCartIcon,
  Timeline as TimelineIcon,
  Insights as InsightsIcon,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  LocalActivity as LocalActivityIcon
} from '@mui/icons-material';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C'];

const EnhancedMLProfileTab = ({ data, showAllProfiles, setShowAllProfiles, getMostCommonValue }) => {
  
  // Helper functions for enhanced analytics
  const getEngagementTier = (score) => {
    if (score >= 0.8) return { tier: 'Elite', color: 'success', icon: '🏆' };
    if (score >= 0.6) return { tier: 'High', color: 'primary', icon: '⭐' };
    if (score >= 0.4) return { tier: 'Medium', color: 'warning', icon: '📈' };
    return { tier: 'Low', color: 'error', icon: '📊' };
  };

  const getPurchaseIntentLevel = (intents) => {
    if (!intents || intents.length === 0) return { level: 'Unknown', confidence: 0, color: 'default' };
    const avgConfidence = intents.reduce((sum, intent) => sum + (intent.confidence || 0), 0) / intents.length;
    const hasHighIntent = intents.some(intent => intent.intent === 'high_purchase_intent');
    
    if (hasHighIntent && avgConfidence > 0.7) return { level: 'Very High', confidence: avgConfidence, color: 'success' };
    if (avgConfidence > 0.5) return { level: 'High', confidence: avgConfidence, color: 'primary' };
    if (avgConfidence > 0.3) return { level: 'Medium', confidence: avgConfidence, color: 'warning' };
    return { level: 'Low', confidence: avgConfidence, color: 'error' };
  };

  const getTopUsers = (users, limit = 5) => {
    return users
      ?.sort((a, b) => (b.profile?.engagement_score || 0) - (a.profile?.engagement_score || 0))
      .slice(0, limit) || [];
  };

  const getUserSegmentation = (users) => {
    if (!users) return [];
    
    const segments = {
      'VIP Users': users.filter(u => u.event_count > 15 && (u.profile?.engagement_score || 0) > 0.8),
      'Power Users': users.filter(u => u.event_count > 10 && (u.profile?.engagement_score || 0) > 0.6),
      'Regular Users': users.filter(u => u.event_count > 5 && (u.profile?.engagement_score || 0) > 0.4),
      'New Users': users.filter(u => u.event_count <= 5),
      'At Risk': users.filter(u => {
        const daysSinceLastSeen = (new Date() - new Date(u.last_seen)) / (1000 * 60 * 60 * 24);
        return daysSinceLastSeen > 7;
      })
    };

    return Object.entries(segments).map(([name, users]) => ({
      name,
      value: users.length,
      percentage: Math.round((users.length / data.totalUsers) * 100),
      users: users.slice(0, 3) // Sample users for each segment
    }));
  };

  const userSegments = getUserSegmentation(data?.userProfiles);
  const topUsers = getTopUsers(data?.userProfiles);

  return (
    <Grid container spacing={3}>
      {/* Header */}
      <Grid item xs={12}>
        <Card elevation={3} sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: 'white', color: 'primary.main', mr: 2 }}>
                  <PsychologyIcon />
                </Avatar>
                <Box>
                  <Typography variant="h4" color="white" fontWeight="bold">
                    ML-Enhanced User Intelligence
                  </Typography>
                  <Typography variant="h6" color="white" sx={{ opacity: 0.9 }}>
                    {data?.totalUsers || 0} Individual Users • {data?.rawData?.total_events || 0} Total Events
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color="white" fontWeight="bold">
                  {data?.metrics?.engagementScore || 0}%
                </Typography>
                <Typography variant="body1" color="white">
                  Avg Engagement
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Key Insights Cards */}
      <Grid item xs={12} md={3}>
        <Card elevation={3}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <TrendingUpIcon color="success" sx={{ mr: 1 }} />
              <Typography variant="h6">Top Performers</Typography>
            </Box>
            <Typography variant="h3" color="success.main" fontWeight="bold">
              {data?.userProfiles?.filter(u => (u.profile?.engagement_score || 0) > 0.8).length || 0}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Elite engagement users
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card elevation={3}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <ShoppingCartIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">High Intent</Typography>
            </Box>
            <Typography variant="h3" color="primary.main" fontWeight="bold">
              {data?.userProfiles?.filter(u => u.predicted_intents?.some(intent => intent.intent === 'high_purchase_intent')).length || 0}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ready to convert
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card elevation={3}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <PersonIcon color="warning" sx={{ mr: 1 }} />
              <Typography variant="h6">Premium Segment</Typography>
            </Box>
            <Typography variant="h3" color="warning.main" fontWeight="bold">
              {data?.userProfiles?.filter(u => u.demographic_profile?.income_segment === 'premium').length || 0}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              High-value prospects
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card elevation={3}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <LocalActivityIcon color="error" sx={{ mr: 1 }} />
              <Typography variant="h6">Recent Activity</Typography>
            </Box>
            <Typography variant="h3" color="error.main" fontWeight="bold">
              {data?.userProfiles?.filter(u => {
                const daysSince = (new Date() - new Date(u.last_seen)) / (1000 * 60 * 60 * 24);
                return daysSince <= 1;
              }).length || 0}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Active today
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* User Segmentation */}
      <Grid item xs={12} md={8}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={3}>User Segmentation Analysis</Typography>
            <Grid container spacing={2}>
              {userSegments.map((segment, index) => (
                <Grid item xs={12} sm={6} md={4} key={segment.name}>
                  <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4" color="primary.main" fontWeight="bold">
                      {segment.value}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {segment.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {segment.percentage}% of total users
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={segment.percentage} 
                      sx={{ mt: 1, height: 6, borderRadius: 3 }}
                      color={index === 0 ? 'success' : index === 1 ? 'primary' : index === 2 ? 'warning' : 'error'}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Top Users Leaderboard */}
      <Grid item xs={12} md={4}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>🏆 Top Performers</Typography>
            <List>
              {topUsers.map((user, index) => {
                const engagementTier = getEngagementTier(user.profile?.engagement_score || 0);
                return (
                  <ListItem key={user.anonymous_id} divider>
                    <ListItemAvatar>
                      <Badge
                        badgeContent={index + 1}
                        color={index === 0 ? 'success' : index === 1 ? 'primary' : 'default'}
                      >
                        <Avatar sx={{ bgcolor: engagementTier.color + '.main' }}>
                          <PersonIcon />
                        </Avatar>
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography variant="subtitle2">
                            User {index + 1}
                          </Typography>
                          <Chip 
                            label={engagementTier.tier} 
                            size="small" 
                            color={engagementTier.color}
                          />
                        </Box>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {user.event_count} events • {Math.round((user.profile?.engagement_score || 0) * 100)}% engagement
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* ML Demographics Deep Dive */}
      <Grid item xs={12}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={3}>🧠 ML Demographics Deep Dive</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="subtitle1" gutterBottom>Age Distribution</Typography>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={data?.chartData?.ageBrackets || []}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {(data?.chartData?.ageBrackets || []).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="subtitle1" gutterBottom>Income Segments</Typography>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={data?.chartData?.incomeSegments || []}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#82ca9d"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {(data?.chartData?.incomeSegments || []).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="subtitle1" gutterBottom>Life Stages</Typography>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={data?.chartData?.lifeStages || []}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#ffc658"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {(data?.chartData?.lifeStages || []).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="subtitle1" gutterBottom>Education Levels</Typography>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={data?.chartData?.educationLevels || []}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#ff7c7c"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {(data?.chartData?.educationLevels || []).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Advanced ML Insights */}
      <Grid item xs={12} md={8}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={3}>🎯 Advanced ML Insights</Typography>
            
            {/* Purchase Intent Analysis */}
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">🛒 Purchase Intent Analysis</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {data?.userProfiles?.slice(0, 5).map((user, index) => {
                    const intentLevel = getPurchaseIntentLevel(user.predicted_intents);
                    return (
                      <Grid item xs={12} md={6} key={user.anonymous_id}>
                        <Paper elevation={1} sx={{ p: 2 }}>
                          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography variant="subtitle2">User {index + 1}</Typography>
                            <Chip 
                              label={intentLevel.level} 
                              size="small" 
                              color={intentLevel.color}
                            />
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={intentLevel.confidence * 100} 
                            sx={{ mb: 1, height: 8, borderRadius: 4 }}
                            color={intentLevel.color}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {Math.round(intentLevel.confidence * 100)}% confidence • {user.event_count} events
                          </Typography>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* Behavioral Patterns */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">📊 Behavioral Patterns</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Behavior Type</TableCell>
                        <TableCell align="right">Users</TableCell>
                        <TableCell align="right">Percentage</TableCell>
                        <TableCell align="right">Avg Engagement</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { 
                          type: 'High Engagement', 
                          users: data?.userProfiles?.filter(u => u.behavioral_traits?.engagement_level === 'high') || [],
                          color: 'success'
                        },
                        { 
                          type: 'Deep Sessions', 
                          users: data?.userProfiles?.filter(u => u.behavioral_traits?.session_depth === 'deep') || [],
                          color: 'primary'
                        },
                        { 
                          type: 'Early Adopters', 
                          users: data?.userProfiles?.filter(u => u.behavioral_traits?.feature_adoption === 'early_adopter') || [],
                          color: 'warning'
                        }
                      ].map((behavior, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Chip label={behavior.type} size="small" color={behavior.color} />
                          </TableCell>
                          <TableCell align="right">{behavior.users.length}</TableCell>
                          <TableCell align="right">
                            {data?.totalUsers > 0 ? Math.round((behavior.users.length / data.totalUsers) * 100) : 0}%
                          </TableCell>
                          <TableCell align="right">
                            {behavior.users.length > 0 ? 
                              Math.round((behavior.users.reduce((sum, u) => sum + (u.profile?.engagement_score || 0), 0) / behavior.users.length) * 100) : 0}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>

            {/* Interest Analysis */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">💭 Interest & Preference Analysis</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                  {data?.mlProfile?.interests?.map((interest, index) => (
                    <Chip 
                      key={index} 
                      label={interest} 
                      color="secondary" 
                      variant="outlined"
                      icon={<StarIcon />}
                    />
                  ))}
                </Box>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Top interests across {data?.totalUsers} users
                </Typography>
                <Divider />
                <Box mt={2}>
                  <Typography variant="subtitle2" gutterBottom>Most Common Combinations:</Typography>
                  {['technology + mobile_apps', 'nightlife + entertainment', 'social_events + dining'].map((combo, index) => (
                    <Chip 
                      key={index} 
                      label={combo} 
                      size="small" 
                      sx={{ mr: 1, mb: 1 }} 
                    />
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Grid>

      {/* Activity Timeline */}
      <Grid item xs={12} md={4}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>📅 Recent Activity Timeline</Typography>
            <List dense>
              {data?.userProfiles?.slice(0, 8).map((user, index) => (
                <ListItem key={user.anonymous_id} divider>
                  <ListItemAvatar>
                    <Avatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>
                      {index + 1}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="body2">
                        {user.event_count} events
                      </Typography>
                    }
                    secondary={
                      <Typography variant="caption" color="text.secondary">
                        {new Date(user.last_seen).toLocaleDateString()} • {user.demographic_profile?.age_bracket || 'Unknown age'}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Individual User Profiles - Enhanced View */}
      <Grid item xs={12}>
        <Card elevation={3}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h6">👥 Individual User Profiles</Typography>
              <Box display="flex" gap={1}>
                <Button 
                  variant={showAllProfiles ? "contained" : "outlined"}
                  onClick={() => setShowAllProfiles(!showAllProfiles)}
                  size="small"
                >
                  {showAllProfiles ? 'Show Top 12' : 'Show All'}
                </Button>
                <Button variant="outlined" size="small">
                  Export Data
                </Button>
              </Box>
            </Box>
            
            <Grid container spacing={2}>
              {(showAllProfiles ? data?.userProfiles : data?.userProfiles?.slice(0, 12))?.map((user, index) => {
                const engagementTier = getEngagementTier(user.profile?.engagement_score || 0);
                const intentLevel = getPurchaseIntentLevel(user.predicted_intents);
                const daysSinceLastSeen = Math.floor((new Date() - new Date(user.last_seen)) / (1000 * 60 * 60 * 24));
                
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={user.anonymous_id}>
                    <Card 
                      variant="outlined" 
                      sx={{ 
                        height: '100%',
                        border: user.event_count > 15 ? '2px solid gold' : '1px solid #e0e0e0',
                        position: 'relative'
                      }}
                    >
                      {user.event_count > 15 && (
                        <Chip 
                          label="VIP" 
                          color="warning" 
                          size="small" 
                          sx={{ position: 'absolute', top: 8, right: 8 }}
                        />
                      )}
                      
                      <CardContent sx={{ pb: 1 }}>
                        <Box display="flex" alignItems="center" mb={2}>
                          <Avatar 
                            sx={{ 
                              bgcolor: engagementTier.color + '.main', 
                              width: 40, 
                              height: 40,
                              mr: 2 
                            }}
                          >
                            <Typography variant="body2">
                              {engagementTier.icon}
                            </Typography>
                          </Avatar>
                          <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                              User #{index + 1}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              ID: {user.anonymous_id.substring(0, 8)}...
                            </Typography>
                          </Box>
                        </Box>

                        {/* Engagement Score */}
                        <Box mb={2}>
                          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography variant="body2">Engagement</Typography>
                            <Chip 
                              label={engagementTier.tier} 
                              size="small" 
                              color={engagementTier.color}
                            />
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={(user.profile?.engagement_score || 0) * 100} 
                            sx={{ height: 6, borderRadius: 3 }}
                            color={engagementTier.color}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {Math.round((user.profile?.engagement_score || 0) * 100)}% engagement
                          </Typography>
                        </Box>

                        {/* Key Metrics */}
                        <Grid container spacing={1} mb={2}>
                          <Grid item xs={6}>
                            <Paper elevation={0} sx={{ bgcolor: 'grey.50', p: 1, textAlign: 'center' }}>
                              <Typography variant="h6" color="primary.main">
                                {user.event_count}
                              </Typography>
                              <Typography variant="caption">Events</Typography>
                            </Paper>
                          </Grid>
                          <Grid item xs={6}>
                            <Paper elevation={0} sx={{ bgcolor: 'grey.50', p: 1, textAlign: 'center' }}>
                              <Typography variant="h6" color="success.main">
                                {user.analytics?.session_count || 0}
                              </Typography>
                              <Typography variant="caption">Sessions</Typography>
                            </Paper>
                          </Grid>
                        </Grid>

                        {/* Demographics */}
                        {user.ml_enhanced && (
                          <Box mb={2}>
                            <Typography variant="subtitle2" gutterBottom>Demographics</Typography>
                            <Box display="flex" flexWrap="wrap" gap={0.5} mb={1}>
                              <Chip 
                                label={user.demographic_profile?.age_bracket || 'Unknown'} 
                                size="small" 
                                variant="outlined"
                              />
                              <Chip 
                                label={user.demographic_profile?.income_segment || 'Unknown'} 
                                size="small" 
                                variant="outlined"
                                color={user.demographic_profile?.income_segment === 'premium' ? 'success' : 'default'}
                              />
                            </Box>
                          </Box>
                        )}

                        {/* Purchase Intent */}
                        <Box mb={2}>
                          <Typography variant="subtitle2" gutterBottom>Purchase Intent</Typography>
                          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography variant="caption">{intentLevel.level}</Typography>
                            <Typography variant="caption" color="primary">
                              {Math.round(intentLevel.confidence * 100)}%
                            </Typography>
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={intentLevel.confidence * 100} 
                            sx={{ height: 4, borderRadius: 2 }}
                            color={intentLevel.color}
                          />
                        </Box>

                        {/* Activity Status */}
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="caption" color="text.secondary">
                            Device: {user.profile?.device_preferences?.[0] || 'Unknown'}
                          </Typography>
                          <Chip 
                            label={daysSinceLastSeen === 0 ? 'Today' : `${daysSinceLastSeen}d ago`}
                            size="small"
                            color={daysSinceLastSeen === 0 ? 'success' : daysSinceLastSeen <= 3 ? 'primary' : 'default'}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              }) || <Typography variant="body2" color="text.disabled">No user profiles available</Typography>}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* ML Performance Metrics */}
      <Grid item xs={12}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={3}>🤖 ML Model Performance</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="success.main" fontWeight="bold">
                    {data?.userProfiles?.filter(u => u.ml_enhanced).length || 0}
                  </Typography>
                  <Typography variant="subtitle1">ML Enhanced</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data?.totalUsers > 0 ? Math.round((data?.userProfiles?.filter(u => u.ml_enhanced).length / data.totalUsers) * 100) : 0}% coverage
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="primary.main" fontWeight="bold">
                    {data?.userProfiles?.reduce((sum, u) => sum + (u.ml_confidence_score || 0), 0) / (data?.userProfiles?.length || 1) > 0 ? 
                      Math.round((data?.userProfiles?.reduce((sum, u) => sum + (u.ml_confidence_score || 0), 0) / data.userProfiles.length) * 100) : 0}%
                  </Typography>
                  <Typography variant="subtitle1">Avg Confidence</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Prediction accuracy
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="warning.main" fontWeight="bold">
                    {data?.userProfiles?.filter(u => u.demographic_profile && Object.keys(u.demographic_profile).length > 0).length || 0}
                  </Typography>
                  <Typography variant="subtitle1">Demographics</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Profiles with full data
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="error.main" fontWeight="bold">
                    {data?.userProfiles?.filter(u => u.interests && u.interests.length > 0).length || 0}
                  </Typography>
                  <Typography variant="subtitle1">Interest Profiles</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Users with interests
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EnhancedMLProfileTab;
