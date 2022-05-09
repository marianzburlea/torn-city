import { Icon } from '../icon';
import * as S from './button.style';
import * as T from './button.type';

const Button = ({
  children,
  label,
  onClick,
  size = 'md',
  variant,
  iconLead,
  iconTrail,
  fullWidth,
}: T.Button) => {
  return (
    <S.Button
      onClick={onClick}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
    >
      {iconLead && <Icon icon={iconLead} size={T.IconSizeMap[size]} />}
      !!!<S.Text>{children || label}</S.Text>
      {iconTrail && <Icon icon={iconTrail} size={T.IconSizeMap[size]} />}
    </S.Button>
  );
};

Button.defaultProps = T.defaultProps;

export default Button;
