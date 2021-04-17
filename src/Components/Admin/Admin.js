import React, { useContext } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import { UserContext } from "../../App";
import Navbar from "../Home/Navbar/Navbar";
import AddService from "./AddService/AddService";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageService from "./ManageService/ManageService";
import OrderList from "./OrderList/OrderList";

const Admin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      <Navbar></Navbar>
      <div className="row w-100">
        <HashRouter>
          <div className="col-md-3 offset-md-1">
            <Link class="nav-link " to="/orderList">
              Order List
            </Link>
            <Link class="nav-link" to="/addService">
              Add Service
            </Link>
            <Link class="nav-link" to="/makeAdmin">
              Make Admin
            </Link>
            <Link class="nav-link" to="/manageService">
              Manage Service
            </Link>
          </div>
          <div className="col-md-8 content">
            <Route path="/addService" component={AddService} />
            <Route path="/orderList" component={OrderList} />
            <Route path="/makeAdmin" component={MakeAdmin} />
            <Route path="/manageService" component={ManageService} />
          </div>
        </HashRouter>
      </div>
    </div>
  );
};

export default Admin;
