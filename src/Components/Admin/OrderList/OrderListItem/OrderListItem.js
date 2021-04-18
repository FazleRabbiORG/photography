import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";

const OrderListItem = ({ order }) => {
  const { name, email, plan } = order.orderInfo;
  const [newStatus, setNewStatus] = useState(order.status);
  const [statusChangeSpinner, setStatusChangeSpinner] = useState(false);
  const handleStatusUpdate = (id) => (e) => {
    setStatusChangeSpinner(true);
    const status = e.target.value;
    fetch("https://polar-hollows-69401.herokuapp.com/update/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatusChangeSpinner(false);
        setNewStatus(status);
      });
  };
  return (
    <tbody>
      <td>{name}</td>
      <td>{email}</td>
      <td>{plan}</td>
      <td>Visa Card</td>
      <td>
        {statusChangeSpinner ? (
          <span>
            <CircularProgress color="primary" />
          </span>
        ) : (
          <span className="bg-dark text-light p-2 m-1 rounded">
            {newStatus}
          </span>
        )}
        <select onChange={handleStatusUpdate(order._id)} name="status">
          <option className="text-danger" value="pending">
            Pending
          </option>
          <option className="text-danger" value="processing">
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
