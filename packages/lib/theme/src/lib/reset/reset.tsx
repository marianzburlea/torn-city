import * as S from './reset.style';
import * as T from './reset.type';

const Reset = ({ font }: T.Reset) => {
  return <S.Reset font={font} />;
};

Reset.defaultProps = T.defaultProps;

export default Reset;
