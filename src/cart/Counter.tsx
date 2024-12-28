import React from "react";
import { useCartStore } from "../store";

function Counter() {
    const cart = useCartStore((state)=> state.cart)
  return <div>Number of Cart = {cart.length}</div>;
}

export default Counter;
