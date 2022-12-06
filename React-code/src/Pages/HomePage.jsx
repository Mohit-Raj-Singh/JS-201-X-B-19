import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Counter } from "../Components/Counter";
import Todos from "../Components/Todos";

const HomePage = ()=>{

    const isAuth = useSelector((store)=>store.AuthReducer.isAuth);

    if(!isAuth){
        return <Navigate to="/login" />
    }

    return (
        <div>
            <Counter />
            <Todos />
        </div>
    )
}

export default HomePage;