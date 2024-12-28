import "./App.css";
import { useCartStore } from "./store";
import { FakeData } from "./lib/fakeData";
import Cart from "./cart/Cart";
import Counter from "./cart/Counter";

function App() {
  // const { count, increment, decrement } = useCounterStore((state) => state);
  // shouldn't use like because It can happen unnecessary error
  const cart = useCartStore((state) => state.cart);
  const removeItems = useCartStore((state) => state.removeItems);

  return (
    <>
      {/* <div>
        <h3>Counter App with Zustand</h3>
        <h4>{count}</h4>
        <button onClick={increment}>Add 1+</button>
        <button onClick={decrement}>Reduce 1-</button>
      </div> */}
      <div>
        <h4>Cart</h4>
        <div>
          {FakeData.map((data, i) => (
            <Cart data={data} key={i} />
          ))}
        </div>

        <hr />

        <h4>Items in Cart</h4>
        <Counter />

        <div>
          {cart.map((item, i) => (
            <div key={i}>
              <h1>title - {item.title}</h1>
              <p>Qty - {item.qty}</p>
              <p>Amount - {item.amount}</p>
              <button onClick={() => removeItems(i)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
