import React from 'react'
import TodoList from './TodoList';
import { render } from "@testing-library/react";

const addTodo = ( todo ) => {
      
    setTodos((todo) => [...todos, todo])
  }

test('it renders without crashing', () => {
    render(<TodoList/>)
})

test("test to match the snapshot", function(){
    const { asFragment } = render(<TodoList/>)
    expect(asFragment()).toMatchSnapshot()
})

test('it checks for a rendered page', () => {
    const { getByText, container } = render(<TodoList></TodoList>)
    
    expect(getByText('Welcome to my todo app!')).not.toBe("null")
})