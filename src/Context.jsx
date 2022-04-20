import React, { createContext, useState } from "react";

export const CartContent = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContent.Provider value={{ cart, setCart }}>
      {children}
    </CartContent.Provider>
  );
};

export default Context;
