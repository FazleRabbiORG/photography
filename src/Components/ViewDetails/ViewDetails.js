import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ViewDetails = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://polar-hollows-69401.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  console.log(packages);
  return (
    <div>
      <Navbar />
      <h3>this is view details page</h3>
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
      <Footer />
    </div>
  );
};

export default ViewDetails;
