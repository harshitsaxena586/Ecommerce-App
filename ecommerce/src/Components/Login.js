import react, { useEffect, useState } from "react";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useApp } from "../context/App-context";
import SignUp from "./Signup";


export default function LoginComponent() {
    const [userName,setUsername]=useState("")
    const [password,setpassword]=useState("")
    const [userCredentials,setUserCredentials]=useState([])
    const {dispatch}=useApp()
    const loginHandler=(event)=>{
      event.preventDefault()
      setUserCredentials(userName,password)
      serverLogin()
    }
    
  async function serverLogin(){
    await axios({
      method: 'post',
      url: 'http://localhost:3000/users',
      data: {
      "username":userName,"password":password
      }
    })
    .then(function (response) {
      console.log(response.data)
      toast.success("succesfully logged in")
      dispatch({type:"LOGGEDINUSER",payload:userName})
    })
    .catch(function (error) {
        console.log(error.response)
       toast.error("Invalid Username or Password")
    })
  }
  
    console.log(userCredentials)
    return (
      <div className="login-div">
        <form className="" onSubmit={loginHandler} >
            <h1>Login</h1>
          <input
           onChange={(e)=>setUsername(()=>e.target.value)}
            type="text"
            className="input-primary"
            placeholder="Username "
          />
          <input
            onChange={(e)=>setpassword(()=>e.target.value)}
            type="password"
            className="input-primary"
            placeholder="Password"
          />
        <button type="submit" className="login Cta-Cart" >Log in</button>
       
      

        </form>
      </div>
    );
}
