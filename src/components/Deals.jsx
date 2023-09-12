import React from "react";
import "./Deals.css";

const Deals = () => {
  return (
    <>
      <div className="deals-container">
        <div className="dealsUp">
          <div className="card">
            <img
              className="img-pizza"
              src="https://images.phi.content-cdn.io/cdn-cgi/image/quality=50/https://martjackamstorage.azureedge.net/am-resources/c3877a59-69f7-40fa-bb17-ae5b9ac37732/Images/ProductImages/Large/My%20Box1.png"
              alt=""
            />
            <h1 className="head">My Box</h1>
            <p className="pizzaText">
              One Square Pizza + 2 Sides of the following items ((Buffalo Wings
              Or Fire Wings))
            </p>
            <div className="inside-text">
              <p>EGP 145.00</p>
              <button className="btn">ADD</button>
            </div>
          </div>
          <div className="card">
            <img
              className="img-pizza"
              src="https://images.phi.content-cdn.io/cdn-cgi/image/quality=50/https://martjackamstorage.azureedge.net/am-resources/c3877a59-69f7-40fa-bb17-ae5b9ac37732/Images/ProductImages/Large/Hut-Saver-Deal-page-1065x549.jpg"
              alt=""
            />
            <h1 className="head">Hut Savers Pan Pizza Offer</h1>
            <p className="pizzaText">
              1 Medium Cheese Stuffed Crust pizza + 1 Medium Beef & Cheddar
            </p>
            <div className="inside-text">
              <p>EGP 215.00</p>
              <button className="btn">ADD</button>
            </div>
          </div>
          <div className="card">
            <img
              className="img-pizza"
              src="https://images.phi.content-cdn.io/cdn-cgi/image/quality=50/https://martjackamstorage.azureedge.net/am-resources/c3877a59-69f7-40fa-bb17-ae5b9ac37732/Images/ProductImages/Large/1065x549%20Hut%20Saver%20Stuffed%20Crust%20Hut%20Saver.jpg"
              alt=""
            />
            <h1 className="head">Hut Saver Stuffed Crust Offer </h1>
            <p className="pizzaText">
              2 Medium Pizzas of your choice (Pan,Thin or Classic). This or 1
              Large With Widges Fries
            </p>
            <div className="inside-text">
              <p>EGP 210.00</p>
              <button className="btn">ADD</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
