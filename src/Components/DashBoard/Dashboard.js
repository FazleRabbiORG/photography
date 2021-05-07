import React from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Order from "./Order/Order";
import OrderList from "./OrderList/OrderList";
import Review from "./Review/Review";

const Dashboard = () => {
  return (
    <div style={{backgroundColor:'#1e292f'}} className="">
      <Navbar></Navbar>
      <div className='d-md-flex'>
      <HashRouter>
        <div className="col-md-2 mt-5">
          <Link style={{borderBottom:'1px solid lightGray'}} class="nav-link   text-light  h6 " to="/order">
            Order
          </Link>
          <Link style={{borderBottom:'1px solid lightGray'}} class="nav-link  text-light  h6 " to="/orderList">
            OrderList
          </Link>
          <Link style={{borderBottom:'1px solid lightGray'}} class="nav-link  text-light h6 " to="/review">
            Review
          </Link>
        </div>
        <div className="col-md-10 content ">
          <Route path="/order" component={Order} />
          <Route path="/orderList" component={OrderList} />
          <Route path="/review" component={Review} />
        </div>
      </HashRouter>
      </div>
    </div>
  );
};

export default Dashboard;
