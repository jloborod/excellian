import * as React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { App }  from '../App';

configure({adapter: new Adapter()});

describe('<App>', () => {
    let wrapper: ShallowWrapper;
    
    beforeEach(() => {
      wrapper = shallow(<App />);

  });    

  it('Should render the expected template', () => {
      expect(wrapper).toMatchSnapshot();
  })
})