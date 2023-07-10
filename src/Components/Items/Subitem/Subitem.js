import React, { useEffect, useState } from "react"
import "./Subitem.css"
import { Link } from "react-router-dom"
import ItemJSON from "../Item/Itemdata.json"
import { useParams } from "react-router-dom"
import { Button, Card, Col, Row, Container } from "react-bootstrap"


const SubItem = () => {

  let { item_id } = useParams();
  console.log("Received from url in subitem", item_id)
  let sub_i = ItemJSON.items.find((data) => data.id === item_id)
  console.log("subitem", sub_i)
  return (


    <div>
      <Container>
        <h1>{sub_i.item_name}</h1>
        <Row xs={1} md={2} lg={3} xl={4}>
          {
            sub_i.sub_item.map((sub) => (

              <div className="cards">
                <img className="cards__img" src={sub.s_img} />
                <div className="cards__overlay">
                  <div className="card__title">{sub ? sub.sub_name : ""}</div>
                  <div className="card__runtime">
                    {sub ? sub.release_date : ""}
                    <span className="card__rating">{sub ? sub.imdb_rating : ""}<i className="fas fa-star" /></span>
                  </div>
                  <div className="card__description">{sub ? sub.cast.slice(0, 118) + "..." : ""}</div>
                  <Link to={`details/${sub.sub_id}`} style={{ textDecoration: "none", color: "white" }}>
                    <Button variant="primary">Details</Button>
                  </Link>
                </div>
              </div>


            ))
          }
        </Row>
      </Container>


    </div>
  )
}

export default SubItem




