import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";

const MainRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element ={<Login />} />
        </Routes>
    );
}

export default MainRoutes;