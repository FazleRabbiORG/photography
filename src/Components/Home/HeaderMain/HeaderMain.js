import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import headerImage from "../../../images/desktop_slider-2.png";
import MoneyBack from "../../../images/money-back.svg";
import satisfaction from "../../../images/satisfaction.svg";
import customer from "../../../images/custom-design.svg";
import support from "../../../images/customer-support.svg";
import award from "../../../images/award-winning.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <div>
      <div style={{ width: "100%" }} className="row HeaderMain">
        <div className="col-md-5 offset-md-1 d-flex align-items-center">
          <div className="text-light m-2">
            <h1 className="text-light font-weight-bold font-weight-bold">
              Uplift Your Brand Image <br /> With Brands Design.
            </h1>
            <div className="p-2">
              <h6>
                {" "}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> High
                Quality In Affordable Prices
              </h6>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> 100%
                Money-back Guarantee
              </h6>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> 24 Hrs
                Turnaround time
              </h6>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> 100%
                Ownership Rights
              </h6>
            </div>
            <button className="btn btn-primary font-weight-bold">
              SEE PRICING
            </button>
          </div>
        </div>
        <div className="col-md-5 p-3">
          <img
            style={{ height: "30em" }}
            src={headerImage}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="d-md-flex text-white">
        <div
          style={{ backgroundColor: "#7bb242" }}
          className="col-md-3 pl-5 pt-1 d-flex"
        >
          <div className="w-25 ">
            <img
              className="img-fluid d-flex align-items-center pt-2 pb-2"
              src={MoneyBack}
              alt=""
            />
          </div>
          <h5 className="w-75 d-flex align-items-center pl-2">
            100% Money-back Guarantee
          </h5>
        </div>
        <div
          style={{ backgroundColor: "#f48a1f" }}
          className="col-md-3 pl-5 pt-1 d-flex"
        >
          <div className="w-25 ">
            <img
              className="img-fluid d-flex align-items-center pt-2 pb-2"
              src={satisfaction}
              alt=""
            />
          </div>
          <h5 className="w-75 d-flex align-items-center pl-2">
            100% satisfaction Guarantee
          </h5>
        </div>
        <div
          style={{ backgroundColor: "#e63b34" }}
          className="col-md-3 pl-5 pt-1 d-flex"
        >
          <div className="w-25 ">
            <img
              className="img-fluid d-flex align-items-center pt-2 pb-2"
              src={customer}
              alt=""
            />
          </div>
          <h5 className="w-75 d-flex align-items-center pl-2">
            100% Custom Design
          </h5>
        </div>
        <div
          style={{ backgroundColor: "#2f83d1" }}
          className="col-md-3 pl-5 pt-1 d-flex"
        >
          <div className="w-25 ">
            <img
              className="img-fluid d-flex align-items-center pt-2 pb-2"
              src={support}
              alt=""
            />
          </div>
          <h5 className="w-75 d-flex align-items-center pl-2">
            24/7 Customer Support
          </h5>
        </div>
        
      </div>
      <div className="text-center text-light p-5 ">
          <img src={award} alt="" />
          <h2 className="font-weight-bold">Custom Logo Design Agency</h2>
          <h6>
            Brands Design is a leading branding agency specializing in custom
            logo designs and crafting aesthetic brand identities. We aim at
            providing our clients with professional yet niche related branding
            services targeted at turning their audiences into clients.
          </h6>
        </div>
    </div>
  );
};

export default HeaderMain;
