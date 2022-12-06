import { useDispatch, useSelector } from "react-redux"
import { handleAdd, handleReduce } from "../Redux/Counter/action";
import React from "react";

const Counter=()=>{
    const count=useSelector((store)=>{
        return store.CountReducer.count
    });
    const dispatch=useDispatch();

    const addHandler=()=>{
        dispatch(handleAdd(2));
    }

    const reduceHandler=()=>{
        dispatch(handleReduce(1));
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addHandler}>Add</button>
            <button onClick={reduceHandler}>Reduce</button>
        </div>
    )
}

export {Counter};