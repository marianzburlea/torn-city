import { ReactNode } from 'react';

export interface Flex {
  direction?: 'row' | 'column';
  padding?: number[] | number;
  children?: ReactNode;
}

export const defaultProps = {
  direction: 'row',
  children: null,
};
