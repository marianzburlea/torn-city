import styled from 'styled-components';
import * as T from './flex.type';

const getDirection = ({ direction }: T.Flex) =>
  direction === 'column' ? `${direction};` : '';

const getPadding = ({ padding }: T.Flex) => {
  if (Array.isArray(padding) && padding.length) {
    return `${padding.map((pad) => `${pad / 16}rem`).join(' ')};`;
  }

  if (typeof padding === 'number') {
    return `${padding / 16}rem;`;
  }

  return '';
};

export const Flex = styled.div<T.Flex>`
  ${getDirection}
  ${getPadding}
`;
