/* 
  ALERT MESSAGE IMPLEMENTATION IN REACT APPLICATION
  STEPS: 1.    npm i @sweetalert/with-react --force
         2.     npm install --save sweetalert2 --force ----- SweetAlert2

  ADD TO CART
  AddToCart functionality is the prominant functionality in any E-Commerce application.
  Using Axios Concept - AddToCart is done with CRUD operations.
  To simplify AddToCart functionality, useCart Hook is used. 

  Steps to use 'useCart' Hook in our application
  
  1. install react-use-cart Rect Library
      npm install react-use-cart --force
  
  2. Use CartProvider Hook  -- 
      -The set of all components to implement AddToCart functionality is wrapped into CartProvider component
      -Then, the predefined functionality for AddToCart Hook will be identified and used
      -All the functionalities for AddToCart task must be nested in our component using CartProvider component  
      
      -For AddToCart Implementation, we use the following components
        Cart, CartProducts & Navbar // (Cart Count is attached in Navbar)

 */
  
//npm install react-use-cart --force
import React from "react";
import { CartProvider } from "react-use-cart";
import Cart from "./Cart";
import CartProducts from "./CartProducts";
//import Nav from "./Navbar";

function AddToCart() {
  return (
    <div style={{ marginLeft: 200, marginRight: 200 }}>
      <CartProvider>
        {/* <Nav />  */}
        <CartProducts />
        <hr />
        <Cart />
      </CartProvider>
    </div>
  );
}
export default AddToCart;
