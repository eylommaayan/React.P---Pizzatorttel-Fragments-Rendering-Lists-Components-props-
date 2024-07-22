// ./components/pizza/Pizza.js

import React from "react";
import pizzaData from "./data";

function Pizza() {
  return (
    <div className="p-8">
      <main className="menu flex flex-col items-center gap-8">
        <h1 className="text-center text-5xl font-light uppercase tracking-wide relative  before:block before:w-1/2 before:h-1 before:bg-orange-500 before:mb-2 before:mx-auto after:block after:w-1/2 after:h-1 after:bg-orange-500 after:mt-2 after:mx-auto">
          תפריט פיצה לאונארדו צבי הנינג'ה
        </h1>
        <ul className="flex flex-col items-center gap-8">
          {pizzaData.map((pizza, index) => (
            <li key={index} className="flex flex-col items-center">
              <h2 className="text-3xl font-medium">{pizza.name}</h2>
              <p className="text-xl">{pizza.ingredients}</p>
              <p className="text-xl">Price: {pizza.price} ₪</p>
              <img
                src={`/${pizza.photoName}`}
                alt={pizza.name}
                className="w-full max-w-md rounded-lg shadow-md"
              />
              <p className="text-xl">
                {pizza.soldOut ? "Sold Out" : "Available"}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="text-center p-4">
      {isOpen ? (
        <p className="text-green-500">We are open!</p>
      ) : (
        <p className="text-red-500">Sorry, we are closed.</p>
      )}
    </footer>
  );
}

export { Pizza, Footer };
