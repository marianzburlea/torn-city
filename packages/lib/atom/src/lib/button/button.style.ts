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

export const Text = styled.span<T.Button>`
  flex-grow: 1;
`;

export const Button = styled.button<T.Button>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: ${getPadding};
  border-radius: 0.25rem;
  border: 0;
  background-color: ${({ theme, variant = 'primary' }) =>
    theme.color[variant].light.c600};
  border: 0.125rem solid
    ${({ theme, variant = 'primary' }) => theme.color[variant].light.c700};

  color: ${({ theme, variant = 'primary' }) => theme.color[variant].light.c50};
  box-shadow: 0.125rem 0.125rem 0.25rem
    ${({ theme, variant = 'primary' }) => theme.color[variant].light.c100};

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  @media screen and (prefers-color-scheme: dark) {
    color: ${({ theme, variant = 'primary' }) => theme.color[variant].dark.c50};

    background-color: ${({ theme, variant = 'primary' }) =>
      theme.color[variant].dark.c600};
    border: 0.125rem solid
      ${({ theme, variant = 'primary' }) => theme.color[variant].dark.c700};
  }
`;
