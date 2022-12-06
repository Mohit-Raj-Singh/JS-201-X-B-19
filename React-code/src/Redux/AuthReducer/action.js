import axios from "axios";
import * as types from "./actionType";

const loginRequest = ()=>{
    return {
        type : types.USER_LOGIN_REQUEST
    }
}

const loginSuccess = (token)=>{
    return {
        type : types.USER_LOGIN_SUCCESS,
        payload : token
    }
}

const loginError = ()=>{
    return {
        type : types.USER_LOGIN_ERROR
    }
}


const login =({userEmail, userPassword})=>(dispatch)=>{

    if(userEmail){
        const payload = {
            email:userEmail,
            password:userPassword
        }
        dispatch(loginRequest())
        axios.post('https://reqres.in/api/login',payload).then(r=>{
            dispatch(loginSuccess(r.data.token))
            console.log(r.data.token);
        }).catch(e=>{
            dispatch(loginError())
        });
    }
}


export { loginRequest, loginSuccess, loginError, login };