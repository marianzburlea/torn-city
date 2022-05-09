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

interface LinkButton {
  icon?: Icon;
  label?: string;
  message?: string;
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'default' | 'info';
}

export interface Nav {
  list?: LinkButton[];
}

export const defaultProps = {
  list: [],
};
