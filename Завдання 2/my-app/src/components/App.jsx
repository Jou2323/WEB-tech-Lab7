import React from "react";
import Card from "./Card";
import goods from "../goods";

function createCard(goods) {
  return (
    <Card
      key={goods.id}
      name={goods.name}
      image={goods.imgURL}
      cost={goods.cost}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Goods</h1>
      {goods.map(createCard)}

      {/* <Card
        name={goods[0].name}
        image={goods[0].imgURL}
        tel={goods[0].phone}
        email={goods[0].email}
      />
      <Card
        name={goods[1].name}
        image={goods[1].imgURL}
        tel={goods[1].phone}
        email={goods[1].email}
      />
      <Card
        name={goods[2].name}
        image={goods[2].imgURL}
        tel={goods[2].phone}
        email={goods[2].email}
      /> */}
    </div>
  );
}

export default App;
