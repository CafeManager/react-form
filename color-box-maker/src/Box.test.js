import React from 'react'
import Box from './Box';
import { render } from "@testing-library/react";

test('it renders without crashing', () => {
    render(<Box/>)
})

test("test to match the snapshot", function(){
    const { asFragment } = render(<Box height={200} width={200} backgroundColor="#ff1010"/>)
    expect(asFragment()).toMatchSnapshot()
})

test('it checks for a proper box', () => {
    const { getByTestId } = render(<Box height={200} width={200} backgroundColor="#ff1010"></Box>)
    expect(getByTestId('box')).not.toBe("null")
})