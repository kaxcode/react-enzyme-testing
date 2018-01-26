import App from './App';

import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have `th` "Items"', () => {


    expect(shallow(<App />)
      .contains(<th>Items</th>))
      .toBe(true);
  });
}); 