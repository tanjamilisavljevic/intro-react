import React, {useState} from 'react';


export default function TodoList(props) {
    const todos = props.todos;

    console.log(todos);
    return (
        <ul> {
            todos.map((todo) => (
                <li key={todo.name}>
                    <input type="checkbox"/> {todo.name}
                </li>
            ))
        }
        </ul>
    );
}

//TODO: Make li into a todo component


