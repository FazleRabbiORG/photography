import React from "react";
import { Link } from "react-router-dom";
import "./PackageCard.css";
const PackageCard = ({ info }) => {
  console.log(info.data);
  const { name, price, description } = info.data;
  return (
    <div style={{ borderRadius: "20px" }} className="col-md-4">
      <div className="p-4 mt-5 mb-5 bg-light border rounded d-flex flex-column justify-content-between">
        <img
          className="img-fluid packageImg w-50 m-auto"
          style={{ borderRadius: "50%" }}
          src={info.imageUrl}
          alt=""
        />
        <h3 className="text-dark text-center mt-3 font-weight-bold">
          {name} Plan
        </h3>
        <h3 className="text-danger font-weight-bold">$ {price}</h3>
        <div className="flex">
          <Link to="/dashboard#/order">
            <button className="btn btn-secondary pl-5 pr-5 pt-2 pb-2 h6 text-center">
              {" "}
              Buy Now
            </button>
          </Link>

          {/* popup */}
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-danger pl-5 pr-5 pt-2 pb-2 h6 text-center"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            view more
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    {name} Plan
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {" "}
                  <h5>$ {price}</h5>
                  <p>{description}</p>
                </div>
                <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      close
                    </button>
                </div>
              </div>
            </div>
          </div>
          <Link to="/viewDetails/"></Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
