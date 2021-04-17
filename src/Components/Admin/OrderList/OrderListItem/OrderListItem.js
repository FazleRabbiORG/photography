import React, { useEffect, useState } from "react";

const OrderListItem = ({order}) => {
  const { name, email, plan } = order.orderInfo;
  const handleStatusUpdate = (id) => (e) => {
    const status = e.target.value;
    console.log("changed");
    console.log("e", e.target.value);
    fetch("https://polar-hollows-69401.herokuapp.com/update/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  console.log(order.status)
  return (
    <tbody>
      <td>{name}</td>
      <td>{email}</td>
      <td>{plan}</td>
      <td>Visa Card</td>
      <td>
          
              <span className="bg-dark text-light">status</span>
        <select
          onChange={handleStatusUpdate(order._id)}
          name="status"

        >
          <option  className="text-danger" value="pending">
            Pending
          </option>
          <option  className="text-danger" value="processing">
            Processing
          </option>
          <option className="text-danger" value="done">
            Done
          </option>
        </select>
      </td>
    </tbody>
  );
};

export default OrderListItem;
