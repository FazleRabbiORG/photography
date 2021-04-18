import React from "react";
import headerImage from "../../../images/headerImage.jpg";

const HeaderMain = () => {
  return (
    <div style={{ width: "100%" }} className="row ">
      <div className="col-md-6">
        <img
          style={{ height: "30em" }}
          src={headerImage}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-md-5 offset-md-1 d-flex align-items-center">
        <div className="p-3">
          <h2 className="text-primary font-weight-bold">LOGO BAKERY</h2>
          <h6 className="text-secondary mt-5 mb-5">
            Need a quality, custom logo? Our team will create a stunning,
            original design for you that will make your business stand out from
            the crowd and help you wow competitors and customers alike.
          </h6>
          <button className="btn btn-primary font-weight-bold">SEE PRICING</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
