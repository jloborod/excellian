import * as React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Header } from '..';

configure({adapter: new Adapter()});

describe('<Header>', () => {
    let wrapper: ShallowWrapper;
    
    beforeEach( () => {
        wrapper = shallow(<Header />);
    });

    it('Should render the expected template', () => {
        expect(wrapper).toMatchSnapshot();
    });     
})