// ./components/pizza/Pizza.js

import React from "react";
import pizzaData from "./data";

function Pizza() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-4">פיצה צבי הנינג'ה</h1>

      <ul className="space-y-4">
        {pizzaData.map((pizza, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{pizza.name}</h2>
            <p className="my-2">{pizza.ingredients}</p>
            <p className="my-2 text-lg">Price: {pizza.price} ₪</p>
            <img
              src={pizza.photoName}
              alt={pizza.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="my-2">
              {pizza.soldOut ? (
                <span className="text-red-500">Sold Out</span>
              ) : (
                <span className="text-green-500">Available</span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="text-center my-4">
      {isOpen ? (
        <p className="text-green-500 text-lg">We are open!</p>
      ) : (
        <p className="text-red-500 text-lg">Sorry, we are closed.</p>
      )}
    </footer>
  );
}

export { Pizza, Footer };
