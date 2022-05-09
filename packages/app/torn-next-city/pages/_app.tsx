import { Reset, themeTornNextPages } from '@torn/theme';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const CustomTornCityApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={themeTornNextPages}>
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

export default CustomTornCityApp;
