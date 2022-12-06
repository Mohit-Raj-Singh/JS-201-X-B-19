import { loadData, saveData } from "../../utils/accessLocalStorage";
import * as types from "./actionTypes";

const initialState = { 
    count : loadData("count") || 44 
};

const reducer = (oldState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD:
            const newCount =oldState.count+payload;
            saveData("count", newCount);
            return { ...oldState, count: newCount };

        case types.REDUCE:
            const newReduceCount= oldState.count - payload;
            saveData("count", newReduceCount);
            return { ...oldState, count: newReduceCount };

        default:
            return oldState;
    }
}

export { reducer };