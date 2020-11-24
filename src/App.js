import React, { useState } from "react";
import "./styles.css";
import OrderForm from "./OrderForm";
import Matrix from "./Matrix";
import { mock_order } from "./defaults";

export default function App() {
  const [order, setOrder] = useState(mock_order);
  const [orderVisible, setOrderVisible] = useState(false);
  return (
    <div className="App">
      <h2>Modify test order </h2>
      <button onClick={() => setOrderVisible((prev) => !prev)}>
        {orderVisible ? "Hide" : "Show"} Order
      </button>
      <OrderForm
        orderVisible={orderVisible}
        order={order}
        setOrder={setOrder}
      />
      <Matrix order={order} />
    </div>
  );
}
