import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const loggedInUserEmail = loggedInUser.email;
  const [admin, setAdmin] = useState([]);

  useEffect(
    (loggedInUserEmail) => {
      fetch("https://polar-hollows-69401.herokuapp.com/admin")
        .then((res) => res.json())
        .then((data) => setAdmin(data));
    },
    [loggedInUserEmail]
  );

  console.log("loffe", loggedInUserEmail);
  console.log("|admin", admin);
  const adminEmail = admin.find(
    (element) => element.data.email === loggedInUserEmail
  );
  console.log("adminEmail", adminEmail);

  const handleLogoutBtn = () => {
    setLoggedInUser("");
    sessionStorage.removeItem("token");
  };
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light font-weight-bold">
        <Link  class="navbar-brand bg-light pt-2 pb-2 pl-4 pr-4 rounded" to="/">
          L<span className="text-danger">O</span>G<span className="text-danger">O</span> <span className="text-primary">BAKERY</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            {!adminEmail && loggedInUserEmail && (
              <li class="nav-item">
                <Link class="nav-link h6 mr-4" to="/dashboard">
                  DashBoard
                </Link>
              </li>
            )}
            {adminEmail && (
              <li class="nav-item">
                <Link class="nav-link h6 mr-4" to="/admin">
                  Admin
                </Link>
              </li>
            )}
            {!loggedInUserEmail ? (
              <li class="nav-item">
                <Link to="/login">
                  <button class=" h6 mr-4 btn btn-primary " to="/login">
                    Login
                  </button>
                </Link>
              </li>
            ) : (
              <li class="nav-item">
                <button
                  onClick={handleLogoutBtn}
                  class=" h6 mr-4 btn btn-primary "
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
