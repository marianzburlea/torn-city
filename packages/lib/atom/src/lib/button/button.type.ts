import { ReactNode } from 'react';

export interface Button {
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'default' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
  // theme?: any;
}

export const defaultProps = {
  variant: 'primary',
  size: 'md',
  label: '',
  children: null,
};
