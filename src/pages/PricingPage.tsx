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
import Alert from '@mui/material/Alert';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
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

const pricingData = [
  { key: 'battery', icon: <BatteryChargingFullIcon sx={{ fontSize: 36 }} />, features: ['On-spot service', '24/7 available', 'All car models'] },
  { key: 'newBattery', icon: <BatteryFullIcon sx={{ fontSize: 36 }} />, features: ['Quality brands', 'Installation included', 'Warranty provided'] },
  { key: 'fuel', icon: <LocalGasStationIcon sx={{ fontSize: 36 }} />, features: ['Petrol & Diesel', 'Fast delivery', 'Minimum 5 liters'] },
  { key: 'towing', icon: <LocalShippingIcon sx={{ fontSize: 36 }} />, features: ['Flatbed trucks', 'Safe transport', 'Delhi NCR coverage'] },
  { key: 'tyre', icon: <TireRepairIcon sx={{ fontSize: 36 }} />, features: ['Puncture repair', 'Stepney change', 'On-spot service'] },
  { key: 'heating', icon: <ThermostatIcon sx={{ fontSize: 36 }} />, features: ['Diagnosis included', 'Coolant top-up', 'Radiator check'] },
  { key: 'starting', icon: <PowerIcon sx={{ fontSize: 36 }} />, features: ['Ignition repair', 'Starter motor', 'Electrical fixes'] },
  { key: 'lockout', icon: <VpnKeyIcon sx={{ fontSize: 36 }} />, features: ['No damage', 'All car types', 'Quick unlock'] },
  { key: 'other', icon: <HandymanIcon sx={{ fontSize: 36 }} />, features: ['Free assessment', 'Expert diagnosis', 'On-spot repair'] },
];

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Pricing - Harish Motors | Affordable Roadside Assistance Delhi NCR</title>
        <meta name="description" content="Transparent and affordable pricing for roadside assistance in Delhi NCR. Battery jump start, towing, fuel delivery, tyre repair. Get a free quote - call 99586 28182." />
        <link rel="canonical" href="https://harishmotors.in/pricing" />
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
            {t('pricing.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {t('pricing.subtitle')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 4 }}>
        <Container maxWidth="md">
          <Alert severity="info" sx={{ borderRadius: 2 }}>
            {t('pricing.note')}
          </Alert>
        </Container>
      </Box>

      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {pricingData.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.key}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                  }}
                >
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight={700}>
                        {t(`services.${item.key}.title`)}
                      </Typography>
                    </Stack>

                    <Chip
                      label={t('pricing.getQuote')}
                      color="secondary"
                      variant="outlined"
                      sx={{ alignSelf: 'flex-start', mb: 2 }}
                    />

                    <Stack spacing={1} sx={{ mb: 3, flex: 1 }}>
                      {item.features.map((feature) => (
                        <Stack key={feature} direction="row" spacing={1} alignItems="center">
                          <CheckCircleIcon color="success" sx={{ fontSize: 18 }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    <Stack spacing={1}>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        startIcon={<WhatsAppIcon />}
                        onClick={() => openWhatsApp(getServiceRequestMessage(t(`services.${item.key}.title`)))}
                      >
                        {t('pricing.getQuote')}
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
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

      {/* Payment Info */}
      <Box sx={{ py: 6, bgcolor: 'grey.50' }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Payment Methods
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
            <Chip label="Cash" variant="outlined" />
            <Chip label="GPay" variant="outlined" />
            <Chip label="PhonePe" variant="outlined" />
            <Chip label="Paytm" variant="outlined" />
            <Chip label="Bank Transfer" variant="outlined" />
            <Chip label="UPI" variant="outlined" />
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 6, bgcolor: 'secondary.main', color: 'common.white', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('pricing.getQuote')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 3 }}>
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
              onClick={() => openWhatsApp(getServiceRequestMessage('pricing quote'))}
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
