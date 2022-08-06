import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import "./login.css"

import {AuthContext} from "../context/AuthContext"
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
const {auth,userLogin}=useContext(AuthContext)
 
const haddnleLogin=()=>{
    axios.post("https://reqres.in/api/login",{
      email,password
    }).then((res)=>loginMessage())
  }
  


  const loginMessage=()=>{
    alert("You are now logged in!") 
    userLogin()
  }

  return (
    <div className='input'>
      <input type="text" name="" className='email' id="" value={email} placeholder='Email Address goes here' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" name="" id="" className='password' value={password} placeholder='Password goes here' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={haddnleLogin}>Login</button>
    </div>
  )
}

export default Login