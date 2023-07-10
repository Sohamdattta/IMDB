import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Header from './Common/Header/Header'
import Footer from './Common/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Items from './Components/Items/Item/Item'
import Subitem from './Components/Items/Subitem/Subitem'
import Details from './Components/Items/Details/Details'
import PNF from './Common/PNF/PNF'
import Carousel1 from './Components/Carouselcomp/Carouselcomp'

const Routing1=()=> {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Carousel1/>}/>
      <Route path='home-page' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='items' element={<Items/>}/>
      <Route path='items/sub-item/:item_id' element={<Subitem/>}/>  
      <Route path='items/sub-item/:item_id/details/:sub_i' element={<Details/>}/>
      {/* <Route path='Carousel' element={<Carousel1/>}/> */}
      <Route path='*' element={<PNF/>}/>    

      </Routes>
      <Footer/>
    </Router>

    
  )
}

export default Routing1
