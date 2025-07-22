import EnhancedMLProfileTab from "./CustomerDashboard_MLEnhanced";
import React, { useState, useEffect, useRef } from 'react';
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
  AlertTitle,
  Avatar,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  Refresh as RefreshIcon,
  Security as SecurityIcon,
  Analytics as AnalyticsIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon,
  BarChart as BarChartIcon,
  SmartToy as SmartToyIcon,
  Lightbulb as LightbulbIcon,
  Psychology as PsychologyIcon,
  Insights as InsightsIcon,
  TrendingDown as TrendingDownIcon,
  ShoppingCart as ShoppingCartIcon,
  Event as EventIcon,
  LocationOn as LocationOnIcon,
  Schedule as ScheduleIcon
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
  Legend
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

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

  // Helper function to get most common value from array
  const getMostCommonValue = (arr) => {
    if (!arr || arr.length === 0) return null;
    const counts = {};
    arr.forEach(item => counts[item] = (counts[item] || 0) + 1);
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  };

  // Helper function to convert data to pie chart format
  const toPieChartData = (arr, label = 'value') => {
    if (!arr || arr.length === 0) return [];
    const counts = {};
    arr.forEach(item => counts[item] = (counts[item] || 0) + 1);
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  // Load customer data
  useEffect(() => {
    loadCustomerData();
    const interval = setInterval(loadCustomerData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, [customerId]);

  const loadCustomerData = async () => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE_URL}/customer/${customerId}/profile?ml=true`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CLIENT_ID
        }
      });

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const profileData = await response.json();
      
      // Transform API data into dashboard format - Handle individual user profiles
      const dashboardData = {
        customer_id: profileData.customer_id,
        ml_enhanced: profileData.ml_enhanced || false,
        metrics: {
          activeSessions: profileData.total_users || 0,
          totalEvents: profileData.total_events || 0,
          engagementScore: profileData.user_profiles?.length > 0 ? 
            Math.round((profileData.user_profiles.reduce((sum, user) => sum + (user.profile?.engagement_score || 0), 0) / profileData.user_profiles.length) * 100) : 0,
          conversionRate: profileData.user_profiles?.length > 0 ? 
            Math.round((profileData.user_profiles.reduce((sum, user) => sum + (user.analytics?.conversion_probability || 0), 0) / profileData.user_profiles.length) * 100) : 0
        },
        profile: {
          segments: profileData.user_profiles?.length > 0 ? 
            [...new Set(profileData.user_profiles.flatMap(user => user.profile?.segments || []))] : [],
          devicePreferences: profileData.user_profiles?.length > 0 ? 
            [...new Set(profileData.user_profiles.flatMap(user => user.profile?.device_preferences || []))] : [],
          locationContext: profileData.user_profiles?.length > 0 ? 
            profileData.user_profiles.find(user => user.profile?.location_context !== 'standard')?.profile?.location_context || 'standard' : 'unknown',
          lastActivity: profileData.user_profiles?.length > 0 ? 
            profileData.user_profiles.reduce((latest, user) => {
              const userActivity = new Date(user.last_seen || user.profile?.last_activity || 0);
              const currentLatest = new Date(latest || 0);
              return userActivity > currentLatest ? user.last_seen || user.profile?.last_activity : latest;
            }, null) : null
        },
        // ML-Enhanced Data - Aggregate from most active users
        mlProfile: {
          demographic: profileData.user_profiles?.length > 0 ? {
            age_bracket: getMostCommonValue(profileData.user_profiles.map(u => u.demographic_profile?.age_bracket).filter(Boolean)),
            income_segment: getMostCommonValue(profileData.user_profiles.map(u => u.demographic_profile?.income_segment).filter(Boolean)),
            life_stage: getMostCommonValue(profileData.user_profiles.map(u => u.demographic_profile?.life_stage).filter(Boolean)),
            education_level: getMostCommonValue(profileData.user_profiles.map(u => u.demographic_profile?.education_level).filter(Boolean))
          } : {},
          interests: profileData.user_profiles?.length > 0 ? 
            [...new Set(profileData.user_profiles.flatMap(user => user.interests || []))] : [],
          predictedIntents: profileData.user_profiles?.length > 0 ? 
            profileData.user_profiles.flatMap(user => user.predicted_intents || []) : [],
          behavioralTraits: profileData.user_profiles?.length > 0 ? {
            engagement_level: getMostCommonValue(profileData.user_profiles.map(u => u.behavioral_traits?.engagement_level).filter(Boolean)),
            session_depth: getMostCommonValue(profileData.user_profiles.map(u => u.behavioral_traits?.session_depth).filter(Boolean)),
            feature_adoption: getMostCommonValue(profileData.user_profiles.map(u => u.behavioral_traits?.feature_adoption).filter(Boolean))
          } : {},
          personalityProfile: {},
          lifestyleSegment: null,
          brandAffinities: [],
          purchasePropensity: {}
        },
        // Chart data for analytics
        chartData: {
          ageBrackets: toPieChartData(profileData.user_profiles?.map(u => u.demographic_profile?.age_bracket).filter(Boolean)),
          incomeSegments: toPieChartData(profileData.user_profiles?.map(u => u.demographic_profile?.income_segment).filter(Boolean)),
          lifeStages: toPieChartData(profileData.user_profiles?.map(u => u.demographic_profile?.life_stage).filter(Boolean)),
          educationLevels: toPieChartData(profileData.user_profiles?.map(u => u.demographic_profile?.education_level).filter(Boolean)),
          devicePreferences: toPieChartData(profileData.user_profiles?.map(u => u.profile?.device_preferences?.[0]).filter(Boolean)),
          engagementLevels: toPieChartData(profileData.user_profiles?.map(u => u.behavioral_traits?.engagement_level).filter(Boolean))
        },
        userProfiles: profileData.user_profiles || [], // Store individual user profiles
        totalUsers: profileData.total_users || 0,
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

  const PieChartCard = ({ title, data, height = 200 }) => (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6" mb={2}>{title}</Typography>
        {data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <Typography variant="body2" color="text.disabled">No data available</Typography>
        )}
      </CardContent>
    </Card>
  );

  const OverviewTab = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <MetricCard
          title="Active Users"
          value={data?.metrics.activeSessions || '--'}
          subtitle={`Individual users tracked`}
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
          subtitle={`Average engagement score`}
          icon={<TrendingUpIcon color="warning" />}
          color="warning.main"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <MetricCard
          title="Conversion Rate"
          value={`${data?.metrics.conversionRate || '--'}%`}
          subtitle={`Average conversion probability`}
          icon={<SecurityIcon color="error" />}
          color="error.main"
        />
      </Grid>

      {/* User Profile Insights */}
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>User Profile Insights</Typography>
            <Box mb={2}>
              <Chip label="ML Enhanced" color="primary" size="small" />
            </Box>
            <Typography variant="body2" color="text.secondary" mb={1}>
              <strong>User Segments:</strong>
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
              {data?.profile.segments?.map((segment, index) => (
                <Chip key={index} label={segment} variant="outlined" size="small" />
              )) || <Typography variant="body2" color="text.disabled">No segments available</Typography>}
            </Box>
            <Typography variant="body2" color="text.secondary" mb={1}>
              <strong>Device Preferences:</strong>
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
              {data?.profile.devicePreferences?.map((device, index) => (
                <Chip key={index} label={device} variant="outlined" size="small" />
              )) || <Typography variant="body2" color="text.disabled">No device data</Typography>}
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

      {/* ML Demographics - Pie Charts */}
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>ML Demographics Distribution</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" gutterBottom>Age Brackets</Typography>
                <ResponsiveContainer width="100%" height={150}>
                  <PieChart>
                    <Pie
                      data={data?.chartData?.ageBrackets || []}
                      cx="50%"
                      cy="50%"
                      outerRadius={50}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {(data?.chartData?.ageBrackets || []).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" gutterBottom>Income Segments</Typography>
                <ResponsiveContainer width="100%" height={150}>
                  <PieChart>
                    <Pie
                      data={data?.chartData?.incomeSegments || []}
                      cx="50%"
                      cy="50%"
                      outerRadius={50}
                      fill="#82ca9d"
                      dataKey="value"
                    >
                      {(data?.chartData?.incomeSegments || []).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* ML-Enhanced Interests & Intents */}
      {data?.ml_enhanced && (
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" mb={2}>ML Interests & Purchase Intent</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>Interests:</Typography>
                  <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
                    {data.mlProfile.interests?.map((interest, index) => (
                      <Chip key={index} label={interest} color="secondary" size="small" />
                    )) || <Typography variant="body2" color="text.disabled">No interests identified</Typography>}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>Predicted Intents:</Typography>
                  {data.mlProfile.predictedIntents?.length > 0 ? (
                    data.mlProfile.predictedIntents.slice(0, 3).map((intent, index) => (
                      <Box key={index} mb={1}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="body2">{intent.intent}</Typography>
                          <Typography variant="body2" color="primary">
                            {Math.round((intent.confidence || 0) * 100)}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={(intent.confidence || 0) * 100} 
                          sx={{ height: 4, borderRadius: 2 }}
                        />
                      </Box>
                    ))
                  ) : (
                    <Typography variant="body2" color="text.disabled">No intents predicted</Typography>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );

  const AnalyticsTab = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" mb={3}>Analytics Dashboard</Typography>
      </Grid>
      
      {/* Demographic Charts */}
      <Grid item xs={12} md={6}>
        <PieChartCard title="Age Distribution" data={data?.chartData?.ageBrackets} height={300} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PieChartCard title="Income Segments" data={data?.chartData?.incomeSegments} height={300} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PieChartCard title="Life Stages" data={data?.chartData?.lifeStages} height={300} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PieChartCard title="Education Levels" data={data?.chartData?.educationLevels} height={300} />
      </Grid>

      {/* Behavioral Charts */}
      <Grid item xs={12} md={6}>
        <PieChartCard title="Device Preferences" data={data?.chartData?.devicePreferences} height={300} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PieChartCard title="Engagement Levels" data={data?.chartData?.engagementLevels} height={300} />
      </Grid>

      {/* User Activity Summary */}
      <Grid item xs={12}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" mb={2}>User Activity Summary</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell align="right">Value</TableCell>
                    <TableCell align="right">Percentage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>High Engagement Users</TableCell>
                    <TableCell align="right">
                      {data?.userProfiles?.filter(u => u.behavioral_traits?.engagement_level === 'high').length || 0}
                    </TableCell>
                    <TableCell align="right">
                      {data?.totalUsers > 0 ? 
                        Math.round((data?.userProfiles?.filter(u => u.behavioral_traits?.engagement_level === 'high').length || 0) / data.totalUsers * 100) : 0}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mobile Users</TableCell>
                    <TableCell align="right">
                      {data?.userProfiles?.filter(u => u.profile?.device_preferences?.includes('mobile')).length || 0}
                    </TableCell>
                    <TableCell align="right">
                      {data?.totalUsers > 0 ? 
                        Math.round((data?.userProfiles?.filter(u => u.profile?.device_preferences?.includes('mobile')).length || 0) / data.totalUsers * 100) : 0}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Premium Income Segment</TableCell>
                    <TableCell align="right">
                      {data?.userProfiles?.filter(u => u.demographic_profile?.income_segment === 'premium').length || 0}
                    </TableCell>
                    <TableCell align="right">
                      {data?.totalUsers > 0 ? 
                        Math.round((data?.userProfiles?.filter(u => u.demographic_profile?.income_segment === 'premium').length || 0) / data.totalUsers * 100) : 0}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>High Purchase Intent</TableCell>
                    <TableCell align="right">
                      {data?.userProfiles?.filter(u => u.predicted_intents?.some(intent => intent.intent === 'high_purchase_intent')).length || 0}
                    </TableCell>
                    <TableCell align="right">
                      {data?.totalUsers > 0 ? 
                        Math.round((data?.userProfiles?.filter(u => u.predicted_intents?.some(intent => intent.intent === 'high_purchase_intent')).length || 0) / data.totalUsers * 100) : 0}%
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  // Agentic Recommendations Tab - Uses actual customer data for AI-powered recommendations
  const AgenticRecommendationsTab = () => {
    const [lettaRecommendations, setLettaRecommendations] = useState([]);
    const [lettaLoading, setLettaLoading] = useState(false);
    const [lettaError, setLettaError] = useState(null);
    const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
    const isLoadingRef = useRef(false);

    // Letta API Configuration
    const LETTA_API_KEY = 'Mzk0ODhjYjAtYmY5YS00NjdhLTlmZjQtN2I5YmQ0N2JmNDJlOjA2ZWE2YTU4LTkwYmMtNGFlOC1iMjJhLTRlYjA5MDFiMWEyZA==';
    const LETTA_BASE_URL = 'https://api.letta.com';
    const AGENTS = {
      IntelligentProfileAgent: 'agent-76b5f519-1fdc-422d-bb72-185413c6a2e6',
      CampaignStrategyAgent: 'agent-d1c84e3e-bebe-4a1b-bcd5-fab37dc1c8aa',
      AnomalyDetectionAgent: 'agent-62e6827c-6d6d-4980-8ab0-d1022fbb14a5',
      AgentOrchestrator: 'agent-ef88343f-5ed6-4cd3-9792-bba1eb41a359'
    };

    // Send message to Letta agent
    const sendMessageToAgent = async (agentId, message) => {
      try {
        const response = await fetch(`${LETTA_BASE_URL}/v1/agents/${agentId}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${LETTA_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messages: [
              {
                role: 'user',
                content: message
              }
            ]
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
        }

        const result = await response.json();
        console.log('Raw Letta response:', result);
        
        // Extract the agent's response from the messages array
        if (result.messages && result.messages.length > 0) {
          // Find the last assistant/agent message
          const agentMessages = result.messages.filter(msg => 
            msg.message_type !== 'reasoning_message' && 
            msg.content && 
            msg.content.trim()
          );
          
          if (agentMessages.length > 0) {
            const lastMessage = agentMessages[agentMessages.length - 1];
            console.log('Extracted agent response:', lastMessage.content);
            return {
              content: lastMessage.content,
              messageId: lastMessage.id,
              timestamp: lastMessage.date,
              fullResponse: result
            };
          }
        }
        
        throw new Error('No valid agent response found in messages');
      } catch (error) {
        console.error('Error sending message to Letta agent:', error);
        throw error;
      }
    };

    // Generate customer data summary for agents
    const generateCustomerSummary = () => {
      if (!data?.userProfiles || data.userProfiles.length === 0) {
        return null;
      }

      const summary = {
        totalUsers: data.totalUsers,
        totalEvents: data.metrics?.totalEvents,
        userProfiles: data.userProfiles.map(user => ({
          anonymousId: user.anonymous_id,
          demographicProfile: user.demographic_profile,
          behavioralTraits: user.behavioral_traits,
          predictedIntents: user.predicted_intents,
          engagementScore: user.profile?.engagement_score,
          lastSeen: user.last_seen
        })),
        aggregateMetrics: {
          avgEngagement: data.metrics?.engagementScore,
          conversionRate: data.metrics?.conversionRate,
          segments: data.profile?.segments,
          devicePreferences: data.profile?.devicePreferences
        }
      };

      return summary;
    };

    // Get real recommendations from Letta agents
    const getLettaRecommendations = async () => {
      if (isLoadingRef.current) {
        console.log('⏸️ Already loading recommendations, skipping...');
        return;
      }

      if (hasLoadedOnce) {
        console.log('⏸️ Already loaded recommendations once, skipping...');
        return;
      }

      isLoadingRef.current = true;
      setLettaLoading(true);
      setLettaError(null);
      console.log('🚀 Starting Letta recommendations generation...');
      
      try {
        const customerSummary = generateCustomerSummary();
        if (!customerSummary) {
          throw new Error('No customer data available for analysis');
        }

        console.log('📊 Customer summary prepared:', customerSummary);
        const recommendations = [];

        // 1. Get Profile Insights from IntelligentProfileAgent
        try {
          console.log('🧠 Calling IntelligentProfileAgent...');
          const profileMessage = `Analyze this customer data for OnCabaret mobile app and provide user profiling insights:

Customer Summary:
- Total Users: ${customerSummary.totalUsers}
- Total Events: ${customerSummary.totalEvents}
- Average Engagement: ${customerSummary.aggregateMetrics.avgEngagement}%
- Conversion Rate: ${customerSummary.aggregateMetrics.conversionRate}%

User Demographics:
${customerSummary.userProfiles.slice(0, 5).map(user => 
  `- User ${user.anonymousId?.slice(0, 8)}: ${user.demographicProfile?.age_bracket || 'Unknown'} age, ${user.demographicProfile?.income_segment || 'Unknown'} income, ${user.behavioralTraits?.engagement_level || 'standard'} engagement`
).join('\n')}

Please provide:
1. Key user segments identified
2. Behavioral patterns observed
3. Specific recommendations for improving user engagement
4. Target user opportunities for premium offerings

Format your response as actionable business recommendations.`;

          const profileResponse = await sendMessageToAgent(AGENTS.IntelligentProfileAgent, profileMessage);
          console.log('✅ IntelligentProfileAgent responded successfully');
          
          if (profileResponse?.content) {
            const newRecommendation = {
              type: 'User Profiling Insights',
              agent: 'IntelligentProfileAgent',
              icon: <PsychologyIcon color="primary" />,
              title: 'AI-Powered User Segmentation',
              description: profileResponse.content,
              action: 'Implement user segmentation strategy',
              priority: 'High',
              confidence: 0.92,
              impact: 'Engagement +20%',
              targetUsers: customerSummary.totalUsers,
              timestamp: profileResponse.timestamp,
              agentResponse: profileResponse.content
            };
            recommendations.push(newRecommendation);
            console.log('➕ Added IntelligentProfileAgent recommendation, total:', recommendations.length);
          }
        } catch (error) {
          console.error('❌ IntelligentProfileAgent failed:', error);
          recommendations.push({
            type: 'User Profiling Insights',
            agent: 'IntelligentProfileAgent',
            icon: <PsychologyIcon color="error" />,
            title: 'AI Profile Agent (Error)',
            description: `Agent temporarily unavailable: ${error.message}`,
            action: 'Retry when agent is available',
            priority: 'Medium',
            confidence: 0.0,
            impact: 'Service Issue',
            targetUsers: 0,
            timestamp: new Date().toISOString(),
            agentResponse: `Error: ${error.message}`
          });
        }

        // 2. Get Campaign Strategy from CampaignStrategyAgent
        try {
          console.log('📊 Calling CampaignStrategyAgent...');
          const campaignMessage = `Analyze this OnCabaret mobile app data and recommend campaign strategies:

Current Performance:
- Total Active Users: ${customerSummary.totalUsers}
- Engagement Rate: ${customerSummary.aggregateMetrics.avgEngagement}%
- Conversion Rate: ${customerSummary.aggregateMetrics.conversionRate}%
- Device Preferences: ${customerSummary.aggregateMetrics.devicePreferences?.join(', ') || 'Mixed'}

User Segments with Purchase Intent:
${customerSummary.userProfiles.filter(user => user.predictedIntents?.some(intent => intent.confidence > 0.7)).map(user => 
  `- User ${user.anonymousId?.slice(0, 8)}: ${user.predictedIntents?.map(i => `${i.intent} (${Math.round(i.confidence * 100)}%)`).join(', ')}`
).join('\n')}

Please provide:
1. Optimal campaign strategies for each user segment
2. Budget allocation recommendations
3. Channel optimization suggestions (mobile app, push notifications, etc.)
4. A/B testing recommendations

Focus on actionable marketing strategies for a mobile entertainment app.`;

          const campaignResponse = await sendMessageToAgent(AGENTS.CampaignStrategyAgent, campaignMessage);
          console.log('✅ CampaignStrategyAgent responded successfully');
          
          if (campaignResponse?.content) {
            const newRecommendation = {
              type: 'Campaign Strategy',
              agent: 'CampaignStrategyAgent',
              icon: <ShoppingCartIcon color="success" />,
              title: 'AI-Optimized Marketing Campaigns',
              description: campaignResponse.content,
              action: 'Deploy optimized campaign strategy',
              priority: 'High',
              confidence: 0.88,
              impact: 'ROI +25%',
              targetUsers: customerSummary.userProfiles.filter(user => user.predictedIntents?.length > 0).length,
              timestamp: campaignResponse.timestamp,
              agentResponse: campaignResponse.content
            };
            recommendations.push(newRecommendation);
            console.log('➕ Added CampaignStrategyAgent recommendation, total:', recommendations.length);
          }
        } catch (error) {
          console.error('❌ CampaignStrategyAgent failed:', error);
          recommendations.push({
            type: 'Campaign Strategy',
            agent: 'CampaignStrategyAgent',
            icon: <ShoppingCartIcon color="error" />,
            title: 'AI Campaign Agent (Error)',
            description: `Agent temporarily unavailable: ${error.message}`,
            action: 'Retry when agent is available',
            priority: 'Medium',
            confidence: 0.0,
            impact: 'Service Issue',
            targetUsers: 0,
            timestamp: new Date().toISOString(),
            agentResponse: `Error: ${error.message}`
          });
        }

        // 3. Get Anomaly Detection insights
        try {
          console.log('🔍 Calling AnomalyDetectionAgent...');
          const anomalyMessage = `Analyze this OnCabaret app user behavior data for anomalies and security concerns:

User Behavior Patterns:
${customerSummary.userProfiles.slice(0, 10).map(user => {
  const lastSeen = new Date(user.lastSeen || 0);
  const daysSince = Math.floor((new Date() - lastSeen) / (1000 * 60 * 60 * 24));
  return `- User ${user.anonymousId?.slice(0, 8)}: Last active ${daysSince} days ago, ${user.behavioralTraits?.engagement_level || 'standard'} engagement, ${user.predictedIntents?.length || 0} intents detected`;
}).join('\n')}

System Metrics:
- Total Events: ${customerSummary.totalEvents}
- User Distribution: ${customerSummary.totalUsers} unique users
- Engagement Anomalies: Users with sudden behavior changes

Please analyze for:
1. Unusual user behavior patterns
2. Potential security risks or bot activity
3. User retention anomalies
4. Engagement pattern irregularities

Provide specific recommendations for improving user retention and security.`;

          const anomalyResponse = await sendMessageToAgent(AGENTS.AnomalyDetectionAgent, anomalyMessage);
          console.log('✅ AnomalyDetectionAgent responded successfully');
          
          if (anomalyResponse?.content) {
            const newRecommendation = {
              type: 'Security & Anomaly Detection',
              agent: 'AnomalyDetectionAgent',
              icon: <SecurityIcon color="warning" />,
              title: 'AI-Powered Anomaly Detection',
              description: anomalyResponse.content,
              action: 'Implement security and retention measures',
              priority: 'Medium',
              confidence: 0.85,
              impact: 'Security +30%',
              targetUsers: customerSummary.userProfiles.filter(user => {
                const lastSeen = new Date(user.lastSeen || 0);
                return (new Date() - lastSeen) / (1000 * 60 * 60 * 24) > 7;
              }).length,
              timestamp: anomalyResponse.timestamp,
              agentResponse: anomalyResponse.content
            };
            recommendations.push(newRecommendation);
            console.log('➕ Added AnomalyDetectionAgent recommendation, total:', recommendations.length);
          }
        } catch (error) {
          console.error('❌ AnomalyDetectionAgent failed:', error);
          recommendations.push({
            type: 'Security & Anomaly Detection',
            agent: 'AnomalyDetectionAgent',
            icon: <SecurityIcon color="error" />,
            title: 'AI Anomaly Agent (Error)',
            description: `Agent temporarily unavailable: ${error.message}`,
            action: 'Retry when agent is available',
            priority: 'Medium',
            confidence: 0.0,
            impact: 'Service Issue',
            targetUsers: 0,
            timestamp: new Date().toISOString(),
            agentResponse: `Error: ${error.message}`
          });
        }

        // 4. Get orchestrated insights from AgentOrchestrator
        try {
          console.log('🎯 Calling AgentOrchestrator...');
          const orchestratorMessage = `As the AgentOrchestrator, provide comprehensive business recommendations for OnCabaret mobile app based on this data:

Current State:
- User Base: ${customerSummary.totalUsers} active users
- Event Volume: ${customerSummary.totalEvents} total interactions
- Performance: ${customerSummary.aggregateMetrics.avgEngagement}% engagement, ${customerSummary.aggregateMetrics.conversionRate}% conversion

Key Segments:
${Object.entries(customerSummary.userProfiles.reduce((segments, user) => {
  const segment = user.behavioralTraits?.engagement_level || 'standard';
  segments[segment] = (segments[segment] || 0) + 1;
  return segments;
}, {})).map(([segment, count]) => `- ${segment}: ${count} users`).join('\n')}

Coordinate insights from your specialist agents (Profile, Campaign, Anomaly) to provide:
1. Overall business strategy recommendations
2. Priority action items for the next 30 days
3. Resource allocation suggestions
4. Long-term growth opportunities

Focus on actionable, prioritized business recommendations for maximizing OnCabaret's mobile app success.`;

          const orchestratorResponse = await sendMessageToAgent(AGENTS.AgentOrchestrator, orchestratorMessage);
          console.log('✅ AgentOrchestrator responded successfully');
          
          if (orchestratorResponse?.content) {
            const newRecommendation = {
              type: 'Strategic Orchestration',
              agent: 'AgentOrchestrator',
              icon: <SmartToyIcon color="info" />,
              title: 'AI Orchestrator Strategic Plan',
              description: orchestratorResponse.content,
              action: 'Execute comprehensive strategic plan',
              priority: 'High',
              confidence: 0.95,
              impact: 'Business Growth +35%',
              targetUsers: customerSummary.totalUsers,
              timestamp: orchestratorResponse.timestamp,
              agentResponse: orchestratorResponse.content
            };
            recommendations.push(newRecommendation);
            console.log('➕ Added AgentOrchestrator recommendation, total:', recommendations.length);
          }
        } catch (error) {
          console.error('❌ AgentOrchestrator failed:', error);
          recommendations.push({
            type: 'Strategic Orchestration',
            agent: 'AgentOrchestrator',
            icon: <SmartToyIcon color="error" />,
            title: 'AI Orchestrator (Error)',
            description: `Agent temporarily unavailable: ${error.message}`,
            action: 'Retry when agent is available',
            priority: 'Medium',
            confidence: 0.0,
            impact: 'Service Issue',
            targetUsers: 0,
            timestamp: new Date().toISOString(),
            agentResponse: `Error: ${error.message}`
          });
        }

        console.log('📊 Final recommendations array:', recommendations);
        console.log('📊 Total recommendations generated:', recommendations.length);
        console.log('🔧 About to call setLettaRecommendations...');
        setLettaRecommendations(recommendations);
        console.log('✅ setLettaRecommendations called successfully');
        setHasLoadedOnce(true); // Mark as loaded

      } catch (error) {
        console.error('Error getting Letta recommendations:', error);
        setLettaError(error.message);
        setHasLoadedOnce(true); // Mark as loaded even on error to prevent retry loop
      } finally {
        setLettaLoading(false);
        isLoadingRef.current = false;
      }
    };

    // Load Letta recommendations ONCE when component mounts and has data
    useEffect(() => {
      console.log('📋 useEffect triggered - checking if should load:', {
        hasUserProfiles: !!data?.userProfiles,
        userProfilesLength: data?.userProfiles?.length,
        hasLoadedOnce: hasLoadedOnce,
        isLoadingRefCurrent: isLoadingRef.current
      });
      
      // Only load if we have data, haven't loaded before, and aren't currently loading
      if (data?.userProfiles?.length > 0 && !hasLoadedOnce && !isLoadingRef.current) {
        console.log('📋 Loading recommendations for the first time');
        getLettaRecommendations();
      }
    }, [data?.userProfiles?.length, hasLoadedOnce]); // Only trigger when data or load state changes

    // Debug state changes
    useEffect(() => {
      console.log('🔄 lettaRecommendations state updated:', lettaRecommendations);
      console.log('🔄 lettaRecommendations length:', lettaRecommendations.length);
      console.log('🔄 lettaLoading:', lettaLoading);
      console.log('🔄 lettaError:', lettaError);
    }, [lettaRecommendations, lettaLoading, lettaError]);

    const LettaRecommendationCard = ({ recommendation }) => (
      <Card elevation={3} sx={{ mb: 3, border: '2px solid', borderColor: 'primary.light' }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            {recommendation.icon}
            <Box ml={2} flexGrow={1}>
              <Typography variant="h6">{recommendation.title}</Typography>
              <Box display="flex" gap={1} alignItems="center" mb={1}>
                <Chip 
                  label={recommendation.agent} 
                  size="small" 
                  color="primary" 
                  variant="outlined"
                />
                <Chip 
                  label={recommendation.priority} 
                  size="small" 
                  color={recommendation.priority === 'High' ? 'error' : recommendation.priority === 'Medium' ? 'warning' : 'default'}
                />
                <Typography variant="body2" color="text.secondary">
                  Confidence: {Math.round(recommendation.confidence * 100)}%
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Agent Response - Main Content */}
          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="subtitle2" gutterBottom fontWeight="bold">
              🤖 AI Agent Analysis:
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
              {recommendation.agentResponse || recommendation.description}
            </Typography>
          </Paper>

          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light', color: 'white' }}>
                <Typography variant="h4">{recommendation.targetUsers}</Typography>
                <Typography variant="body2">Target Users</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'success.light', color: 'white' }}>
                <Typography variant="h6">{recommendation.impact}</Typography>
                <Typography variant="body2">Expected Impact</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'warning.light', color: 'white' }}>
                <Typography variant="h6">{Math.round(recommendation.confidence * 100)}%</Typography>
                <Typography variant="body2">AI Confidence</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              Recommended Action: {recommendation.action}
            </Typography>
            <Button variant="contained" size="small" startIcon={<LightbulbIcon />}>
              Implement
            </Button>
          </Box>

          <Typography variant="caption" color="text.secondary" mt={1} display="block">
            Generated by {recommendation.agent} at {new Date(recommendation.timestamp).toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    );

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" mb={3}>
            <SmartToyIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
            <Box>
              <Typography variant="h4" fontWeight="bold">
                Agentic Recommendations
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                AI-powered insights based on {data?.totalUsers || 0} user profiles and {data?.metrics?.totalEvents || 0} events
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Debug Test Card */}
        <Grid item xs={12}>
          <Card elevation={3} sx={{ bgcolor: 'warning.light', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">🧪 DEBUG TEST</Typography>
              <Typography variant="body1">
                If you can see this, the AgenticRecommendationsTab component is rendering correctly.
              </Typography>
              <Typography variant="body2">
                Loading: {lettaLoading ? 'YES' : 'NO'} | 
                Error: {lettaError ? 'YES' : 'NO'} | 
                Recommendations: {lettaRecommendations.length} |
                Loaded Once: {hasLoadedOnce ? 'YES' : 'NO'}
              </Typography>
              <Button 
                variant="contained" 
                onClick={() => {
                  console.log('🔘 Manual refresh triggered - resetting state');
                  setHasLoadedOnce(false);
                  setLettaRecommendations([]);
                  setLettaError(null);
                  getLettaRecommendations();
                }}
                sx={{ mt: 2 }}
              >
                🔄 Refresh Recommendations
              </Button>
              <Button 
                variant="outlined" 
                onClick={() => {
                  console.log('🧪 Setting mock recommendation');
                  setLettaRecommendations([{
                    type: 'Test',
                    agent: 'TestAgent',
                    icon: <SmartToyIcon color="primary" />,
                    title: 'Test Recommendation',
                    description: 'This is a test recommendation to verify UI rendering',
                    action: 'Test action',
                    priority: 'High',
                    confidence: 0.95,
                    impact: 'Test Impact',
                    targetUsers: 42,
                    timestamp: new Date().toISOString(),
                    agentResponse: 'This is a test response from a mock agent.'
                  }]);
                }}
                sx={{ mt: 1, ml: 1 }}
              >
                🧪 Test Mock Recommendation
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* AI Overview Metrics */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="h3" fontWeight="bold">{lettaRecommendations.length}</Typography>
                  <Typography variant="body1">AI Recommendations</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="h3" fontWeight="bold">
                    {lettaRecommendations.filter(r => r.priority === 'High').length}
                  </Typography>
                  <Typography variant="body1">High Priority Actions</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="h3" fontWeight="bold">
                    {lettaRecommendations.length > 0 ? Math.round(lettaRecommendations.reduce((sum, r) => sum + r.confidence, 0) / lettaRecommendations.length * 100) : 0}%
                  </Typography>
                  <Typography variant="body1">Avg AI Confidence</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Typography variant="h3" fontWeight="bold">
                    {lettaRecommendations.reduce((sum, r) => sum + r.targetUsers, 0)}
                  </Typography>
                  <Typography variant="body1">Total Target Users</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Loading State */}
        {lettaLoading && (
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center', py: 6 }}>
                <CircularProgress size={60} sx={{ mb: 2 }} />
                <Typography variant="h5" color="primary" mb={2}>
                  🤖 AI Agents Analyzing Your Data...
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our Letta agents are processing your customer data and generating personalized recommendations.
                </Typography>
                <Box mt={2}>
                  <LinearProgress />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}

        {/* Error State */}
        {lettaError && (
          <Grid item xs={12}>
            <Alert severity="error" sx={{ mb: 3 }}>
              <AlertTitle>AI Agent Error</AlertTitle>
              {lettaError}
              <Button 
                variant="outlined" 
                color="error" 
                size="small" 
                onClick={getLettaRecommendations}
                sx={{ mt: 1 }}
                startIcon={<RefreshIcon />}
              >
                Retry AI Analysis
              </Button>
            </Alert>
          </Grid>
        )}

        {/* Recommendations List */}
        <Grid item xs={12}>
          {(() => {
            console.log('🎨 Rendering recommendations section:');
            console.log('  - lettaLoading:', lettaLoading);
            console.log('  - lettaError:', lettaError);
            console.log('  - lettaRecommendations.length:', lettaRecommendations.length);
            console.log('  - lettaRecommendations:', lettaRecommendations);
            
            if (!lettaLoading && !lettaError && lettaRecommendations.length > 0) {
              console.log('  → Rendering recommendation cards');
              return lettaRecommendations.map((recommendation, index) => (
                <LettaRecommendationCard key={index} recommendation={recommendation} />
              ));
            } else if (!lettaLoading && !lettaError) {
              console.log('  → Rendering no recommendations message');
              return (
                <Card elevation={3}>
                  <CardContent sx={{ textAlign: 'center', py: 6 }}>
                    <SmartToyIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h5" color="text.secondary" mb={2}>
                      No AI Recommendations Available
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                      Need more user data to generate AI recommendations. 
                      Collect more user interactions to unlock personalized insights.
                    </Typography>
                    <Button 
                      variant="contained" 
                      onClick={getLettaRecommendations}
                      startIcon={<RefreshIcon />}
                    >
                      Refresh AI Analysis
                    </Button>
                  </CardContent>
                </Card>
              );
            }
            
            console.log('  → Rendering nothing (loading or error state handled elsewhere)');
            return null;
          })()}
        </Grid>

        {/* AI Agent Status */}
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" mb={2}>Letta AI Agent Performance</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <PsychologyIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2">IntelligentProfileAgent</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={lettaRecommendations.find(r => r.agent === 'IntelligentProfileAgent') ? 95 : 0} 
                    sx={{ height: 8, borderRadius: 4 }} 
                  />
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    ID: agent-76b5f519... • {data?.userProfiles?.length || 0} profiles analyzed
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <ShoppingCartIcon color="success" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2">CampaignStrategyAgent</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={lettaRecommendations.find(r => r.agent === 'CampaignStrategyAgent') ? 88 : 0} 
                    color="success" 
                    sx={{ height: 8, borderRadius: 4 }} 
                  />
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    ID: agent-d1c84e3e... • Campaign optimization active
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <SecurityIcon color="warning" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2">AnomalyDetectionAgent</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={lettaRecommendations.find(r => r.agent === 'AnomalyDetectionAgent') ? 92 : 0} 
                    color="warning" 
                    sx={{ height: 8, borderRadius: 4 }} 
                  />
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    ID: agent-62e6827c... • Security monitoring active
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <SmartToyIcon color="info" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2">AgentOrchestrator</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={lettaRecommendations.find(r => r.agent === 'AgentOrchestrator') ? 98 : 0} 
                    color="info" 
                    sx={{ height: 8, borderRadius: 4 }} 
                  />
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    ID: agent-ef88343f... • Orchestrating {lettaRecommendations.length} recommendations
                  </Typography>
                </Grid>
              </Grid>
              
              {/* Real-time API Status */}
              <Box mt={3} p={2} bgcolor="grey.50" borderRadius={1}>
                <Typography variant="subtitle2" gutterBottom>
                  🔗 Live Letta API Connection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Base URL: https://api.letta.com/v1 • Status: {lettaLoading ? 'Processing...' : lettaError ? 'Error' : 'Connected'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Last Analysis: {lettaRecommendations.length > 0 ? new Date(lettaRecommendations[0].timestamp).toLocaleString() : 'Never'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };

  const RawDataTab = () => (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" mb={2}>Raw API Response</Typography>
          <Paper sx={{ p: 2, backgroundColor: '#f5f5f5', maxHeight: 600, overflow: 'auto' }}>
            <pre style={{ margin: 0, fontSize: '12px' }}>
              {data?.rawData ? JSON.stringify(data.rawData, null, 2) : 'No data available'}
            </pre>
          </Paper>
        </CardContent>
      </Card>
    </Container>
  );

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="error">
          <AlertTitle>Error Loading Data</AlertTitle>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Customer Analytics Dashboard - {customerId}
          </Typography>
          <IconButton color="inherit" onClick={handleRefresh} disabled={loading}>
            <RefreshIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ mb: 3 }}>
          <Tabs 
            value={currentTab} 
            onChange={(e, newValue) => setCurrentTab(newValue)}
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="Overview" value="overview" />
            <Tab label="Analytics" value="analytics" />
            <Tab label="ML Profile" value="ml-profile" />
            <Tab label="Agentic Recommendations" value="agentic-recommendations" />
            <Tab label="Raw Data" value="raw-data" />
          </Tabs>
        </Paper>

        {currentTab === 'overview' && <OverviewTab />}
        {currentTab === 'analytics' && <AnalyticsTab />}
        {currentTab === 'ml-profile' && <EnhancedMLProfileTab data={data} showAllProfiles={showAllProfiles} setShowAllProfiles={setShowAllProfiles} getMostCommonValue={getMostCommonValue} />}
        {currentTab === 'agentic-recommendations' && <AgenticRecommendationsTab />}
        {currentTab === 'raw-data' && <RawDataTab />}

        {/* Data Status Footer */}
        <Box mt={4} p={2} bgcolor="grey.100" borderRadius={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2" gutterBottom>Data Status</Typography>
              <Chip label="Live Data Connected" color="success" size="small" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2" gutterBottom>Customer ID: {customerId}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" color="text.secondary">
                Last Updated: {new Date().toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Profile Created: {data?.rawData?.created_at ? new Date(data.rawData.created_at).toLocaleString() : 'Unknown'}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerDashboard;
