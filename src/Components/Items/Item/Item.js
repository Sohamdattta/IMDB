import React from 'react'
import { Link } from 'react-router-dom'
import Itemjson from '../Item/Itemdata.json'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';
import "./item.css"
const Items = () => {
  return (
    <div><h1 id ='col'>Explore Movies & TV shows</h1>
    <>
      <div>
        
        <Container>
          <Row xs={1} md={2} lg={3} >

            {Itemjson.items.map(item => (
              <div key={item.id}>
                <div className="cards">
                <img className="cards__img" src={item.img} />
                <div className="cards__overlay">
                  <div className="card__title">{item ? item.item_name : ""}</div>
                  
                  <div className="card__description">{item?item.item_desc: ""}</div>
                  <Link to={`sub-item/${item.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <Button variant="primary">Details</Button>
                  </Link>
                </div>
              </div>
                
              </div>
              
            ))}
        </Row>
      </Container>
    </div>

    </>
    </div>
  )
}

export default Items


// {/* <Card style={{ width: '30rem',height:'25rem' }}>
//                   <Card.Img variant='top' src={item.img} />
//                   <Card.Body>
//                     <Card.Title><h1>{item.item_name}</h1></Card.Title>
//                     <Card.Text>
//                     <p>{item.item_desc}</p>
//                     </Card.Text>
//                     <Link to={`sub-item/${item.id}`}>
//                       <Button>Go somewhere</Button>
//                     </Link>
//                   </Card.Body>
//                 </Card> */}