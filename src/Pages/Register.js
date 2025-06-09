import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth,db } from './Firebase'
import { setDoc, doc } from 'firebase/firestore'

const Register = () => {
  const [name , setname]=useState("")
  const [email , setemail]=useState("")
  const [password , setpassword] = useState("")


  const handleform = async(e)=>{
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password)
      const user = auth.currentUser;
      console.log(user)
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          email:user.email,
          fullname:name,
        })
      }
      window.location.href = '/'
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center login'>
      <form action="" className='login-form p-3 text-light ' onSubmit={handleform}>
        <h2 className='text-center text-warning'>Sign Up</h2>    
        <div>
        <div className='my-3'>
        <label >Full Name</label>
        <input type="text" className='form-control ' onChange={(e)=>setname(e.target.value)}/>
        </div>
        <div className='my-3'>
        <label >Email</label>
        <input type="email" className='form-control' onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className='my-3'>
        <label >Password</label>
        <input type="password" className='form-control' onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <div className='mb-2'>
            <div>
            <input type="checkbox" /><span> I agree to terms and conditions</span>
            </div>
        </div>
        <button type='submit' className='btn btn-warning w-100'>Sign Up</button>

        <div className='d-flex mt-4'>
            <p>Already have an account?</p>
            <Link to="/login"><p>Log In</p></Link>
        </div>
        </div>
       
      </form>
    </div>
  )
}

export default Register
