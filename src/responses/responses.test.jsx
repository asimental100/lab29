import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Responses } from './responses';

describe('Responses component', () => {
  afterEach(() => cleanup());

  it('should return some json', () => {
    const { asFragment } = render(<Responses
      response={[
        {
          "name": "Flukeman",
          "gender": "Genderless (possibly formerly male)",
          "status": "Alive",
          "born": null,
          "occupation": null,
          "rank": null,
          "affiliations": null,
          "portrayedby": "Darin Morgan",
          "image": "https://vignette.wikia.nocookie.net/x-files/images/e/e6/Flukeman_The_X_Files.png/revision/latest/scale-to-width-down/310?cb=20160216194606",
          "description": "The Flukeman was a genetic mutant that found its way into the New Jersey sewer system and killed several people, before being washed up in Martha's Vineyard. (TXF: \"The Host\", \"Pusher\")",
          "categories": [
          "Beings and creatures",
          "Monster of the Week",
          "Mutants"
          ]
        }
      ]}
      />);
  expect(asFragment()).toMatchSnapshot();
  });
});
