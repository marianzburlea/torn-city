import { ReactNode } from 'react';

export interface Flex {
  direction?: 'row' | 'column';
  padding?: number[] | number;
  children?: ReactNode;
  gap: number | number[];
}

export const defaultProps = {
  direction: 'row',
  children: null,
  gap: 0,
};
