import {  useState } from "react";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useApp } from "../context/App-context";


export default function SignUp() {
    const [userName,setUsername]=useState("")
    const [password,setpassword]=useState("")
    const [rePassword,setRePassword]=useState("")
    const [userCredentials,setUserCredentials]=useState([])
    const {dispatch}=useApp()
    const loginHandler=(event)=>{
      event.preventDefault()
      if(password==rePassword){
        setUserCredentials(userName,password)
        serverLogin()
      }
      else toast.error("Both passwords don't match ")
    }
    
  async function serverLogin(){
    await axios({
      method: 'post',
      url: 'https://jainwin.herokuapp.com/users/s',
      data: {
      "userName":userName,"password":password
      }
    })
    .then(function (response) {
      console.log(response.data)
      toast.success("succesfully Signed Up Welcome !")
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
            <h1>Sign Up</h1>
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
          <input
          onChange={(e)=>setRePassword(()=>e.target.value)}
          type="password"
          className="input-primary"
          placeholder="Confirm Password"
        />
        <button type="submit" className="login Cta-Cart" >Sign Up</button>
        </form>
      </div>
    );
}
