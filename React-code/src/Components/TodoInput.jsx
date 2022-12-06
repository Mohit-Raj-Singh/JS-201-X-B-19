import React, { useState } from "react";

const TodoInput = ({ addTodo })=>{

    const [text, setText]=useState("");

    const handleAdd =()=>{
        addTodo(text);
        setText("");
    }

    return (
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}

export default TodoInput;