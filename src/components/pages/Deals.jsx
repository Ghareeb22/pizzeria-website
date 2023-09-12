import React from "react";
import "../../App.css";
import Deals from "../Deals";
import Footer from "../Footer";
function Home() {
  return (
    <>
      <div className="deals">
        <Deals />
      </div>
      <Footer />
    </>
  );
}
export default Home;
