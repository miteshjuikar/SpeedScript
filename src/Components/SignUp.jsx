import React from 'react';
import { useState } from 'react';
import style from './CSSFiles/SignUp.module.css';
import Validation from './Validations';
import Icon from '../assets/typingSymbol.png';


export default function SignUp() {
    const [formData, setFormData] = useState({name: "", email:"", password:"", confirmPassword: ""});
    const [ submit, setSubmit ] = useState(true);
    const [ error, setError ] = useState({ name: "", email:"", password:"", confirmPassword: ""});

    const handleChange = (e) => {
        setFormData((pre)=> ({
            ...pre,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(Validation(formData))
        console.log("Submitted");
    }

  return (
    
    <div className={style.mainLogIn}>
    <div className={style.sideText}>
        <img src={Icon} height="100px" width="100px" />
      <h2>Looks like you're new here!</h2>
      <p>Sign up with your email to get started</p>
    </div>
    <div className={style.logInForm}>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    value={formData.name}
                    placeholder='Enter your full name'
                    onChange={handleChange}
            />
            {error.name && <div className="form-text" style={{color: 'red'}}>{error.name}</div>}
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp"
                    value={formData.email} 
                    placeholder='Enter your email Id'
                    onChange={handleChange}
            />
            {error.email && <div className="form-text" style={{color: 'red'}}>{error.email}</div>}
            
        </div>
        
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" 
                    className="form-control" 
                    id="password" 
                    value={formData.password} 
                    placeholder='Enter password'
                    onChange={handleChange}
            />
            {error.password && <div className="form-text" style={{color: 'red'}}>{error.password}</div>}
        </div>
        <div className="mb-3">
            <label htmlFor="verifyPassword1" className="form-label">Confirm Password</label>
            <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder='Confirm Password'
                    value={formData.confirmPassword} 
                    onChange={handleChange}
            />
            {error.confirmPassword && <div className="form-text" style={{color: 'red'}}>{error.confirmPassword}</div>}
        </div>
        <button type="submit"
               className="btn btn-primary"
               disabled={!submit}
        >
          {submit ? "Sign Up" : "submitting"}
        </button>
    </form>
    </div>
    </div>
  )
}
