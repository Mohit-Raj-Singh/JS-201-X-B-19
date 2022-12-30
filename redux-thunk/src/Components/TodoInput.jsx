import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos, addTodo } from "../Redux/action";

const TodoInput = () => {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();


    const handleAdd = () => {

        dispatch(addTodo(todo)).then(() => {

            dispatch(getTodos);
        })

    }


    return (
        <div>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}

export default TodoInput;