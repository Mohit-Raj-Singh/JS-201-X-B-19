import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginError, loginRequest, loginSuccess } from "../Redux/AuthReducer/action";

const Login = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {

        if (userEmail) {
            const payload = {
                email: userEmail,
                password: userPassword,
            };
            dispatch(loginRequest());
            axios
                .post('https://reqres.in/api/login', payload)
                .then((r) => {
                    console.log(r.data);
                    dispatch(loginSuccess(r.data));
                })
                .catch((e) => {
                    dispatch(loginError());
                });

        }
    };

    return (
        <div>
            <input type='email' placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            <input type='password' placeholder="Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export { Login };