import { ReactNode } from 'react';

type Icon =
  | ''
  | 'menu'
  | 'user-tie'
  | 'file-text'
  | 'binoculars'
  | 'search'
  | 'clock'
  | 'triangle-up'
  | 'triangle-right'
  | 'triangle-left'
  | 'triangle-down'
  | 'chevron-right'
  | 'chevron-left'
  | 'chevron-down'
  | 'chevron-up'
  | 'hospital-o'
  | 'fingerprint'
  | 'user-minus'
  | 'user-plus'
  | 'calendar'
  | 'file-text'
  | 'loop'
  | 'users'
  | 'trophy'
  | 'bubbles'
  | 'dice'
  | 'grid'
  | 'newspaper'
  | 'archery'
  | 'graduation'
  | 'key'
  | 'dumbbell'
  | 'briefcase'
  | 'city'
  | 'drawer'
  | 'home';

export const IconSizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  xxl: 32,
};

export interface Button {
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'default' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
  // theme?: any;
  leadIcon?: boolean;
  trailIcon?: boolean;
  iconLead?: Icon;
  iconTrail?: Icon;
  fullWidth?: boolean;
}

export const defaultProps = {
  variant: 'primary',
  size: 'md',
  label: '',
  children: null,
  iconLead: false,
  iconTrail: false,
  fullWidth: false,
};
