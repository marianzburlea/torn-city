import { render } from '@testing-library/react';

import LibOrganism from './lib-organism';

describe('LibOrganism', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibOrganism />);
    expect(baseElement).toBeTruthy();
  });
});
