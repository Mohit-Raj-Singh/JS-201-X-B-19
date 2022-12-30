import axios from "axios";
import * as types from "./actionTypes";



const getTodosRequest = () => {
    return {
        type: types.GET_TODOS_REQUEST,
    }
}
const getTodosSuccess = (payload) => {
    return {
        type: types.GET_TODOS_SUCCESS,
        payload,
    }
}
const getTodosError = () => {
    return {
        type: types.GET_TODOS_ERROR,
    }
}


const addTodosRequest = () => {
    return {
        type: types.ADD_TODOS_REQUEST,
    }
}
const addTodosSuccess = (payload) => {
    return {
        type: types.ADD_TODOS_SUCCESS,
        payload,
    }
}
const addTodosError = () => {
    return {
        type: types.ADD_TODOS_ERROR,
    }
}


const getTodos = (dispatch) => {
    dispatch(getTodosRequest());
    return axios
        .get('http://localhost:8080/todos')
        .then((r) => dispatch(getTodosSuccess(r.data)))
        .catch((e) => {
            dispatch(getTodosError());
        });
};

const addTodo = (todo) => dispatch => {
    if (todo) {
        const payload = {
            title: todo,
            status: false
        }
        dispatch(addTodosRequest());
        return axios
            .post('http://localhost:8080/todos', payload)
            .then((r) => {
                dispatch(addTodosSuccess());
            })
            .catch((e) => {
                dispatch(addTodosError());
            });
    }
    else {
        alert("Please type input");
    }
}



export { addTodo, getTodos, getTodosRequest, getTodosSuccess, getTodosError, addTodosError, addTodosRequest, addTodosSuccess };