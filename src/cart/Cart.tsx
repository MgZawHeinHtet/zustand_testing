import React from "react";
import { CartItem } from "../types/cartItem";
import { useCartStore } from "../store";

function Cart({ data }: { data: CartItem }) {
  const addItems = useCartStore((state) => state.addItems);

  return (
    <div style={{border: '1px solid red'}}>
      <h1>title - {data.title}</h1>
      <p>Qty - {data.qty}</p>
      <p>Amount - {data.amount}</p>
      <button
        onClick={() =>
          addItems({
            title: data.title,
            qty: data.qty,
            amount: data.amount,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;
