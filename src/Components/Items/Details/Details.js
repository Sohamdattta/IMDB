import React from 'react'
import { useParams } from 'react-router-dom'
import ItemJSON from '../Item/Itemdata.json'
const Details = () => {
  let {item_id,sub_i}=useParams();
  console.log("Collected in details:",item_id,sub_i)
  let subItem = ItemJSON.items.find((x)=> x.id.trim() ===item_id)

  let single=subItem.sub_item.find((x)=> x.sub_id.trim() ===sub_i)
  return (
    <div>
      
        <h1>{single.sub_name}</h1>
        <h4>{single.cast}</h4>
        <h5>{single.Review}</h5>
    </div>
  )
}

export default Details

//.sub_item.find((sub_i)=> sub_i.sub_id.trim() ===sub_i)