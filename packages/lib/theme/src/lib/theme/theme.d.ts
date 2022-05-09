import theme from './theme';

type CustomTheme = typeof theme;
interface Color {
    c25: string;
    c50: string;
    c100: string;
    c200: string;
    c300: string;
    c400: string;
    c500: string;
    c600: string;
    c700: string;
    c800: string;
    c900: string;
    c950: string;
    c975: string;
}
interface Gray extends Color {
  default: string;
}
interface Primary extends Color {
  default: string;
}
interface Error extends Color {
  default: string;
}
interface Warning extends Color {
  default: string;
}
interface Success extends Color {
  default: string;
}
interface BlueGray extends Color {
  default: string;
}
interface BlueLight extends Color {
  default: string;
}
interface Blue extends Color {
  default: string;
}
interface Indigo extends Color {
  default: string;
}
interface Purple extends Color {
  default: string;
}
interface Pink extends Color {
  default: string;
}
interface Rose extends Color {
  default: string;
}
interface Orange extends Color {
  default: string;
}

interface Color {
  white: string;
  black: string;
  transparent: 'transparent';
  logo: {
    red: string;
    yellow: string;
    blue: string;
  };
  primary: {
    light: Primary;
    dark: Primary;
  };
  gray: {
    light: Gray;
    dark: Gray;
  };
  danger: {
    light: Error;
    dark: Error;
  };
  warning: {
    light: Warning;
    dark: Warning;
  };
  success: {
    light: Success;
    dark: Success;
  };
}

interface FontSize {
  text: number;
  line: number;
}

interface Size {
  xs: FontSize;
  sm: FontSize;
  md: FontSize;
  lg: FontSize;
  xl: FontSize;
  xl2: FontSize;
}

interface Font {
  text: Size;
  display: Size;
  family: string;
  weight: 'normal' | 'medium' | 'semibold' | 'bold';
}

interface BreakPoint {
  desktop: string;
  tablet: string;
}

interface Border {
  radius: {
    normal: string;
    large: string;
    half: string;
  };
}

interface Padding {
  normal: number;
  large: number;
  huge: number;
  mega: number;
  giga: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    border: Border;
    bp: BreakPoint;
    color: Color;
    font: Font;
    padding: Padding;
  }
}
