import { Reset, themeTornSPA } from '@torn/theme';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider theme={themeTornSPA}>
      <Reset />
      <App />
    </ThemeProvider>
  </StrictMode>
);
