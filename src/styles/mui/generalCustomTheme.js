import { createTheme } from '@mui/material';
import { primary, dark, secondary, muted, darker } from '../common/colors';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '52px',
      fontWeight: '500',
      color: '#2A2E43',

      '@media (min-width: 768px) and (max-width: 991px)': {
        fontSize: '45px',
      },

      '@media (max-width: 768px) and (min-width: 575px)': {
        fontSize: '38px',
      },

      '@media (max-width: 575px)': {
        fontSize: '34px',
      },
    },

    h2: {
      fontSize: '42px',
      fontWeight: '500',
      textTransform: 'capitalize',
      color: '#2A2E43',

      '@media (min-width: 768px) and (max-width: 991px)': {
        fontSize: '38px',
      },

      '@media (max-width: 768px) and (min-width: 575px)': {
        fontSize: '32px',
      },

      '@media (max-width: 575px)': {
        fontSize: '30px',
      },
    },

    h3: {
      fontSize: '36px',
      fontWeight: '500',
      color: '#2A2E43',

      '@media (min-width: 768px) and (max-width: 991px)': {
        fontSize: '32px',
      },

      '@media (max-width: 768px) and (min-width: 575px)': {
        fontSize: '28px',
      },

      '@media (max-width: 575px)': {
        fontSize: '24px',
      },
    },

    h4: {
      fontSize: '34px',
      fontWeight: '500',
      color: '#2A2E43',

      '@media (min-width: 768px) and (max-width: 991px)': {
        fontSize: '28px',
      },

      '@media (max-width: 768px) and (min-width: 575px)': {
        fontSize: '24px',
      },

      '@media (max-width: 575px)': {
        fontSize: '20px',
      },
    },

    h5: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#2A2E43',

      '@media (min-width: 768px) and (max-width: 991px)': {
        fontSize: '23px',
      },

      '@media (max-width: 768px) and (min-width: 575px)': {
        fontSize: '22px',
      },

      '@media (max-width: 575px)': {
        fontSize: '20px',
      },
    },

    h6: {
      fontSize: '20px',
      fontWeight: '400',
      color: '#2A2E43',

      '@media (min-width: 768px) and (max-width: 991px)': {
        fontSize: '19px',
      },

      '@media (max-width: 768px) and (min-width: 575px)': {
        fontSize: '18px',
      },

      '@media (max-width: 575px)': {
        fontSize: '17px',
      },
    },

    pageTitle: {
      fontWeight: 700,
      textTransform: 'capitalize',
      fontSize: '18px',
      color: darker,
    },

    subHead: {
      marginBottom: '20px',
      fontSize: '14px',
      opacity: 0.7,
    },

    cardHead: {
      fontWeight: 700,
      fontSize: 18,
    },

    logo: {
      fontWeight: 700,
      fontSize: '20px',
    },

    clock: {
      fontWeight: 600,
      fontSize: '20px',
      fontFamily: 'Poppins, sans-serif',
    },

    label: {
      display: 'block',
      fontSize: '15px',
      fontWeight: 500,
      marginBottom: '4px',
    },

    body1: {
      display: 'block',
      fontSize: '16px',
      fontWeight: 400,
      wordBreak: 'break-word',
    },

    body2: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 400,
      wordBreak: 'break-word',
    },

    body3: {
      display: 'block',
      fontSize: '13px',
      fontWeight: 400,
      wordBreak: 'break-word',
    },

    error: {
      display: 'block',
      fontSize: '11px',
      fontWeight: 400,
      marginTop: '3px',
      color: '#dc3545',
    },
    fontFamily: 'var(--font-notoSans), Roboto, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1390,
    },
  },
  components: {
    MuiContainer: {
      variants: [
        {
          props: { variant: 'public' },
          style: {
            maxWidth: '1140px !important',
            margin: 'auto auto',
            paddingLeft: '16px !important',
            paddingRight: '16px !important',

            '@media screen and (min-width: 1200px)': {
              maxWidth: '1200px',
            },

            '@media screen and (max-width: 768px)': {
              margin: '30px auto',
            },
          },
        },
        {
          props: { variant: undefined },
          style: {
            width: '100%',

            '@media screen and (min-width: 768px)': {
              width: '100%',
              maxWidth: '1500px',
              paddingLeft: 0,
              paddingRight: 0,
            },

            '@media screen and (max-width: 768px)': {
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        },
        {
          props: { variant: 'portal' },
          style: {
            maxWidth: '1650px !important',

            '@media (min-width: 991px)': {
              width: '100%',
              maxWidth: '100%',
              padding: '70px',
            },

            '@media (min-width: 768px) and (max-width: 991px)': {
              width: '100%',
              maxWidth: '100%',
              padding: '30px',
            },

            '@media (max-width: 768px) and (min-width: 570px)': {
              width: '100%',
              maxWidth: '100%',
              padding: '40px 30px',
            },

            '@media (max-width: 570px)': {
              padding: '30px 20px',
            },
          },
        },
      ],
    },

    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            textTransform: 'capitalize',
            fontSize: '16px',
            fontWeight: 500,
            borderRadius: '5px',
            transition: 'all 0.4s',
            background: primary,
            border: '1px solid transparent',
          },
        },
        {
          props: { variant: 'contained', color: 'error' },
          style: {
            textTransform: 'capitalize',
            fontSize: '16px',
            fontWeight: 500,
            borderRadius: '5px',
            transition: 'all 0.4s',
            border: '1px solid transparent',
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            textTransform: 'capitalize',
            fontSize: '16px',
            fontWeight: 500,
            borderRadius: '5px',
            transition: 'all 0.4s',
            background: secondary,
            color: dark,
            border: '1px solid transparent',
            '&:hover': {
              background: dark,
              color: secondary,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'success' },
          style: {
            border: '1px solid transparent',
            fontSize: '16px',
            fontWeight: 500,
            textTransform: 'capitalize',
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: 'white',
          borderRadius: '5px',
          padding: '10px 20px',
          boxShadow: '2px 2px 10px #d7d7d7',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },

    MuiTablePagination: {
      styleOverrides: {
        root: {
          '& p': {
            margin: 0,
          },
        },
      },
    },

    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          fontSize: '15.2px',
          fontWeight: 'bold !important',
          transition: ({ theme: MuiTheme }) => MuiTheme.transitions.create(['background-color', 'color']),
          '&:hover': {
            color: primary,
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        scrollButtons: {
          '&.Mui-disabled': {
            opacity: '0.3',
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '13px',
          fontWeight: '500',
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    dark: {
      main: dark,
    },
    muted: {
      main: muted,
    },
  },
});

export default theme;
