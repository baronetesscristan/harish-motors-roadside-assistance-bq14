import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { openWhatsApp, getEmergencyMessage, PHONE_TEL, PHONE_DISPLAY } from '../utils/whatsapp';

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    { key: 'reliability', icon: <VerifiedIcon sx={{ fontSize: 40 }} /> },
    { key: 'speed', icon: <SpeedIcon sx={{ fontSize: 40 }} /> },
    { key: 'honesty', icon: <HandshakeIcon sx={{ fontSize: 40 }} /> },
    { key: 'expertise', icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
  ];

  const milestones = [
    { year: '2000', event: 'Founded in Kilokari, New Delhi' },
    { year: '2005', event: 'Expanded to 24/7 emergency services' },
    { year: '2010', event: 'Coverage expanded to entire Delhi' },
    { year: '2015', event: 'Added Noida & Gurgaon coverage' },
    { year: '2020', event: 'Full Delhi NCR coverage - 20+ years' },
    { year: '2025', event: '25+ years of trusted service' },
  ];

  return (
    <>
      <Helmet>
        <title>About Harish Motors - Trusted Roadside Assistance Since 2000 | Delhi NCR</title>
        <meta name="description" content="Harish Motors has provided trusted car and bike breakdown assistance in Delhi NCR since 2000. Founded by Harish Chand, serving 10,000+ vehicles. 24/7 reliable service." />
        <link rel="canonical" href="https://harishmotors.in/about" />
      </Helmet>

      {/* Hero */}
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
            {t('about.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {t('about.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Story */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/founder-harish-chand.jpeg"
                alt="Harish Chand - Founder of Harish Motors"
                sx={{ width: '100%', borderRadius: 3, boxShadow: 4 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {t('about.mission')}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {t('about.story')}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {t('about.missionText')}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>HC</Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {t('about.owner')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('about.ownerRole')}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: 6, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Grid container spacing={3} textAlign="center">
            {[
              { icon: <EmojiEventsIcon sx={{ fontSize: 40, color: 'secondary.main' }} />, label: t('about.experience') },
              { icon: <DirectionsCarIcon sx={{ fontSize: 40, color: 'secondary.main' }} />, label: t('about.vehicles') },
              { icon: <GroupsIcon sx={{ fontSize: 40, color: 'secondary.main' }} />, label: t('about.coverage') },
              { icon: <CalendarMonthIcon sx={{ fontSize: 40, color: 'secondary.main' }} />, label: t('about.allDay') },
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, md: 3 }} key={idx}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  {stat.icon}
                  <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 1 }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" fontWeight={700} gutterBottom>
            {t('about.values.title')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {values.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.key}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {t(`about.values.${item.key}`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`about.values.${item.key}Text`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
            Our Journey
          </Typography>
          <Stack spacing={3} sx={{ mt: 4 }}>
            {milestones.map((milestone, idx) => (
              <Stack key={idx} direction="row" spacing={2} alignItems="flex-start">
                <Avatar sx={{ bgcolor: idx === milestones.length - 1 ? 'secondary.main' : 'primary.main', width: 40, height: 40, fontSize: '0.75rem', fontWeight: 700 }}>
                  {milestone.year.slice(2)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>{milestone.year}</Typography>
                  <Typography variant="body2" color="text.secondary">{milestone.event}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>

      <Divider />

      {/* CTA */}
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('cta.emergency')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {t('cta.emergencyText')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button variant="contained" color="primary" size="large" href={PHONE_TEL} startIcon={<PhoneIcon />}>
              {PHONE_DISPLAY}
            </Button>
            <Button variant="contained" color="success" size="large" startIcon={<WhatsAppIcon />} onClick={() => openWhatsApp(getEmergencyMessage())}>
              {t('cta.whatsapp')}
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
