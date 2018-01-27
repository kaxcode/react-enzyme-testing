import App from './App';

import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should have `button` element', () => {
    expect(wrapper
      .containsMatchingElement(<button>Add item</button>))
      .toBe(true);
  });

  it('`button` should be disabled', () => {
    const button = wrapper.find('button').first();
    expect(button.props().disabled)
      .toBe(true);
  });

  it('should have `input` element', () => {
    expect(wrapper
      .containsMatchingElement(<input />))
      .toBe(true);
  });
}); 