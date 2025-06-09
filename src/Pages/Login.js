import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './Firebase';

const Login = () => {
  const [email , setemail]=useState("");
  const [password , setpassword]=useState("");


  const handlesubmit = async(e)=>{
    e.preventDefault();
    try {
     await signInWithEmailAndPassword(auth,email,password)
     window.location.href = 'home'
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    <div className='d-flex justify-content-center align-items-center login'>
      <form action="" className='login-form p-3 text-light ' onSubmit={handlesubmit}>
        <h2 className='text-center text-warning'>Login</h2>    
        <div>
        <div className='my-3'>
        <label >Email</label>
        <input type="email" className='form-control ' onChange={(e)=> setemail(e.target.value)}/>
        </div>
        <div className='my-3'>
        <label >Password</label>
        <input type="password" className='form-control' onChange={(e)=> setpassword(e.target.value)}/>
        </div>
        <div className='d-flex justify-content-between'>
            <div>
            <input type="checkbox" /><span>Remember Me</span>
            </div>
            <p>Forget Password</p>
        </div>
        <button type='submit' className='btn btn-warning w-100'>Login</button>

        <div className='d-flex mt-4'>
            <p>Don't have an account?</p>
            <Link to="/signup"><p>Sign Up</p></Link>
        </div>
        </div>
       
      </form>
    </div>
  )
}

export default Login
