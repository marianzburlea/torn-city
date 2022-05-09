import * as T from './flex.type';
import * as S from './flex.style';

const Flex = ({ children }: T.Flex) => {
  return <S.Flex>{children}</S.Flex>;
};

Flex.defaultProps = T.defaultProps;

export default Flex;
