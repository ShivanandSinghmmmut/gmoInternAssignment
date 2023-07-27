import React, { useState } from "react";
import axios from "axios"
import {useNavigate } from 'react-router-dom';
const Firstpage = () => {
    const navigate = useNavigate()
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");

    const register = async (e)=>{
        e.preventDefault();
        const res = await axios.post("/register",{
            name, phone, email
            
        })
        
  if(res.status===404||res.status===432){
    console.log("invalid credential")
    window.alert("please enter the details before accessing the page.")
  }
  else{
    console.log("login successful")
    window.alert("login successful")
    navigate('/secondpage');
        
    }
}
  return (
    <>
      <section className="register-form">
        <div className="form-container">
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="name"></input>
            <input type ="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="phone"></input>
            <input type ="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="email"></input>
            <button onClick={register} type="submit">Register</button>
        </div>
      </section>
    </>
  )
}

export default Firstpage
