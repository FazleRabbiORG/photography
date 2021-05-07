import React from "react";
import { Link } from "react-router-dom";
import locationImage from "../../../images/location.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="d-md-flex w-100 p-5 footer">
      <div className="col-md-4 p-5 row d-flex align-items-center">
        <img className="img-fluid rounded" src={locationImage} alt="" />
      </div>

      <div className="col-md-4 d-flex align-items-center text-light">
        <h5 className="ml-3">
          {" "}
          <FontAwesomeIcon
            className="text-primary"
            icon={faAddressCard}
          ></FontAwesomeIcon>{" "}
          1180 Avenue Of The Americas,
          <br /> 8th Floor <br /> New York, NY 10036
        </h5>
      </div>
      <div className="col-md-4 p-5 m-auto">
        <div className=" d-flex flex-column">
          <Link className="h6 m-2 text-light">Home</Link>
          <Link className="h6 m-2 text-light">Contact us</Link>
          <Link className="h6 m-2 text-light">Terms To use</Link>
          <Link className="h6 m-2 text-light">Privacy policy</Link>
          <Link className="h6 m-2 text-light">Work with us</Link>
          <div>
            <FontAwesomeIcon
              className="h1 text-primary m-2"
              icon={faFacebook}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="h1 text-danger m-2"
              icon={faYoutubeSquare}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="h1 text-primary m-2"
              icon={faFacebookMessenger}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
