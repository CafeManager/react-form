import React from 'react'
import NewTodoForm from "./NewTodoForm"
import TodoList from './TodoList';
import { render, fireEvent } from "@testing-library/react";

test('it renders without crashing', () => {
    render(<TodoList/>)
})

test("test to match the snapshot", function(){
    const { asFragment } = render(<NewTodoForm/>)
    expect(asFragment()).toMatchSnapshot()
})

test('it adds a todo', () => {
    const { getByLabelText, getByText, container } = render(<TodoList></TodoList>)
    expect(getByLabelText('Todo:')).not.toBe("null")
    fireEvent.change(getByLabelText('Todo:'), {target: {value: 'test'}})
    fireEvent.click(container.querySelector('.button-center'))
    
    expect(getByText('test', {exact: false})).toBeInTheDocument()
})