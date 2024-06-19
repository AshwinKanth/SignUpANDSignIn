import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {
    const [values , setValues] = useState({
        name: "",
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
        if (errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/signup" , values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
           <div className="bg-white p-3 rounded w-25">
           <h2>Sign-Up</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="pb-2"><strong>Name</strong></label>
                    <input type="text"  placeholder="Enter Name" 
                    onChange={handleInput} className="form-control rounded-0" name="name"/>
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                </div>

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

                <button type="submit" className="btn btn-success mb-3 w-100 rounded-0">Sign up</button>
                <p>You are agree to our terms and policies</p>
                <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
            </form>
           </div>
        </div>
  )
}

export default Signup