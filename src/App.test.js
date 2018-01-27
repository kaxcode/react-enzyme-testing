import App from './App';

import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have `button` element', () => {
    expect(shallow(<App />)
      .containsMatchingElement(<button disabled={true}>Add item</button>))
      .toBe(true);
  });

  it('should have `input` element', () => {
    expect(shallow(<App />)
      .containsMatchingElement(<input />))
      .toBe(true);
  });
}); 