import React from "react";
import './Carouselcomp.css'
import Carousel from 'react-bootstrap/Carousel';
import Home from "../Home/Home";
import Items from "../Items/Item/Item";

function Carousel1() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/3659750.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Top English </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bollywoodhungama.com/wp-content/uploads/2023/01/Pathaan-1920x1080-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pathaan</h3>
          <p> Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar Raghavan and Abbas Tyrewala, from a story by Anand. The fourth installment in the YRF Spy Universe, it stars Shah Rukh Khan, Deepika Padukone, John Abraham, Dimple Kapadia, and Ashutosh Rana. In the film, Pathaan (Khan), an exiled RAW agent, works with ISI agent Rubina Mohsin (Padukone) to take down Jim (Abraham), a former RAW agent planning to spread a deadly lab-generated virus across India</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images7.alphacoders.com/124/1241136.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Top Gun Maverick</h3>
          <p>
          Top Gun: Maverick is a 2022 American action drama film directed by Joseph Kosinski and written by Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie from stories by Peter Craig and Justin Marks. The film is a sequel to the 1986 film Top Gun. Tom Cruise reprises his starring role as the naval aviator Maverick. It was based on the characters of the original film created by Jim Cash and Jack Epps Jr.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div><h1 id ='col'>Top Picks this month</h1>
    <div className="cards">
                <img className="cards__img" src='https://hindi.cdn.zeenews.com/hindi/sites/default/files/2023/01/20/1546903-the.jpg' />
                <div className="cards__overlay">
                  <div className="card__title">The Night Manager</div>
                  <span className="card__rating">7.8<i className="fas fa-star" /></span>
                  
                  
                </div>
              </div>

              <div className="cards">
                <img className="cards__img" src='https://stat4.bollywoodhungama.in/wp-content/uploads/2023/01/Farzi-3-322x402.jpg' />
                <div className="cards__overlay">
                  <div className="card__title">Farzi</div>
                  <span className="card__rating">8.5<i className="fas fa-star" /></span>
                  
                  
                </div>
              </div> 

              <div className="cards">
                <img className="cards__img" src='https://w0.peakpx.com/wallpaper/195/509/HD-wallpaper-tv-show-the-last-of-us.jpg' />
                <div className="cards__overlay">
                  <div className="card__title">The Last of us</div>
                  <span className="card__rating">9.0<i className="fas fa-star" /></span>
                  
                  
                </div>
              </div> 
              </div>
              <Items/>
              <Home/>
    </>
  );
}

export default Carousel1;