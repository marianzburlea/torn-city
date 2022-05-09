import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibTemplateProps {}

const StyledLibTemplate = styled.div`
  color: pink;
`;

export function LibTemplate(props: LibTemplateProps) {
  return (
    <StyledLibTemplate>
      <h1>Welcome to LibTemplate!</h1>

      <ul>
        <li>
          <Link to="/">lib-template root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the lib-template root route.</div>}
      />
    </StyledLibTemplate>
  );
}

export default LibTemplate;
