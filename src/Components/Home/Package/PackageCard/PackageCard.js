import React from "react";
import { Link } from "react-router-dom";
import "./PackageCard.css";
const PackageCard = ({ info }) => {
  const { name, price, description } = info.data;
  return (
    <div style={{borderRadius:'20px'}} className="col-md-4">
      <div className="p-4 mt-5 mb-5 bg-light border rounded d-flex flex-column justify-content-between">
        <img
          className="img-fluid packageImg w-50 m-auto"
          style={{ borderRadius: "50%" }}
          src={info.imageUrl}
          alt=""
        />
        <h3 className="text-dark text-center mt-3 font-weight-bold">
          {name}{" "}Plan
        </h3>
        <h3 className="text-danger font-weight-bold">$ {price}</h3>
        <h6 className="text-secondary mt-4 mb-4 "> {description}</h6>
        <Link to="/dashboard#/order">
          <button className="btn btn-danger pl-5 pr-5 pt-2 pb-2 h6 text-center"> Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
