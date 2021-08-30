import React , { useState } from 'react';

export default function TodoList() {
    const initialTodos = ["First task", "Second task"];
    const [todos, setTodos] = useState(initialTodos);
    return (
        <ul> {
            todos.map((todo) => (
                <li  key={todo}>
                    <input type="checkbox" />  {todo}
                </li>
            ))
        }
        </ul>
    );
}


