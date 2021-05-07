import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Dashboard from "./Components/DashBoard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute";
import "./App.css";
import Package from "./Components/Home/Package/Package";
import Portfolio from "./Components/Home/Portfolio/Portfolio";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import ContactUs from "./Components/Home/ContactUs/ContactUs";

export const UserContext = createContext("");

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className=".App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            
            <Route path="/portfolio">
              <Navbar></Navbar>
              <Portfolio></Portfolio>
              <Footer></Footer>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
