import React, { useState } from "react";
import { mock_order } from "./defaults";
const OrderHeader = ({
  fba_order,
  setFba_order,
  contract_number,
  setContract_number
}) => {
  return (
    <>
      <p>
        Order #
        <input
          type="text"
          value={fba_order}
          onChange={(e) => setFba_order(e.target.value)}
        />
      </p>
      <p>
        Contract #
        <input
          type="text"
          value={contract_number}
          onChange={(e) => setContract_number(e.target.value)}
        />
      </p>
    </>
  );
};
const Sender = () => {
  return (
    <div>
      <h3>Sender</h3>
      <p>
        name
        <input type="text" value={"Bogena Codu"} disabled />
      </p>
      <p>
        company
        <input type="text" value={"K&C"} disabled />
      </p>
      <p>
        city
        <input type="text" value={"Dziurawce"} disabled />
      </p>
      <p>
        address_line_1
        <input type="text" value={"ul Wyrwana 7"} disabled />
      </p>
      <p>
        zip_code
        <input type="text" value={"66-693"} disabled />
      </p>
      <p>
        country
        <input type="text" value={"country"} disabled />
      </p>
      <p>
        tel
        <input type="text" value={"0048133456789"} disabled />
      </p>
      <p>
        email <input type="text" value={"bog@ge.na"} disabled />
      </p>
    </div>
  );
};

const OrderForm = ({ order, orderVisible, setOrder }) => {
  const [fba_order, setFba_order] = useState(order.fba_order);
  const [contract_number, setContract_number] = useState(
    order.internal_routing.contract_number
  );
  const [country, setCountry] = useState(order.receiver.country);
  const [weight, setWeight] = useState(order.packages[0].weight);
  const [size_l, setSizeL] = useState(order.packages[0].size_l);
  const [size_w, setSizeW] = useState(order.packages[0].size_w);
  const [size_d, setSizeD] = useState(order.packages[0].size_d);
  const [value, setValue] = useState(order.packages[0].value);

  // console.log(order);

  const handleSave = (e) => {
    e.preventDefault();
    const newOrder = { ...mock_order };
    newOrder.fba_order = fba_order;
    newOrder.internal_routing.contract_number = contract_number;
    newOrder.receiver.country = country;
    newOrder.packages[0].weight = weight;
    newOrder.packages[0].size_l = size_l;
    newOrder.packages[0].size_w = size_w;
    newOrder.packages[0].size_d = size_d;
    newOrder.packages[0].value = value;

    setOrder({ ...newOrder });
  };

  if (orderVisible) {
    return (
      <form>
        <button className="save" onClick={handleSave} type="submit">
          Save Order!
        </button>
        <OrderHeader
          fba_order={fba_order}
          setFba_order={setFba_order}
          contract_number={contract_number}
          setContract_number={setContract_number}
        />
        <div style={{ display: "flex" }}>
          <Sender />
          <div>
            <h3>Reciver</h3>

            <p>
              name
              <input type="text" value={"Bogena Codu"} disabled />
            </p>
            <p>
              company
              <input type="text" value={"K&C"} disabled />
            </p>
            <p>
              city
              <input type="text" value={"Dziurawce"} disabled />
            </p>
            <p>
              address_line_1
              <input type="text" value={"ul Wyrwana 7"} disabled />
            </p>
            <p>
              zip_code
              <input type="text" value={"66-693"} disabled />
            </p>
            <p>
              Country #
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </p>
            <p>
              tel
              <input type="text" value={"0048133456789"} disabled />
            </p>
            <p>
              email <input type="text" value={"bog@ge.na"} disabled />
            </p>
          </div>
        </div>

        <div>
          <h3>Packages</h3>
          <table>
            <thead>
              <tr>
                <th>fba_number</th>
                <th>weight</th>
                <th>size_l</th>
                <th>size_w</th>
                <th>size_d</th>
                <th>content</th>
                <th>value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{order.packages[0].fba_number}</td>
                <td>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={size_l}
                    onChange={(e) => setSizeL(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={size_w}
                    onChange={(e) => setSizeW(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={size_d}
                    onChange={(e) => setSizeD(e.target.value)}
                  />
                </td>
                <td>
                  <input disabled type="text" value={"furnitures, etc..."} />
                </td>
                <td>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    );
  } else {
    return <p>- - - click button to see order form here - - - </p>;
  }
};

export default OrderForm;
