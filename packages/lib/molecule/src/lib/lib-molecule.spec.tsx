import { render } from '@testing-library/react';

import LibMolecule from './lib-molecule';

describe('LibMolecule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibMolecule />);
    expect(baseElement).toBeTruthy();
  });
});
