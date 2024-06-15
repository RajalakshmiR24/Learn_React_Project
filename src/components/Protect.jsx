import { Outlet } from "react-router-dom";

import React from 'react'
import SignIn from "./ReusableComponent/SignIn";


function authUser() {
    const User = {Login : true};
  return User.Login;
}

function Protect() {
    const isAuthUser = authUser();
  return isAuthUser ? <Outlet/> : <SignIn/>
}

export default Protect