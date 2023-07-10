import React from 'react'



const About = () => {
  return (
    <div><h1 id ='col'>Top Box Office</h1>
    <div className="cards">
                <img className="cards__img" src='https://pbs.twimg.com/media/FVKbkCyXwAAHYka.jpg' />
                <div className="cards__overlay">
                  <div className="card__title">Scream VI</div>
                  <div className="card__description">$44M</div>
                  
                  
                </div>
              </div>

              <div className="cards">
                <img className="cards__img" src='https://pbs.twimg.com/media/Fon1oZtXsB0Ow0T.jpg:large' />
                <div className="cards__overlay">
                  <div className="card__title">Ant-Man and the Wasp: Quantumania</div>
                  <div className="card__description">$7.1M</div>
                  
                  
                </div>
              </div> 

              <div className="cards">
                <img className="cards__img" src='https://wallpaperaccess.com/full/8641598.jpg' />
                <div className="cards__overlay">
                  <div className="card__title">Pathaan</div>
                  <div className="card__description">$130M</div>
                  
                  
                </div>
              </div> 
              </div>
  )
}

export default About