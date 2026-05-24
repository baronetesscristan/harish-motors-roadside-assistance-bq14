import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
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
import { openWhatsApp, getServiceRequestMessage, PHONE_TEL, PHONE_DISPLAY } from '../utils/whatsapp';

const services = [
  { key: 'battery', icon: <BatteryChargingFullIcon sx={{ fontSize: 40 }} />, image: '/service-battery.webp', emergency: true },
  { key: 'newBattery', icon: <BatteryFullIcon sx={{ fontSize: 40 }} />, image: '/service-new-battery.webp', emergency: false },
  { key: 'fuel', icon: <LocalGasStationIcon sx={{ fontSize: 40 }} />, image: '/service-fuel.webp', emergency: true },
  { key: 'towing', icon: <LocalShippingIcon sx={{ fontSize: 40 }} />, image: '/service-towing.webp', emergency: true },
  { key: 'tyre', icon: <TireRepairIcon sx={{ fontSize: 40 }} />, image: '/service-tyre.webp', emergency: true },
  { key: 'heating', icon: <ThermostatIcon sx={{ fontSize: 40 }} />, image: '/service-heating.webp', emergency: true },
  { key: 'starting', icon: <PowerIcon sx={{ fontSize: 40 }} />, image: '/service-starting.webp', emergency: true },
  { key: 'lockout', icon: <VpnKeyIcon sx={{ fontSize: 40 }} />, image: '/service-lockout.webp', emergency: true },
  { key: 'other', icon: <HandymanIcon sx={{ fontSize: 40 }} />, image: '/service-other.webp', emergency: false },
];

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Services - Harish Motors | Battery Jump Start, Towing, Fuel Delivery Delhi</title>
        <meta name="description" content="Harish Motors offers battery jump start, towing, fuel delivery, tyre puncture repair, key lockout, engine overheating fixes in Delhi NCR. 24/7 roadside assistance." />
        <link rel="canonical" href="https://harishmotors.in/services" />
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
            {t('services.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {t('services.subtitle')}
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            <Chip icon={<AccessTimeIcon />} label="24/7" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
            <Chip icon={<CheckCircleIcon />} label={t('hero.available')} sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
          </Stack>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid size={{ xs: 12, md: 6 }} key={service.key}>
                <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '100%' }}>
                  {service.image && (
                    <CardMedia
                      component="img"
                      image={service.image}
                      alt={t(`services.${service.key}.title`)}
                      sx={{ width: { xs: '100%', sm: 200 }, height: { xs: 180, sm: 'auto' }, objectFit: 'cover' }}
                    />
                  )}
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <Box sx={{ color: 'primary.main' }}>{service.icon}</Box>
                      <Typography variant="h6" fontWeight={700}>
                        {t(`services.${service.key}.title`)}
                      </Typography>
                    </Stack>
                    {service.emergency && (
                      <Chip label="Emergency" size="small" color="error" sx={{ alignSelf: 'flex-start', mb: 1 }} />
                    )}
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                      {t(`services.${service.key}.desc`)}
                    </Typography>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CheckCircleIcon color="success" fontSize="small" />
                        <Typography variant="body2">Delhi NCR Coverage</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AccessTimeIcon color="primary" fontSize="small" />
                        <Typography variant="body2">20-40 min response</Typography>
                      </Stack>
                    </Stack>
                    <Divider sx={{ my: 2 }} />
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => openWhatsApp(getServiceRequestMessage(t(`services.${service.key}.title`)))}
                      >
                        {t('services.requestService')}
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<PhoneIcon />}
                        href={PHONE_TEL}
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

      {/* Process Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
            {t('howItWorks.title')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {[1, 2, 3].map((step) => (
              <Grid size={{ xs: 12, md: 4 }} key={step}>
                <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h3" color="secondary.main" fontWeight={800} gutterBottom>
                    {step}
                  </Typography>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {t(`howItWorks.step${step}`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`howItWorks.step${step}Text`)}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 6, bgcolor: 'secondary.main', color: 'common.white', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('cta.emergency')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            {t('cta.emergencyText')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              href={PHONE_TEL}
              startIcon={<PhoneIcon />}
              sx={{ bgcolor: 'common.white', color: 'secondary.main', '&:hover': { bgcolor: 'grey.100' } }}
            >
              {PHONE_DISPLAY}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp(getServiceRequestMessage('Roadside Assistance'))}
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
