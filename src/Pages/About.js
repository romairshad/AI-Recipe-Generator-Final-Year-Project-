import React from 'react'
// import { Link } from 'react-router-dom'


 const About = () => {
  return (
    <div>
    <section className='ab-img'>
      <h1 className='d-flex justify-content-center align-items-center h-100 text-warning'>About Us</h1>
      {/* <img className='img-fluid w-100 h-100' src="/about1.jpg" alt="For example" /> */}
      
      </section>
      <section className='p-5 text-center'>
        <div className="container d-md-flex ">
          <div className='p-5'>
              <p className='lead text-warning'>Welcom to Yum recipe</p>
              <h1>You will find happiness and food here</h1>
              <p className='lead text-warning'>Happiness and food nourish both body and soul, bringing true contentment</p>
              <p className='lead'>Happiness and food go hand in hand, fulfilling both physical and emotional needs. Sharing a meal spreads love, strengthens bonds, and reminds us that true joy comes from togetherness and gratitude</p>
          </div>
          <img className='img-fluid w-50 rounded-5 shadow-lg' src="/person3.jpg" alt="person" />
        </div>
      </section>
      <section className='p-5 text-center'>
        <div className="container d-md-flex ">
          <img className='img-fluid w-50 rounded-5 shadow-lg' src="/person3.jpg" alt="about" />
          <div className='p-5'>
              <p className='lead text-warning'>Welcom to Yum recipe</p>
              <h1>You will find happiness and food here</h1>
              <p className='lead text-warning'>Happiness and food nourish both body and soul, bringing true contentment</p>
              <p className='lead'>Happiness and food go hand in hand, fulfilling both physical and emotional needs. Sharing a meal spreads love, strengthens bonds, and reminds us that true joy comes from togetherness and gratitude</p>
          </div>
          
        </div>
      </section>
      <section className='bg-dark pt-5 text-center '>
        <div className='container d-md-flex justify-content-center align-items-center'>
          <img className='img-fluid w-50 rounded-5' src="/person1.jpg" alt="person" />
          <div className='p-5'>
                <h1 className='text-light font-wrap'>Cooking is about passion, respect for ingredients, and creating unforgettable experiences through every bite</h1>
          </div>
        </div>
        <div className='mt-3'>
       
        </div>
        
      </section>
      

    </div>

  )
}

export default About

