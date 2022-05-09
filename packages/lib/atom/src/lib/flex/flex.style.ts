import { log } from '@torn/util';
import styled from 'styled-components';
import * as T from './flex.type';

const getDirection = ({ direction }: T.Flex) =>
  direction === 'column' ? `${direction};` : '';

const getGap = ({ gap }: T.Flex) => {
  if (Array.isArray(gap)) {
    const [rowGap, columnGap] = gap;
    log(gap);
    return `
    column-gap: ${columnGap / 16}rem;
    row-gap: ${rowGap / 16}rem;
    `;
  } else {
    return `
      gap: ${+gap / 16}rem;
    `;
  }
};

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
  display: flex;
  align-items: end;

  ${getDirection}
  ${getPadding}
  ${getGap}
`;
