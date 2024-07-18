// ./components/pizza/Pizza.js

import React from "react";
import pizzaData from "./data";

function Pizza() {
  return (
    <div>
      <h1>Pizza Menu</h1>
      <ul>
        {pizzaData.map((pizza, index) => (
          <li key={index}>
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <p>Price: {pizza.price} ₪</p>
            <img src={pizza.photoName} alt={pizza.name} />
            <p>{pizza.soldOut ? "Sold Out" : "Available"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizza;
