import { useParams, useNavigate } from 'react-router-dom';
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
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import PowerIcon from '@mui/icons-material/Power';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import HandymanIcon from '@mui/icons-material/Handyman';
import { openWhatsApp, getAreaRequestMessage, getServiceRequestMessage, PHONE_TEL, PHONE_DISPLAY } from '../utils/whatsapp';

const areaData: Record<string, { key: string; time: string; nearby: string[] }> = {
  'sarita-vihar': { key: 'saritaVihar', time: '20-30', nearby: ['Jasola', 'Okhla', 'Mathura Road', 'Kalindi Kunj'] },
  'dhaula-kuan': { key: 'dhaulaKuan', time: '25-35', nearby: ['Ring Road', 'Panchsheel', 'Vasant Vihar', 'RK Puram'] },
  'india-gate': { key: 'indiaGate', time: '20-30', nearby: ['Rajpath', 'Connaught Place', 'Pragati Maidan', 'ITO'] },
  'chidiya-ghar': { key: 'chidiyaGhar', time: '20-30', nearby: ['Pragati Maidan', 'Purana Qila', 'Nizamuddin', 'Sundar Nagar'] },
  'ghazipur-mandi': { key: 'ghazipurMandi', time: '25-35', nearby: ['NH24', 'Anand Vihar', 'Mayur Vihar', 'Patparganj'] },
  'noida': { key: 'noida', time: '30-40', nearby: ['Sector 18', 'Greater Noida Expressway', 'Film City', 'Sector 62'] },
  'delhi': { key: 'delhi', time: '20-40', nearby: ['North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'] },
  'gurgaon': { key: 'gurgaon', time: '30-45', nearby: ['Golf Course Road', 'MG Road', 'Sohna Road', 'Cyber City'] },
  'ghaziabad': { key: 'ghaziabad', time: '30-45', nearby: ['Indirapuram', 'Vaishali', 'Raj Nagar', 'Kaushambi'] },
};

const servicesList = [
  { key: 'battery', icon: <BatteryChargingFullIcon /> },
  { key: 'newBattery', icon: <BatteryFullIcon /> },
  { key: 'fuel', icon: <LocalGasStationIcon /> },
  { key: 'towing', icon: <LocalShippingIcon /> },
  { key: 'tyre', icon: <TireRepairIcon /> },
  { key: 'heating', icon: <ThermostatIcon /> },
  { key: 'starting', icon: <PowerIcon /> },
  { key: 'lockout', icon: <VpnKeyIcon /> },
  { key: 'other', icon: <HandymanIcon /> },
];

export default function AreaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const area = slug ? areaData[slug] : null;

  if (!area) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Area not found</Typography>
        <Button onClick={() => navigate('/areas')} sx={{ mt: 2 }}>Back to Areas</Button>
      </Container>
    );
  }

  const areaTitle = t(`areas.${area.key}.title`);
  const areaDesc = t(`areas.${area.key}.desc`);

  return (
    <>
      <Helmet>
        <title>{`Roadside Assistance ${areaTitle} | Harish Motors - 24/7 Car Breakdown Service`}</title>
        <meta name="description" content={`24/7 roadside assistance in ${areaTitle}. Battery jump start, towing, fuel delivery, tyre puncture repair. Fast ${area.time} min response. Call 99586 28182.`} />
        <link rel="canonical" href={`https://harishmotors.in/areas/${slug}`} />
      </Helmet>

      {/* Hero */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #EF6C00 100%)',
          color: 'common.white',
        }}
      >
        <Container maxWidth="md">
          <Breadcrumbs sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
            <Link color="inherit" component="button" underline="hover" onClick={() => navigate('/')}>
              {t('nav.home')}
            </Link>
            <Link color="inherit" component="button" underline="hover" onClick={() => navigate('/areas')}>
              {t('nav.areas')}
            </Link>
            <Typography color="common.white">{areaTitle}</Typography>
          </Breadcrumbs>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
            <LocationOnIcon sx={{ fontSize: 40 }} />
            <Typography variant="h2" component="h1" fontWeight={800}>
              {areaTitle}
            </Typography>
          </Stack>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
            {areaDesc}
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip icon={<AccessTimeIcon />} label={`${area.time} ${t('areas.minutes')}`} sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
            <Chip icon={<CheckCircleIcon />} label="24/7" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
          </Stack>
        </Container>
      </Box>

      {/* Quick Actions */}
      <Paper elevation={4} sx={{ py: 3, px: 2, mx: { xs: 2, md: 'auto' }, maxWidth: 700, mt: -4, position: 'relative', zIndex: 1, borderRadius: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button variant="contained" color="secondary" startIcon={<WhatsAppIcon />} onClick={() => openWhatsApp(getAreaRequestMessage(areaTitle))} size="large">
            {t('areas.requestHelp')}
          </Button>
          <Button variant="contained" color="primary" startIcon={<PhoneIcon />} href={PHONE_TEL} size="large">
            {t('hero.callNow')} - {PHONE_DISPLAY}
          </Button>
        </Stack>
      </Paper>

      {/* Nearby Areas */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Nearby Areas We Cover
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {area.nearby.map((place) => (
              <Chip key={place} label={place} icon={<LocationOnIcon />} variant="outlined" color="primary" sx={{ mb: 1 }} />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Services Available */}
      <Box sx={{ py: 6, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('areas.servicesAvailable')} in {areaTitle}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {servicesList.map((service) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.key}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <Box sx={{ color: 'primary.main' }}>{service.icon}</Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {t(`services.${service.key}.title`)}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {t(`services.${service.key}.desc`)}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => openWhatsApp(getServiceRequestMessage(t(`services.${service.key}.title`), areaTitle))}
                        sx={{ flex: 1 }}
                      >
                        {t('services.requestService')}
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        startIcon={<PhoneIcon />}
                        href={PHONE_TEL}
                        sx={{ flex: 1 }}
                      >
                        {t('cta.callNow')}
                      </Button>
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
              {t('cta.callNow')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp(getAreaRequestMessage(areaTitle))}
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
