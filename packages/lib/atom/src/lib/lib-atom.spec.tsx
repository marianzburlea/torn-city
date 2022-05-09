import { render } from '@testing-library/react';

import LibAtom from './lib-atom';

describe('LibAtom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibAtom />);
    expect(baseElement).toBeTruthy();
  });
});
