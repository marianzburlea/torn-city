// import { log } from '@torn/util';
import Icomoon, { IconProps, iconList } from 'react-icomoon';
import { iconSet } from './torn';

const Icon = ({ icon, color, size }: IconProps) => {
  // log(iconList(newSet));
  // 'menu', 'user-tie', 'file-text', 'binoculars', 'search', 'clock', 'triangle-up', 'triangle-right', 'triangle-left', 'triangle-down', 'chevron-right', 'chevron-left', 'chevron-down', 'chevron-up', 'hospital-o', 'fingerprint', 'user-minus', 'user-plus', 'calendar', 'file-text', 'loop', 'users', 'trophy', 'bubbles', 'dice', 'grid', 'newspaper', 'archery', 'graduation', 'key', 'dumbbell', 'briefcase', 'city', 'drawer', 'home'
  return <Icomoon iconSet={iconSet} icon={icon} color={color} size={size} />;
};

export default Icon;
