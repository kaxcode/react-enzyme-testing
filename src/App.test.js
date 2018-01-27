import App from './App';

import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have `button` element', () => {
    expect(shallow(<App />)
      .containsMatchingElement(<button>Add item</button>))
      .toBe(true);
  });

  it('`button` should be disabled', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button').first();
    expect(button.props().disabled)
      .toBe(true);
  });

  it('should have `input` element', () => {
    expect(shallow(<App />)
      .containsMatchingElement(<input />))
      .toBe(true);
  });
}); 