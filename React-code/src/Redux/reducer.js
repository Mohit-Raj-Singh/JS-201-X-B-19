import * as types from "./actionTypes";

const initialState = { todos: [], isLoading: false, isError: false };


//actionObj==>action

const reducer = (oldState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case types.GET_TODOS_REQUEST:
            return { ...oldState, isLoading: true };

        case types.GET_TODOS_SUCCESS:
            return { ...oldState, isLoading: false, todos: payload };

        case types.GET_TODOS_ERROR:
            return { ...oldState, isLoading: false, isError: true };

        case types.POST_TODOS_REQUEST:
            return {...oldState, isLoading:true};
        case types.POST_TODOS_SUCCESS:
            return {...oldState, isLoading:false, todos: [...oldState.todos, payload],};
        case types.POST_TODOS_ERROR:
            return {...oldState, isLoading:false, isError:true};

        default:
            return oldState;
    }
}

export { reducer };