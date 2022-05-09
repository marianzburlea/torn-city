import { getNuanceList } from '@torn/util';
import { DefaultTheme } from 'styled-components';

const gray = getNuanceList(221, 13);
const primary = getNuanceList(260, 77);
const success = getNuanceList(152, 82);
const warning = getNuanceList(34, 94);
const danger = getNuanceList(4, 86);

const theme: DefaultTheme = {
  bp: {
    desktop: 1440,
    tablet: 768,
  },
  border: {
    radius: {
      normal: 8,
      large: 16,
      half: '50%',
    },
  },
  padding: {
    normal: 8,
    large: 16,
    huge: 32,
    mega: 48,
    giga: 64,
  },
  color: {
    white: 'rgba(255, 255, 255, 1)',
    whiteAlpha: (alpha: number) => `rgba(255, 255, 255, ${alpha})`,
    black: 'rgba(0, 0, 0, 1)',
    transparent: 'transparent',
    logo: {
      red: '#CC2424',
      yellow: '#E6D722',
      blue: '#3D7EE8',
    },
    // 221 13,
    gray,
    primary,
    warning,
    success,
    danger,
  },
  font: {
    text: {
      xs: {
        text: 12,
        line: 18,
      },
      sm: {
        text: 14,
        line: 20,
      },
      md: {
        text: 16,
        line: 24,
      },
      lg: {
        text: 18,
        line: 28,
      },
      xl: {
        text: 20,
        line: 30,
      },
      xl2: {
        text: 20,
        line: 30,
      },
    },
    display: {
      xs: {
        text: 24,
        line: 36,
      },
      sm: {
        text: 30,
        line: 38,
      },
      md: {
        text: 36,
        line: 44,
      },
      lg: {
        text: 48,
        line: 60,
      },
      xl: {
        text: 60,
        line: 72,
      },
      xl2: {
        text: 72,
        line: 90,
      },
    },
    family: {
      inter: 'Inter',
    },
  },
};

export default theme;
