import React, { useEffect } from "react";
import { useState } from "react";
import "./OrderList.css";
import OrderListItem from "./OrderListItem/OrderListItem";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  
  useEffect(() => {
    fetch("https://polar-hollows-69401.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  console.log(orderList);
  
  return (
    <div className="admin-bg">
      <div className="d-flex justify-content-between">
        <h4 className="text-secondary">OrderList</h4>
      </div>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Service</th>
          <th>Pay With</th>
          <th>Status</th>
        </thead>
        {orderList.map((order) =><OrderListItem order={order}></OrderListItem> )}
      </table>
    </div>
  );
};

export default OrderList;
