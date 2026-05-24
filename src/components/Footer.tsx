import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { PHONE_DISPLAY, PHONE_TEL } from '../utils/whatsapp';

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.areas'), path: '/areas' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.contact'), path: '/contact' },
    { label: t('nav.pricing'), path: '/pricing' },
    { label: t('nav.blog'), path: '/blog' },
  ];

  const serviceAreas = [
    { label: t('areas.saritaVihar.title'), path: '/areas/sarita-vihar' },
    { label: t('areas.dhaulaKuan.title'), path: '/areas/dhaula-kuan' },
    { label: t('areas.indiaGate.title'), path: '/areas/india-gate' },
    { label: t('areas.noida.title'), path: '/areas/noida' },
    { label: t('areas.ghazipurMandi.title'), path: '/areas/ghazipur-mandi' },
    { label: t('areas.chidiyaGhar.title'), path: '/areas/chidiya-ghar' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'common.white',
        pt: 6,
        pb: { xs: 10, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <Box component="img" src="/logo.webp" alt="Harish Motors" sx={{ height: 40 }} />
              <Typography variant="h6" fontWeight={700}>
                {t('brand')}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.85 }}>
              {t('footer.description')}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton href={PHONE_TEL} sx={{ color: 'common.white' }}>
                <PhoneIcon />
              </IconButton>
              <IconButton
                href="https://wa.me/919958628182"
                target="_blank"
                sx={{ color: '#25D366' }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
              {t('footer.quickLinks')}
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  component="button"
                  color="inherit"
                  underline="hover"
                  variant="body2"
                  onClick={() => navigate(link.path)}
                  sx={{ textAlign: 'left', opacity: 0.85 }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
              {t('footer.serviceAreas')}
            </Typography>
            <Stack spacing={1}>
              {serviceAreas.map((area) => (
                <Link
                  key={area.path}
                  component="button"
                  color="inherit"
                  underline="hover"
                  variant="body2"
                  onClick={() => navigate(area.path)}
                  sx={{ textAlign: 'left', opacity: 0.85 }}
                >
                  {area.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
              {t('footer.contactInfo')}
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">{PHONE_DISPLAY}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOnIcon fontSize="small" sx={{ mt: 0.25 }} />
                <Typography variant="body2">{t('contact.addressText')}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2">{t('contact.hoursText')}</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} {t('brand')} - {t('footer.rights')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
