import { Route, Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LibUtilProps {}

export function LibUtil(props: LibUtilProps) {
  return (
    <div>
      <h1>Welcome to LibUtil!</h1>

      <ul>
        <li>
          <Link to="/">lib-util root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the lib-util root route.</div>} />
    </div>
  );
}

export default LibUtil;
