import React, {useRef, useState, useEffect} from 'react';
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "TodoList.todos";

export default function Form() {
    const initialTodos = [
        {name: 'First task', id: 1, complete: 'false'},
        {name: 'Second task', id: 1, complete: 'false'}
    ];

    const inputRef = useRef();
    let loadedTodos;

    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))) {
        loadedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    } else {
        loadedTodos = initialTodos;
    }

    const [todos, setTodos] = useState(loadedTodos);

    function clickHandler() {
        const inputElement = inputRef.current.value;
        setTodos([...todos, {name: inputElement, id: 1, complete: 'false'}]);
    }

    useEffect(() => {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        }, [todos]
    );

    return (
        <>
            <label htmlFor="newTodo"> Add a To-do: </label>
            <input ref={inputRef} type="text" name="newTodo" id="newTodo" placeholder="Do groceries..."/>

            <input type="submit" value="submit" id="submit" onClick={clickHandler}/>
            <TodoList todos={todos}/>
        </>
    );
}


