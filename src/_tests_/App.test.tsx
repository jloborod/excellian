import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { App }  from '../App';

describe('<App>', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);

  });

  it('Should render the expected template', () => {
      expect(wrapper).toMatchSnapshot();
  })
})