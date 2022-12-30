import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import TodoInput from "./TodoInput";


const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);
    const isLoading = useSelector((store) => store.isLoading);



    useEffect(() => {

        console.log(getTodos);
        dispatch(getTodos);
        
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>
    }


    
    return (
        <div>
            <h1>Todos</h1>
            <TodoInput />
            {todos.length > 0 &&
                todos.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.status ? "true" : "false"}
                        </div>
                    );
                })}
        </div>
    )
}

export default Todos;