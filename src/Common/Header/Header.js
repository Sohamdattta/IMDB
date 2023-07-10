import React from 'react'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className="header">
            <div className="headerLeft">
    
      <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
        
            <Nav.Link as={Link}to="Items"><span>Containts</span></Nav.Link>
            <Nav.Link as={Link}to="home-page/"><span>Coming up</span></Nav.Link>
            <Nav.Link as={Link}to="about"><span>Top Box Office</span></Nav.Link>
            
            
            </div>
    </div>       
          
            
  )
}

export default Header