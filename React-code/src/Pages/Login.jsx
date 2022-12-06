import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth= useSelector((store)=>store.AuthReducer.isAuth);

    const submitHandler=(e)=>{

        e.preventDefault();

        dispatch(login({ userEmail, userPassword }));

    }

    if(isAuth){
        return <Navigate to="/" />
    }


    return (
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>UserEmail:- </label>
                        <input type="email" placeholder="Enter Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>UserPassword:- </label>
                        <input type="password" placeholder="Enter Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )

}

export default Login;