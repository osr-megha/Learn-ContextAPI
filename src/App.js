import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />

            {/*<Route exact path='/'>
         <Home cart={cart} setCart={setCart} />
            </Route>
              <Route exact path='/cart'>
             <Cart cart={cart} setCart={setCart} />
      </Route>*/}

            {/*<Route path="/" element={<Navigate replace to="/home" />} />*/}
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
