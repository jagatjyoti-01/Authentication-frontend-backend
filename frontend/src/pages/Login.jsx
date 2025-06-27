import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { getUserData } from '../Services/Data';

function Login() {
    const[data, setData]=useState({email:"", password:""})

    const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };
  console.log(data.email, data.password);
  console.log("data is", data);


  const hendelLogin=async(e)=> {
    e.preventDefault();
    try{
        const responsce=await axios.post("http://localhost:3000/api/signin", {
            email: data.email,
            password: data.password
        }, {
            withCredentials: true
        });
        console.log("responsce is", responsce);

        if(responsce.data.success){
            alert("Login successfull");
            console.log("Login successfull");
            localStorage.setItem("token",responsce.data.data)
        }

    }catch(err){
      console.log("Error in hendelLogin", err);
    }
}
    getUserData();
    console.log("getUserData is", getUserData()); 


  return (
    <div>
        <h2>Login page </h2>

        <form onSubmit={hendelLogin} action="
        ">
            <input type="email" placeholder='enter your email' value={data.email} name="email" onChange={handleOnChange} />
            <input type="password" placeholder='enter your password' value={data.password} name="password"  onChange={handleOnChange} />
            <button type='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login