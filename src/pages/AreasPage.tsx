import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { openWhatsApp, getAreaRequestMessage, PHONE_TEL } from '../utils/whatsapp';

const mainAreas = [
  { key: 'saritaVihar', slug: 'sarita-vihar', time: '20-30' },
  { key: 'dhaulaKuan', slug: 'dhaula-kuan', time: '25-35' },
  { key: 'indiaGate', slug: 'india-gate', time: '20-30' },
  { key: 'chidiyaGhar', slug: 'chidiya-ghar', time: '20-30' },
  { key: 'ghazipurMandi', slug: 'ghazipur-mandi', time: '25-35' },
  { key: 'noida', slug: 'noida', time: '30-40' },
];

const otherAreas = [
  { key: 'delhi', slug: 'delhi', time: '20-40' },
  { key: 'gurgaon', slug: 'gurgaon', time: '30-45' },
  { key: 'ghaziabad', slug: 'ghaziabad', time: '30-45' },
];

export default function AreasPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Service Areas - Harish Motors | Roadside Assistance Delhi, Noida, Gurgaon, Ghaziabad</title>
        <meta name="description" content="Harish Motors covers all Delhi NCR for roadside assistance - Sarita Vihar, Dhaula Kuan, India Gate, Noida, Gurgaon, Ghaziabad. Fast 20-40 min response. Call 99586 28182." />
        <link rel="canonical" href="https://harishmotors.in/areas" />
      </Helmet>

      <Box
        sx={{
          py: 8,
          background: `linear-gradient(rgba(27,94,32,0.9), rgba(46,125,50,0.85)), url('/delhi-coverage.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'common.white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" fontWeight={800} gutterBottom>
            {t('areas.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {t('areas.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Main Areas */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('areas.mainAreas')}
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {mainAreas.map((area) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={area.key}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <LocationOnIcon color="primary" sx={{ fontSize: 32 }} />
                      <Typography variant="h5" fontWeight={700}>
                        {t(`areas.${area.key}.title`)}
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {t(`areas.${area.key}.desc`)}
                    </Typography>
                    <Stack spacing={1} sx={{ mb: 2 }}>
                      <Chip
                        icon={<AccessTimeIcon />}
                        label={`${t('areas.responseTime')}: ${area.time} ${t('areas.minutes')}`}
                        size="small"
                        variant="outlined"
                      />
                      <Chip
                        icon={<CheckCircleIcon />}
                        label={t('areas.servicesAvailable')}
                        size="small"
                        color="success"
                        variant="outlined"
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => navigate(`/areas/${area.slug}`)}
                      >
                        {t(`areas.${area.key}.title`)}
                      </Button>
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<WhatsAppIcon />}
                          onClick={() => openWhatsApp(getAreaRequestMessage(t(`areas.${area.key}.title`)))}
                          sx={{ flex: 1 }}
                        >
                          {t('areas.requestHelp')}
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<PhoneIcon />}
                          href={PHONE_TEL}
                          sx={{ flex: 1 }}
                        >
                          {t('cta.callNow')}
                        </Button>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Other Areas */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('areas.otherAreas')}
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {otherAreas.map((area) => (
              <Grid size={{ xs: 12, sm: 4 }} key={area.key}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <LocationOnIcon color="secondary" sx={{ fontSize: 28 }} />
                      <Typography variant="h5" fontWeight={700}>
                        {t(`areas.${area.key}.title`)}
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {t(`areas.${area.key}.desc`)}
                    </Typography>
                    <Chip
                      icon={<AccessTimeIcon />}
                      label={`${area.time} ${t('areas.minutes')}`}
                      size="small"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => openWhatsApp(getAreaRequestMessage(t(`areas.${area.key}.title`)))}
                        sx={{ flex: 1 }}
                      >
                        {t('areas.requestHelp')}
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
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
    </>
  );
}
