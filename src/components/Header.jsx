import React, {useContext} from "react";
import "./styles.css";
import {CartContent} from '../Context';

import { Link } from "react-router-dom";

const Header = () => {

  const {cart} = useContext(CartContent);
  return (
    <div>
      <span className="header">Learning Context API</span>
      <ul className="nav">
        <li>
          <Link to="/"> Home Page </Link>
        </li>
        <li>
          <Link to="/cart">
            Cart Page
            ({cart.length})
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
