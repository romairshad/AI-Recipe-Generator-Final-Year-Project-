import React from 'react'
import { Link } from 'react-router-dom'



const Navbars = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning font ">
                <div className="container">
                    <Link className='navbar-brand fw-bold fs-2 text-warning-emphasis navbrand ' to="home">Yum Recipe</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className="collapse navbar-collapse" id='navbar'>

                        <ul className="navbar-nav ms-auto" >
                            <li className="nav-item "><Link className='nav-link  text-decoration-none' to="home">Home</Link></li>
                            <li className="nav-item "><Link className='nav-link   text-decoration-none' to="about">About</Link></li>
                            <li className="nav-item "><Link className='nav-link  text-decoration-none' to="search">Our Recipes</Link></li>
                            <li className="nav-item "><Link className='nav-link  text-decoration-none' to="chat"><button className='btn  btn-waraning'>Let's Chat</button></Link></li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbars

