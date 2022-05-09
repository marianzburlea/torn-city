import { getNuanceList } from '@torn/util';
import theme from './theme';

const gray = getNuanceList(221, 13);
const primary = getNuanceList(208, 82);
const success = getNuanceList(152, 82);
const warning = getNuanceList(34, 94);
const danger = getNuanceList(4, 86);

const themeTornNext = {
  ...theme,
  color: {
    // ...theme.color,
    gray,
    primary,
    warning,
    success,
    danger,
  },
};

export { themeTornNext };
