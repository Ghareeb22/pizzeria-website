import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check Out There Our Popular Products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.png"
              text="Explore the most chili sauce in our new Chicken BBQ Pizza"
              label="EGP 200.00"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.png"
              text="Explore Our New Smoked Pepperoni Pizza"
              label="EGP 175.00"
              path="/sign-up"
            />
            <CardItem
              src="images/img-7.png"
              text="Veggie Pizza that contains all kinds of Plants"
              label="EGP 150.00"
              path="/sign-up"
            />
            <CardItem
              src="images/img-6.png"
              text="The complete seafood pizza that you will be glad to try it"
              label="EGP 210.00"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.png"
              text="Super Supereme pizza With olives and mushrooms"
              label="EGP 180.00"
              path="/sign-up"
            />
            <CardItem
              src="images/img-4.png"
              text="Spicy Chicken Ranch Pizza That   will take you to whole another level"
              label="EGP 170.00"
              path="/sign-up"
            />
            <CardItem
              src="images/img-5.png"
              text="Cheese Lovers Pizza that contains 5 kinds of cheese"
              label="EGP 180.00"
              path="/sign-up"
            />
            <CardItem
              src="images/img-1.png"
              text="Our Special Da Wheel Pizza that contains Many awesome flavors"
              label="EGP 185.00"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
