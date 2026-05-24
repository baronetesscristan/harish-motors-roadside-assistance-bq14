import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import { openWhatsApp, getEmergencyMessage, PHONE_DISPLAY, PHONE_TEL } from '../utils/whatsapp';
import Footer from './Footer';

const navItems = [
  { key: 'home', path: '/', icon: <HomeIcon /> },
  { key: 'services', path: '/services', icon: <BuildIcon /> },
  { key: 'areas', path: '/areas', icon: <MapIcon /> },
  { key: 'about', path: '/about', icon: <InfoIcon /> },
  { key: 'contact', path: '/contact', icon: <PhoneIcon /> },
  { key: 'pricing', path: '/pricing', icon: <AttachMoneyIcon /> },
  { key: 'blog', path: '/blog', icon: <ArticleIcon /> },
];

export default function Layout() {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const isHindi = i18n.language === 'hi';

  const toggleLanguage = () => {
    const newLang = isHindi ? 'en' : 'hi';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  const currentNavIndex = navItems.findIndex((item) => {
    if (item.path === '/') return location.pathname === '/';
    return location.pathname.startsWith(item.path);
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" color="primary" sx={{ zIndex: (t) => t.zIndex.appBar }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            {isMobile && (
              <IconButton color="inherit" edge="start" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
            <Box
              component="img"
              src="/logo.webp"
              alt="Harish Motors Logo"
              sx={{ height: 36, cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 700,
                cursor: 'pointer',
                display: { xs: 'none', sm: 'block' },
              }}
              onClick={() => navigate('/')}
            >
              {t('brand')}
            </Typography>
          </Stack>

          {!isMobile && (
            <Stack direction="row" spacing={1}>
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  color="inherit"
                  onClick={() => navigate(item.path)}
                  sx={{
                    fontWeight: location.pathname === item.path ? 700 : 400,
                    borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
                    borderRadius: 0,
                    px: 1.5,
                  }}
                >
                  {t(`nav.${item.key}`)}
                </Button>
              ))}
            </Stack>
          )}

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" sx={{ color: 'inherit', fontSize: '0.7rem' }}>
              EN
            </Typography>
            <Switch
              size="small"
              checked={isHindi}
              onChange={toggleLanguage}
              sx={{
                '& .MuiSwitch-thumb': { bgcolor: 'common.white' },
                '& .MuiSwitch-track': { bgcolor: 'rgba(255,255,255,0.4)' },
              }}
            />
            <Typography variant="caption" sx={{ color: 'inherit', fontSize: '0.7rem' }}>
              हिं
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              href={PHONE_TEL}
              startIcon={<PhoneIcon />}
              sx={{ display: { xs: 'none', sm: 'inline-flex' }, ml: 1 }}
            >
              {PHONE_DISPLAY}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280 } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight={700} color="primary">
            {t('brand')}
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                selected={currentNavIndex === navItems.indexOf(item)}
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={t(`nav.${item.key}`)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            href={PHONE_TEL}
            startIcon={<PhoneIcon />}
            sx={{ mb: 1 }}
          >
            {t('hero.callNow')}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="success"
            startIcon={<WhatsAppIcon />}
            onClick={() => openWhatsApp(getEmergencyMessage())}
          >
            {t('cta.whatsapp')}
          </Button>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Footer />

      {isMobile && (
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: (t) => t.zIndex.appBar }}
          elevation={8}
        >
          <BottomNavigation
            value={currentNavIndex}
            onChange={(_, newValue) => {
              navigate(navItems[newValue].path);
            }}
            showLabels
            sx={{
              height: 64,
              '& .MuiBottomNavigationAction-root': {
                minWidth: 'auto',
                px: 0.5,
              },
            }}
          >
            {navItems.slice(0, 5).map((item) => (
              <BottomNavigationAction
                key={item.key}
                label={t(`nav.${item.key}`)}
                icon={item.icon}
                sx={{
                  '&.Mui-selected': { color: 'primary.main' },
                  '& .MuiBottomNavigationAction-label': { fontSize: '0.65rem' },
                }}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}

      <Fab
        color="success"
        sx={{
          position: 'fixed',
          bottom: { xs: 80, md: 24 },
          right: 16,
          bgcolor: '#25D366',
          '&:hover': { bgcolor: '#128C7E' },
          zIndex: (t) => t.zIndex.fab,
        }}
        onClick={() => openWhatsApp(getEmergencyMessage())}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: 28 }} />
      </Fab>

      {isMobile && <Box sx={{ height: 64 }} />}
    </Box>
  );
}
