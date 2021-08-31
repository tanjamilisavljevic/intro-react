import React, {useRef, useState} from 'react';
import TodoList from "./TodoList";


export default function Form() {
    const initialTodos = [
        {name: 'First task', id: '1'},
        {name: 'Second task', id: '1'}
    ];
    const inputRef = useRef();
    const [todos, setTodos] = useState(initialTodos);

    function clickHandler() {
        const inputElement = inputRef.current.value;
        setTodos([...todos, {name: inputElement, id: 1}]);
    }

    console.log(todos);
    return (
        <>
            <label htmlFor="newTodo"> Add a To-do: </label>
            <input ref={inputRef} type="text" name="newTodo" id="newTodo" placeholder="Do groceries..."/>

            <input type="submit" value="submit" id="submit" onClick={clickHandler}/>
            < TodoList todos={todos}/>
        </>
    );

}


