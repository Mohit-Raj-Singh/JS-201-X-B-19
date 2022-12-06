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


const postTodosRequest = () => {
    return {
        type: types.POST_TODOS_REQUEST,
    }
}
const postTodosSuccess = (payload) => {
    return {
        type: types.POST_TODOS_SUCCESS,
        payload,
    }
}
const postTodosError = () => {
    return {
        type: types.POST_TODOS_ERROR,
    }
}

export { getTodosRequest, getTodosSuccess, getTodosError, postTodosRequest, postTodosSuccess, postTodosError };