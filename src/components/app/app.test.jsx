import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from './app';

describe('App component', () => {
  afterEach(() => cleanup());

  it('should render App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
