import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibAtomProps {}

const StyledLibAtom = styled.div`
  color: pink;
`;

export function LibAtom(props: LibAtomProps) {
  return (
    <StyledLibAtom>
      <h1>Welcome to LibAtom!</h1>

      <ul>
        <li>
          <Link to="/">lib-atom root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the lib-atom root route.</div>} />
    </StyledLibAtom>
  );
}

export default LibAtom;
