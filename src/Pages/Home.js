import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth,db } from './Firebase'
import { getDoc,doc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
 const Home = () => {
  const [details , setdetails]=useState(null)
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchdata = async()=>{
      auth.onAuthStateChanged(async (user)=>{
        console.log(user)
        if(user){
        const dbfetch = doc(db,"Users",user.uid)
        const docuser = await getDoc(dbfetch)
        if( docuser.exists()){
          setdetails(docuser.data())
        }
      }else {
          setdetails(null); 
        }
      })
    }
    fetchdata();
  },[])

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setdetails(null);
      navigate('/'); // Optional: redirect to home or login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
      <div>
      <section className='bg-home text-center d-flex flex-column justify-content-center align-items-center'>
      <div>
          {details ? (<>
            <h1 className='full-name '>Welcome <span className='typewriter'>{details.fullname}</span></h1>
          </>):(<p>Loading</p>)}
        </div>
        <div className='container  text-light w-100 home-text '>
        
      <h1 className='learn fw-bold  text-wrap '>Learn All Types Of Cookings</h1>
      <p className=' fw-bold para text-wrap w-100 '>Cooking is an art and science, and learning various methods helps you enjoy the process while creating delicious meals. Start your journey today and discover the joy of cooking!</p>
      <Link to="/"><button onClick={handleLogout} className='btn  fw-bold'>Log Out</button></Link>
      </div>
      </section>
     
      </div>
      
    
  )
  
}

export default Home

