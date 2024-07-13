import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Capsicum",
    ingredients: "Cheese, ham, aragula, mozarella and corn",
    price: 30,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div>
        {/* inline css */}
        {/* <h1
        style={{ color: "red", fontSize: "35px", textTransform: "uppercase" }}
      > 
      brackets are to reference a variable and then an object*/}
        <h1>FAST REACT PIZZA CO.</h1>
      </div>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaNum > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza name={pizza.name} photoName={pizza.photoName} /> or
            <Pizza pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza(props) {
  if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  //console.log(hour);
  const openHour = 10;
  const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're open!");
  // } else {
  //   alert("Sorry we are closed!");
  // }
  const isOpen = hour >= openHour && hour <= closeHour;
  //console.log(isOpen);
  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We are happy to welcome you between {openHour}:00 to {closeHour}:00
          </p>
        )}
      </footer>
    </div>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>We are open untill {props.closeHour}:00. Come visit us or order</p>
      <button className="btn">Open</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
