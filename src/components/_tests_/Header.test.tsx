import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from '..';

describe('<Header>', () => {
    let wrapper: ShallowWrapper;

    beforeEach( () => {
        wrapper = shallow(<Header />);
    });

    it('Should render the expected template', () => {
        expect(wrapper).toMatchSnapshot();
    });
})