import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibMoleculeProps {}

const StyledLibMolecule = styled.div`
  color: pink;
`;

export function LibMolecule(props: LibMoleculeProps) {
  return (
    <StyledLibMolecule>
      <h1>Welcome to LibMolecule!</h1>

      <ul>
        <li>
          <Link to="/">lib-molecule root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the lib-molecule root route.</div>}
      />
    </StyledLibMolecule>
  );
}

export default LibMolecule;
