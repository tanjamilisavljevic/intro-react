import React, {useRef} from 'react';

export default function Form() {
    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current;
        return inputElement;
    }

    return (
        <>
            <label htmlFor="newTodo"> Add a To-do: </label>
            <input ref={inputRef} type="text" name="newTodo" id="newTodo" placeholder="Do groceries..."/>

            <input type="submit" value="submit" id="submit" onClick={clickHandler}/>
        </>
    );
}


