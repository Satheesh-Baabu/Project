import React, { useState } from "react";
import axios from "axios";
function Login()
{
    // const [formData,setFormData]=useState({
    //     name:'',
    //     email:''
    // });
    
    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
    // const onSubClicked =(e)=>{
    //     e.preventdefault();
    //     axios.post('http:localhost:3000/login',formData);
    // }
    return(
        <div>
            Login
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <button>Submit</button>
            {/* <br/>
            <label>{formData.name}</label> */}
        </div>
    )
}
export default Login