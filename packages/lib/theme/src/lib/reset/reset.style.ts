import { createGlobalStyle } from 'styled-components';

import * as T from './reset.type';

export const Reset = createGlobalStyle<T.Reset>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  html,
  #__next {
    margin: 0;
    height: 100%;
  }

  body {
    font-family: ${({ font }) => font};
  }
`;
