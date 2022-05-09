import { Button } from '@torn/atom';
import { log } from '@torn/util';
import * as T from './nav.type';
import * as S from './nav.style';

const Nav = ({ list }: T.Nav) => {
  return (
    <S.Nav>
      {(list || []).map(({ label, icon = 'home', message, variant }) => (
        <Button
          key={`${label}-${icon}`}
          onClick={() => log('Message: ', message)}
          iconLead={icon || 'home'}
          variant={variant}
          fullWidth
        >
          {label}
        </Button>
      ))}
    </S.Nav>
  );
};

Nav.defaultProps = T.defaultProps;

export default Nav;
