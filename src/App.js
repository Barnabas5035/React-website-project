import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Products from "./pages/Products"
import SignUp from "./pages/SignUp"
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
    <Navbar/>
    <div>
     <Routes>
     <Route path='/'exact element={<Home/>}/>
     <Route path='/products'element={<Products/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     </Routes>
     <Footer/>
     </div>
     
    </Router>
        

  )
}

export default App