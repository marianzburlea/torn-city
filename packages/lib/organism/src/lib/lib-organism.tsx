import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibOrganismProps {}

const StyledLibOrganism = styled.div`
  color: pink;
`;

export function LibOrganism(props: LibOrganismProps) {
  return (
    <StyledLibOrganism>
      <h1>Welcome to LibOrganism!</h1>

      <ul>
        <li>
          <Link to="/">lib-organism root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the lib-organism root route.</div>}
      />
    </StyledLibOrganism>
  );
}

export default LibOrganism;
