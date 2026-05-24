import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import PowerIcon from '@mui/icons-material/Power';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import HandymanIcon from '@mui/icons-material/Handyman';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import SavingsIcon from '@mui/icons-material/Savings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { openWhatsApp, getServiceRequestMessage, getEmergencyMessage, PHONE_DISPLAY, PHONE_TEL } from '../utils/whatsapp';

const serviceIcons: Record<string, React.ReactNode> = {
  battery: <BatteryChargingFullIcon fontSize="large" />,
  newBattery: <BatteryFullIcon fontSize="large" />,
  fuel: <LocalGasStationIcon fontSize="large" />,
  towing: <LocalShippingIcon fontSize="large" />,
  tyre: <TireRepairIcon fontSize="large" />,
  heating: <ThermostatIcon fontSize="large" />,
  starting: <PowerIcon fontSize="large" />,
  lockout: <VpnKeyIcon fontSize="large" />,
  other: <HandymanIcon fontSize="large" />,
};

const serviceImages: Record<string, string> = {
  battery: '/service-battery.webp',
  newBattery: '/service-new-battery.webp',
  towing: '/service-towing.webp',
  fuel: '/service-fuel.webp',
  tyre: '/service-tyre.webp',
  heating: '/service-heating.webp',
  starting: '/service-starting.webp',
  lockout: '/service-lockout.webp',
  other: '/service-other.webp',
};

const serviceKeys = ['battery', 'newBattery', 'fuel', 'towing', 'tyre', 'heating', 'starting', 'lockout', 'other'];

const mainAreas = [
  { key: 'saritaVihar', slug: 'sarita-vihar', time: '20-30' },
  { key: 'dhaulaKuan', slug: 'dhaula-kuan', time: '25-35' },
  { key: 'indiaGate', slug: 'india-gate', time: '20-30' },
  { key: 'chidiyaGhar', slug: 'chidiya-ghar', time: '20-30' },
  { key: 'ghazipurMandi', slug: 'ghazipur-mandi', time: '25-35' },
  { key: 'noida', slug: 'noida', time: '30-40' },
];

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Harish Motors - 24/7 Roadside Car & Bike Assistance Delhi NCR | Since 2000</title>
        <meta name="description" content="Harish Motors provides 24/7 roadside car and bike breakdown assistance in Delhi, Noida, Gurgaon, Ghaziabad. Battery jump start, towing, fuel delivery, tyre puncture repair. Call 99586 28182." />
        <meta name="keywords" content="roadside assistance Delhi, car breakdown service Delhi, 24/7 towing Delhi, battery jump start Delhi NCR, Harish Motors, roadside help Noida, car repair Gurgaon" />
        <meta property="og:title" content="Harish Motors - 24/7 Roadside Assistance Delhi NCR" />
        <meta property="og:description" content="Professional car & bike breakdown service in Delhi NCR since 2000. Call 99586 28182 for immediate help." />
        <link rel="canonical" href="https://harishmotors.in/" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '85vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(135deg, rgba(27,94,32,0.92) 0%, rgba(46,125,50,0.85) 50%, rgba(239,108,0,0.7) 100%), url('/hero-image.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'common.white',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', py: 6 }}>
          <Chip
            icon={<AccessTimeIcon />}
            label={t('hero.available')}
            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', mb: 3, fontSize: '0.85rem' }}
          />
          <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
            {t('hero.title')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
            {t('hero.subtitle')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp(getEmergencyMessage())}
              sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}
            >
              {t('hero.cta')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href={PHONE_TEL}
              startIcon={<PhoneIcon />}
              sx={{ py: 1.5, px: 4, fontSize: '1.1rem', color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              {t('hero.callNow')} - {PHONE_DISPLAY}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Paper
        elevation={4}
        sx={{
          py: 3,
          bgcolor: 'background.paper',
          position: 'relative',
          mt: { xs: -4, md: -5 },
          mx: { xs: 2, md: 'auto' },
          maxWidth: 900,
          borderRadius: 3,
          zIndex: 1,
        }}
      >
        <Grid container spacing={2} textAlign="center">
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="h4" color="primary" fontWeight={800}>25+</Typography>
            <Typography variant="body2" color="text.secondary">{t('about.experience')}</Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="h4" color="primary" fontWeight={800}>24/7</Typography>
            <Typography variant="body2" color="text.secondary">{t('about.allDay')}</Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="h4" color="primary" fontWeight={800}>10K+</Typography>
            <Typography variant="body2" color="text.secondary">{t('about.vehicles')}</Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="h4" color="primary" fontWeight={800}>4</Typography>
            <Typography variant="body2" color="text.secondary">{t('about.coverage')}</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Services Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom fontWeight={700}>
            {t('services.title')}
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 5, maxWidth: 600, mx: 'auto' }}>
            {t('services.subtitle')}
          </Typography>
          <Grid container spacing={3}>
            {serviceKeys.map((key) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={key}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                  }}
                >
                  {serviceImages[key] && (
                    <CardMedia
                      component="img"
                      height="160"
                      image={serviceImages[key]}
                      alt={t(`services.${key}.title`)}
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <Box sx={{ color: 'primary.main' }}>{serviceIcons[key]}</Box>
                      <Typography variant="h6" fontWeight={600}>
                        {t(`services.${key}.title`)}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                      {t(`services.${key}.desc`)}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => openWhatsApp(getServiceRequestMessage(t(`services.${key}.title`)))}
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
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button variant="outlined" color="primary" size="large" onClick={() => navigate('/services')}>
              {t('nav.services')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: 8, bgcolor: 'primary.dark', color: 'common.white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom fontWeight={700}>
            {t('whyUs.title')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {[
              { key: 'experience', icon: <VerifiedIcon sx={{ fontSize: 48 }} /> },
              { key: 'fast', icon: <SpeedIcon sx={{ fontSize: 48 }} /> },
              { key: 'allDay', icon: <AccessTimeIcon sx={{ fontSize: 48 }} /> },
              { key: 'affordable', icon: <SavingsIcon sx={{ fontSize: 48 }} /> },
            ].map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.key}>
                <Box textAlign="center">
                  <Box sx={{ color: 'secondary.main', mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {t(`whyUs.${item.key}`)}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    {t(`whyUs.${item.key}Text`)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom fontWeight={700}>
            {t('howItWorks.title')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {[1, 2, 3].map((step) => (
              <Grid size={{ xs: 12, md: 4 }} key={step}>
                <Box textAlign="center">
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'secondary.main',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {step}
                  </Avatar>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {t(`howItWorks.step${step}`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`howItWorks.step${step}Text`)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Areas */}
      <Box
        sx={{
          py: 8,
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/delhi-coverage.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'common.white',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom fontWeight={700}>
            {t('areas.title')}
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 5, opacity: 0.85 }}>
            {t('areas.subtitle')}
          </Typography>
          <Grid container spacing={3}>
            {mainAreas.map((area) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={area.key}>
                <Card
                  sx={{
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                  onClick={() => navigate(`/areas/${area.slug}`)}
                >
                  <CardContent>
                    <LocationOnIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t(`areas.${area.key}.title`)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {area.time} {t('areas.minutes')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/areas')}>
              {t('nav.areas')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom fontWeight={700}>
            {t('testimonials.title')}
          </Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {['t1', 't2', 't3', 't4'].map((key) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={key}>
                <Card sx={{ height: '100%', p: 2 }}>
                  <CardContent>
                    <Rating value={5} readOnly size="small" icon={<StarIcon fontSize="inherit" />} emptyIcon={<StarIcon fontSize="inherit" />} sx={{ mb: 2 }} />
                    <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                      "{t(`testimonials.${key}.text`)}"
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                        {t(`testimonials.${key}.name`).charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {t(`testimonials.${key}.name`)}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t(`testimonials.${key}.location`)}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Emergency CTA */}
      <Box
        sx={{
          py: 6,
          bgcolor: 'secondary.main',
          color: 'common.white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h3" fontWeight={800} gutterBottom>
            {t('cta.emergency')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            {t('cta.emergencyText')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              href={PHONE_TEL}
              startIcon={<PhoneIcon />}
              sx={{ bgcolor: 'common.white', color: 'secondary.main', '&:hover': { bgcolor: 'grey.100' }, py: 1.5, px: 4 }}
            >
              {t('cta.callNow')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp(getEmergencyMessage())}
              sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }, py: 1.5, px: 4 }}
            >
              {t('cta.whatsapp')}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom fontWeight={700}>
            {t('faq.title')}
          </Typography>
          <Box sx={{ mt: 4 }}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Accordion key={num} sx={{ mb: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>{t(`faq.q${num}`)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{t(`faq.a${num}`)}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Blog Preview */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom fontWeight={700}>
            {t('blog.title')}
          </Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {['battery', 'monsoon', 'tyres', 'emergency'].map((key) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={key}>
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-4px)' },
                  }}
                  onClick={() => navigate('/blog')}
                >
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      {t(`blog.posts.${key}.title`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`blog.posts.${key}.excerpt`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button variant="outlined" color="primary" onClick={() => navigate('/blog')}>
              {t('blog.readMore')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Preview */}
      <Box sx={{ py: 6, bgcolor: 'grey.100' }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('contact.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {t('contact.subtitle')}
          </Typography>
          <Stack spacing={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PhoneIcon />}
              href={PHONE_TEL}
              fullWidth
            >
              {t('hero.callNow')} - {PHONE_DISPLAY}
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp(getEmergencyMessage())}
              fullWidth
              sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }}
            >
              {t('cta.whatsapp')}
            </Button>
            <Button variant="outlined" color="primary" size="large" onClick={() => navigate('/contact')} fullWidth>
              {t('nav.contact')}
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
