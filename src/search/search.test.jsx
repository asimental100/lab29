import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Search } from './search';

describe('Search component', () => {
  afterEach(() => cleanup());

  it('should test search component', () => {
    const { asFragment } = render(<Search 
      url="https://xfiles-api.herokuapp.com/api/v1/characters/Flukeman"
      method="GET"
      json=""
      onChange={() => {}}
      onClick={() => {}}
    />);
  expect(asFragment()).toMatchSnapshot();
  });
});
