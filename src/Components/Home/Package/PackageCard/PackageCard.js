import React from "react";
import { isElementOfType } from "react-dom/test-utils";

const PackageCard = ({ info }) => {
  const {name,price,description}=info.data;
  return (
    <div className="col-md-4">
      <div style={{height:"30em"}} className="p-2 mt-5 mb-5 bg-light rounded d-flex flex-column justify-content-between">
        <img className="img-fluid" style={{borderRadius:"50%"}} src={info.imageUrl} alt=""/>
        <h3 className="text-info text-center mt-3 font-weight-bold">{name} </h3>
        <h3 className="text-danger">$ {price}</h3>
        <h6 className='text-secondary'> {description}</h6>
        <button className="btn btn-info h6"> Order Now</button>
      </div>
    </div>
  );
};

export default PackageCard;
