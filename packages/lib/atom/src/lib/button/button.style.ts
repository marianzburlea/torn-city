import styled from 'styled-components';

import * as T from './button.type';

const paddingMap = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 28,
};

const getPadding = ({ size = 'md' }: T.Button) => {
  return `${paddingMap[size] / 16}rem ${paddingMap[size] / 8}rem`;
};

export const Button = styled.button<T.Button>`
  padding: ${getPadding};
  border-radius: 0.25rem;
  border: 0;
  background-color: ${({ theme }) => theme.color.primary.light.c600};
  border: 0.125rem solid ${({ theme }) => theme.color.primary.light.c700};

  color: ${({ theme }) => theme.color.primary.light.c50};

  @media screen and (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.color.primary.dark.c50};

    background-color: ${({ theme }) => theme.color.primary.dark.c600};
    border: 0.125rem solid ${({ theme }) => theme.color.primary.dark.c700};
  }
`;
