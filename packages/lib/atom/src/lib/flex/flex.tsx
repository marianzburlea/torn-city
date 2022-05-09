import * as T from './flex.type';
import * as S from './flex.style';

const Flex = ({ children, gap }: T.Flex) => {
  return <S.Flex gap={gap}>{children}</S.Flex>;
};

Flex.defaultProps = T.defaultProps;

export default Flex;
