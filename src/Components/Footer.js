import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='last-link '>
        <div className='text-light d-flex container pt-5 justify-content-between '>
          <div>
              <h2 className='text-warning'>Yum Recipe</h2>
              <p className='lead'>Powered by AI</p>
          </div>
          <div>
              <h2 className='text-warning'>Recipe Tails</h2>
              <p className='lead'>Trending recipes</p>
              <p className='lead'>Shared your own recipes</p>
              <p className='lead'>AI recipe genrator</p>
          </div>
          <div>
              <h2 className='text-warning'>User Link</h2>
              <p className='lead'><Link className='nav-link  text-decoration-none' to="/">Home</Link></p>
              <p className='lead'><Link className='nav-link   text-decoration-none' to="about">About</Link></p>
              <p className='lead'><Link className='nav-link  text-decoration-none' to="chat">Let's Chat</Link></p>

          </div>
          <div>
              <h2 className='text-warning'>Contact us</h2>
              <p className='lead'>Location</p>
              <p className='lead'>Phone no</p>
          </div>
        </div>
        </div>
        <footer className='text-center bg-dark text-light'>
      © 2025 YumRecipes. All rights reserved
      </footer>
      
    
    </div>
  )
}

export default Footer
