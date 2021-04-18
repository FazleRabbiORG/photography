import React from "react";
import { Link } from "react-router-dom";
import "./PackageCard.css";
const PackageCard = ({ info }) => {
  const { name, price, description } = info.data;
  return (
    <div className="col-md-4">
      <div className="p-4 mt-5 mb-5 bg-light border rounded d-flex flex-column justify-content-between">
        <img
          className="img-fluid packageImg"
          style={{ borderRadius: "50%" }}
          src={info.imageUrl}
          alt=""
        />
        <h3 className="text-primary text-center mt-3 font-weight-bold">
          {name}{" "}
        </h3>
        <h3 className="text-danger">$ {price}</h3>
        <h6 className="text-secondary mt-4 mb-4 "> {description}</h6>
        <Link to="/dashboard">
          <button className="btn btn-primary h6"> Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
