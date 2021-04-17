import React from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Order from "./Order/Order";
import OrderList from "./OrderList/OrderList";
import Review from "./Review/Review";

const Dashboard = () => {
  return (
    <div className="row w-100">
      <Navbar></Navbar>
      <HashRouter>
        <div className="col-md-3 offset-md-1">
            <Link class="nav-link " to="/order">
              Order
            </Link> 
            <Link class="nav-link" to="/orderList">
              OrderList
            </Link>
            <Link class="nav-link" to="/review">
              Review
            </Link>
        </div>
        <div className="col-md-8 content">
          <Route path='/order' component={Order} />
          <Route path="/orderList" component={OrderList} />
          <Route path="/review" component={Review} />
        </div>
      </HashRouter>
    </div>
  );
};

export default Dashboard;
