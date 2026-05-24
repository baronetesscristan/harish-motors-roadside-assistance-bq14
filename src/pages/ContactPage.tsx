import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { openWhatsApp, getContactFormMessage, getEmergencyMessage, PHONE_TEL, PHONE_DISPLAY } from '../utils/whatsapp';

const serviceOptions = [
  'Battery Jump Start',
  'New Battery Installation',
  'Fuel Delivery',
  'Towing Service',
  'Tyre Puncture / Stepney Change',
  'Engine Overheating',
  'Starting Problems',
  'Key Lockout',
  'Other',
];

export default function ContactPage() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', phone: '', location: '', service: '', issue: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(getContactFormMessage(form.name, form.phone, form.location, form.service, form.issue));
  };

  return (
    <>
      <Helmet>
        <title>Contact Harish Motors - 24/7 Roadside Assistance Delhi | Call 99586 28182</title>
        <meta name="description" content="Contact Harish Motors for 24/7 roadside assistance in Delhi NCR. Call 99586 28182 or WhatsApp for immediate help. Located at Kilokari, New Delhi." />
        <link rel="canonical" href="https://harishmotors.in/contact" />
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
            {t('contact.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {t('contact.subtitle')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Card sx={{ bgcolor: 'primary.main', color: 'common.white' }}>
                  <CardContent sx={{ textAlign: 'center', py: 4 }}>
                    <PhoneIcon sx={{ fontSize: 48, mb: 2 }} />
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {t('contact.form.emergency')}
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      href={PHONE_TEL}
                      sx={{ bgcolor: 'common.white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' }, mt: 1 }}
                      startIcon={<PhoneIcon />}
                    >
                      {PHONE_DISPLAY}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={3}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <PhoneIcon color="primary" />
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary">{t('contact.phone')}</Typography>
                          <Typography variant="body1" fontWeight={600}>{PHONE_DISPLAY}</Typography>
                        </Box>
                      </Stack>
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <LocationOnIcon color="primary" />
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary">{t('contact.address')}</Typography>
                          <Typography variant="body1">{t('contact.addressText')}</Typography>
                        </Box>
                      </Stack>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <AccessTimeIcon color="primary" />
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary">{t('contact.hours')}</Typography>
                          <Typography variant="body1" fontWeight={600}>{t('contact.hoursText')}</Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>

                <Stack spacing={1}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<WhatsAppIcon />}
                    onClick={() => openWhatsApp(getEmergencyMessage())}
                    sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' }, py: 1.5 }}
                  >
                    {t('contact.whatsapp')}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    startIcon={<PhoneIcon />}
                    href={PHONE_TEL}
                    sx={{ py: 1.5 }}
                  >
                    {t('cta.callNow')}
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {t('contact.whatsapp')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {t('contact.subtitle')}
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.name')}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.phone')}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.location')}
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        select
                        label={t('contact.form.service')}
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        required
                      >
                        {serviceOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label={t('contact.form.issue')}
                        value={form.issue}
                        onChange={(e) => setForm({ ...form, issue: e.target.value })}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        size="large"
                        fullWidth
                        startIcon={<SendIcon />}
                        sx={{ py: 1.5 }}
                      >
                        {t('contact.form.submit')}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map */}
      <Box sx={{ py: 4, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={700} gutterBottom textAlign="center">
            {t('contact.address')}
          </Typography>
          <Box
            sx={{ width: '100%', height: 300, borderRadius: 2, overflow: 'hidden', mt: 2 }}
          >
            <iframe
              title="Harish Motors Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.24!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzQ4LjAiTiA3N8KwMTQnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
