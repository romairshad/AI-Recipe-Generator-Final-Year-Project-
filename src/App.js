import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
// import Navbars from './Components/Navbars'
import Chat from './Pages/Chat'
import Searchrecipe from './Pages/Searchrecipe'
import RecipeDetails from './Pages/RecipeDetails'
import Layout from './Pages/Layout'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer_layout from './Pages/Footer_layout'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     {/* <Navbars></Navbars> */}
     <Layout>
     <Routes>
        <Route path='home'  element={<Home></Home>}/>
        <Route path='about' element={<About></About>}/>
        <Route path='chat' element={<Chat></Chat>}/>
        <Route path='search' element={<Searchrecipe></Searchrecipe>}/>
        <Route path='/:mealid' element={<RecipeDetails></RecipeDetails>}/>
        <Route path='/' element={<Login></Login>}/>
        <Route path='/signup' element={<Register></Register>}/>


     </Routes>
     </Layout>
     {/* <Footer_layout></Footer_layout> */}
     </BrowserRouter>
    </div>
  )
}

export default App
