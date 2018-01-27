import App from './App';

import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have `button` element', () => {


    expect(shallow(<App />)
      .containsMatchingElement(<button>Add item</button>))
      .toBe(true);
  });
}); 