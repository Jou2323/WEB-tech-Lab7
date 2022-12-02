import React from "react";
import Icon from "./Icon";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Icon image={props.image} />
      </div>
      <div className="bottom">
        <p className="info" >Cost:</p> <Details detailInfo={props.cost} />
        <p className="info">grn</p>
      </div>
    </div>
  );
}

export default Card;
