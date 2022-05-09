import { render } from '@testing-library/react';

import LibUtil from './lib-util';

describe('LibUtil', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibUtil />);
    expect(baseElement).toBeTruthy();
  });
});
