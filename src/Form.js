import React, {useRef, useState, useEffect} from 'react';
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "MyTodoApp.todos";

export default function Form() {
    const initialTodos = [
        {name: 'First task', id: '1', complete: 'false'},
        {name: 'Second task', id: '1', complete: 'false'}
    ];
    const inputRef = useRef();
    const [todos, setTodos] = useState(initialTodos);

    function clickHandler() {
        const inputElement = inputRef.current.value;
        setTodos([...todos, {name: inputElement, id: 1, complete: 'false'}]);
    }

    // useEffect(() => {
    //         const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //         setTodos(storedTodos);
    //     }
    // );

    useEffect(() => {
            window.localStorage.setItem(LOCAL_STORAGE_KEY + ".todos", JSON.stringify(todos));
        }, [todos]
    );

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


