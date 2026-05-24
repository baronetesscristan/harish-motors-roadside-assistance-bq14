import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import WarningIcon from '@mui/icons-material/Warning';
import { openWhatsApp, getEmergencyMessage, PHONE_TEL, PHONE_DISPLAY } from '../utils/whatsapp';

const blogPosts = [
  {
    key: 'battery',
    icon: <BatteryChargingFullIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
    tags: ['Battery', 'Summer', 'Maintenance'],
    content: [
      'Delhi summers can push temperatures above 45°C, which accelerates battery fluid evaporation and chemical degradation.',
      '1. Check battery terminals monthly for corrosion - clean with baking soda solution.',
      '2. Ensure electrolyte levels are topped up (for non-sealed batteries).',
      '3. Park in shade whenever possible to reduce heat exposure.',
      '4. Get your battery tested before summer starts - replace if older than 3 years.',
      '5. Keep connections tight and clean for optimal charging.',
    ],
  },
  {
    key: 'monsoon',
    icon: <WaterDropIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
    tags: ['Monsoon', 'Safety', 'Driving Tips'],
    content: [
      'Delhi monsoons bring waterlogging, reduced visibility, and slippery roads. Here are essential safety tips:',
      '1. Check wipers and replace if streaking - visibility is critical in heavy rain.',
      '2. Avoid waterlogged roads - even 6 inches of standing water can stall your engine.',
      '3. Maintain safe following distance - braking distance doubles on wet roads.',
      '4. Turn on headlights (not hazards) in rain for visibility.',
      '5. Check tyre tread depth - minimum 1.6mm for safe water dispersal.',
      '6. Keep emergency numbers saved - call Harish Motors at 99586 28182 if stranded.',
    ],
  },
  {
    key: 'tyres',
    icon: <TireRepairIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
    tags: ['Tyres', 'Safety', 'Maintenance'],
    content: [
      'Worn tyres are a major safety hazard, especially in Delhi\'s congested traffic. Here\'s when to replace:',
      '1. Tread depth below 1.6mm - use the coin test (insert a coin in the groove).',
      '2. Visible cracks, bulges, or blisters on sidewalls indicate structural damage.',
      '3. Uneven wear patterns suggest alignment or suspension issues.',
      '4. Tyres older than 5 years should be inspected regardless of appearance.',
      '5. If you feel vibrations while driving, get tyres balanced immediately.',
      'Pro tip: Rotate tyres every 10,000 km for even wear distribution.',
    ],
  },
  {
    key: 'emergency',
    icon: <WarningIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
    tags: ['Emergency', 'Highway', 'Safety'],
    content: [
      'Breaking down on NH-24, the expressway, or any busy road can be dangerous. Follow these steps:',
      '1. Turn on hazard lights immediately and move to the left shoulder if possible.',
      '2. Place warning triangle 50 meters behind your vehicle.',
      '3. Do NOT stand behind or in front of your vehicle.',
      '4. Call for help - Harish Motors is available 24/7 at 99586 28182.',
      '5. Stay inside the vehicle with doors locked if on a highway at night.',
      '6. Share your live location via WhatsApp with our team for faster response.',
      'Remember: Your safety is more important than the vehicle. Get to a safe spot first.',
    ],
  },
];

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Car Care Tips & Blog - Harish Motors | Delhi Driving Tips</title>
        <meta name="description" content="Expert car care tips for Delhi NCR drivers. Battery maintenance in summer, monsoon driving safety, tyre replacement guide, and highway breakdown safety tips." />
        <link rel="canonical" href="https://harishmotors.in/blog" />
      </Helmet>

      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
          color: 'common.white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" fontWeight={800} gutterBottom>
            {t('blog.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {t('blog.subtitle')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid size={{ xs: 12, md: 6 }} key={post.key}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      {post.icon}
                      <Typography variant="h5" fontWeight={700}>
                        {t(`blog.posts.${post.key}.title`)}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                      {post.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" />
                      ))}
                    </Stack>
                    <Divider sx={{ mb: 2 }} />
                    <Stack spacing={1}>
                      {post.content.map((line, idx) => (
                        <Typography key={idx} variant="body2" color="text.secondary">
                          {line}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 6, bgcolor: 'primary.dark', color: 'common.white', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('cta.emergency')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            {t('cta.emergencyText')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button variant="contained" color="secondary" size="large" href={PHONE_TEL} startIcon={<PhoneIcon />}>
              {PHONE_DISPLAY}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp(getEmergencyMessage())}
              sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              {t('cta.whatsapp')}
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
