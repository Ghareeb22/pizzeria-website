import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Deals from "./components/pages/Deals";
import SignUp from "./components/pages/SignUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
          <Route path="/deals" exact element={<Deals />}></Route>
          <Route path="/sign-up" exact element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
