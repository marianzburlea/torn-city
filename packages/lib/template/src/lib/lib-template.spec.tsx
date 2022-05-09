import { render } from '@testing-library/react';

import LibTemplate from './lib-template';

describe('LibTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
