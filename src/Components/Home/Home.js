import React from 'react'
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';

const Home = () => {
  return (
    <div><h1 id ='col'>Coming Up</h1>
    <>
      <div>
        {/* <Container>
          <Row xs={1} md={2} lg={3} xl={4} > */}
            
                <div className="cards">
                <img className="cards__img" src='https://resizing.flixster.com/EUqL78pX1Wiqw7BsshnTyQrH6-Y=/fit-in/1152x864/v2/https://resizing.flixster.com/IqeZgW5rg3IUolSRAhcwErCUUJ4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBhNzdkZDBkLWU2YTItNGQ2My1iMzcwLTE0OTVmOTlhOGVhOC5qcGc=' />
                <div className="cards__overlay">
                  <div className="card__title">Mrs chatterjee vs norway</div>
                  
                  <div className="card__description">Releasing on 17-03-2023</div>
                  
                </div>
              </div>

              <div className="cards">
                <img className="cards__img" src='https://stat4.bollywoodhungama.in/wp-content/uploads/2023/02/Zwigato-1-306x393.jpeg' />
                <div className="cards__overlay">
                  <div className="card__title">Zwigato</div>
                  
                  <div className="card__description">Releasing on 17-03-2023</div>
                  
                </div>
              </div> 

              <div className="cards">
                <img className="cards__img" src='https://stat4.bollywoodhungama.in/wp-content/uploads/2022/12/Bholaa-322x421.jpg' />
                <div className="cards__overlay">
                  <div className="card__title">Bholaa</div>
                  
                  <div className="card__description">Releasing on 30-03-2023</div>
                  
                </div>
              </div>  

              
              
            
        {/* </Row>
      </Container> */}
    </div>

    </>          
    </div>
 
    

  )
}

export default Home

