import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Button } from '../';

describe('<Button>', () => {
    let clickMock: () => void;
    let wrapper: ShallowWrapper;

    beforeEach( () => {
        clickMock = jest.fn();
        wrapper = shallow(<Button disabled={true} clicked={clickMock}>My test button</Button>);
    });

    it('Should render the expected template', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.prop('disabled')).toBeTruthy();
        expect(wrapper.prop('children')).toEqual('My test button');
    })

    it('Should render the expected template', () => {
        wrapper.simulate('click');
        expect(clickMock).toHaveBeenCalledTimes(1);
    })
})