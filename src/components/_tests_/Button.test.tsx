import * as React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Button } from '../';

configure({adapter: new Adapter()});

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