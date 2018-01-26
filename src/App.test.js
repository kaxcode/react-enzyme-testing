import App from './App';

import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have `th` "Items"', () => {
    const wrapper = shallow(
      <App />
    )
  });
}); 