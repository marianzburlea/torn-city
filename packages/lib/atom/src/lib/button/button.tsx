import * as S from './button.style';
import * as T from './button.type';

const Button = ({ children, label, onClick, size, variant }: T.Button) => {
  return (
    <S.Button onClick={onClick} size={size} variant={variant}>
      {children || label}
    </S.Button>
  );
};

Button.defaultProps = T.defaultProps;

export default Button;
