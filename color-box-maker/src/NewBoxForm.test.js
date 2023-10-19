import React from 'react'
import NewBoxForm from './NewBoxForm';
import { render } from "@testing-library/react";


test('it renders without crashing', () => {
    render(<NewBoxForm/>)
})

test("test to match the snapshot", function(){
    const { asFragment } = render(<NewBoxForm/>)
    expect(asFragment()).toMatchSnapshot()
})

