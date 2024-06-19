import React, { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import Validation from './LoginValidation'
import axios from "axios"

function Login(){
    const [values , setValues] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const [errors , setErrors] = useState({})

    const handleInput = (event) =>{
        setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values))
        if (errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/login" , values)
            .then(res => {
                if (res.data === "Success"){
                    navigate("/home")
                }else{
                    alert("No record existed")
                }
            })
            .catch(err => console.log(err));
        }
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
           <div className="bg-white p-3 rounded w-25">
           <h2>Sign-In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="pb-2"><strong>Email</strong></label>
                    <input type="email"  placeholder="Enter Email" 
                    onChange={handleInput} className="form-control rounded-0" name="email"/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="pb-2"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" 
                    onChange={handleInput} className="form-control rounded-0" name="password"/>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>

                <button type="submit" className="btn btn-success mb-3 w-100 rounded-0">Log in</button>
                <p>You are agree to our terms and policies</p>
                <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
            </form>
           </div>
        </div>
    )
}

export default Login