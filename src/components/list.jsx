import React from "react";

function List(prop) { 
  return <li
  onClick = {()=>{
    prop.onChecked(prop.id)
  }}
  >{prop.item}</li>;
}

export default List;
