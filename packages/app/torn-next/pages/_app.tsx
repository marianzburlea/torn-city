import { Reset, themeTornNext } from '@torn/theme';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const CustomTornApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={themeTornNext}>
      <Reset />
      <header>Header</header>
      <aside>aside</aside>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>footer</footer>
    </ThemeProvider>
  );
};

export default CustomTornApp;
