import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Home } from './home';

describe('Home component', () => {
  afterEach(() => cleanup());

  it('should render Home component', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
