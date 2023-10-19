import React from 'react'
import BoxList from './BoxList';
import { render } from "@testing-library/react";

const addBox = (width, height, backgroundColor) => {
    setBoxes((boxData) => [...boxData, {width, height, backgroundColor}])      
  }

test('it renders without crashing', () => {
    render(<BoxList/>)
})

test("test to match the snapshot", function(){
    const { asFragment } = render(<BoxList/>)
    expect(asFragment()).toMatchSnapshot()
})

test('it checks for a proper box', () => {
    const { getByTestId } = render(<BoxList addBox={addBox}></BoxList>)
    expect(getByTestId('box-list')).not.toBe("null")
})