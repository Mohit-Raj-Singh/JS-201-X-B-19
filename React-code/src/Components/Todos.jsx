import axios from "axios";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTodosError, getTodosRequest, getTodosSuccess, postTodosError, postTodosRequest, postTodosSuccess } from "../Redux/Todos/action";
import TodoInput from "./TodoInput";

const Todos = () => {

    const dispatch = useDispatch();
    // const todos = useSelector(store => store.todos);

    const { todos, isLoading } = useSelector((store) => {
        return {
            todos: store.TodoReducer.todos,
            isLoading: store.TodoReducer.isLoading
        };
    }, shallowEqual);
    // const isLoading = useSelector((store)=>store.isLoading);

    //fetch all todos from the db.json file, when the componenr mounts.

    const getTodos = () => {
        dispatch(getTodosRequest());
        axios
            .get('http://localhost:8080/todos').then(r => {
                //sucessfull

                dispatch(getTodosSuccess(r.data));

            }).catch(e => {
                //error
                dispatch(getTodosError());
            })
    }


    const addTodo = (title) => {
        if (title) {
            const payload = {
                title,
                status: false
            }
            dispatch(postTodosRequest());
            axios
                .post('http://localhost:8080/todos', payload)
                .then((r) => {
                    dispatch(postTodosSuccess(r.data));
                })
                .catch((e) => {
                    dispatch(postTodosError());
                });
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            <TodoInput addTodo={addTodo} />
            {isLoading && <div>Loading...</div>}
            {todos.length > 0 &&
                todos.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.status ? "True" : "False"}
                        </div>
                    );
                })}
        </div>
    )
}

export default Todos;