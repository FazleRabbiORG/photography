import React from "react";
import { Link } from "react-router-dom";
import locationImage from "../../../images/location.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookMessenger, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="row w-100 ">
      <div className="col-md-7 offset-md-1 d-flex align-items-center">
        <img className="img-fluid rounded" src={locationImage} alt="" />
        <h5 className="ml-3"> <FontAwesomeIcon className="text-info" icon={faAddressCard}></FontAwesomeIcon> 1180 Avenue Of The Americas, 8th Floor New York, NY 10036</h5>
      </div>
      <div className="col-md-2">
          <div className=" d-flex flex-column">
          <Link className='h6 m-2 text-dark'>Home</Link>
          <Link className='h6 m-2 text-dark'>Contact us</Link>
          <Link className='h6 m-2 text-dark'>Terms To use</Link>
          <Link className='h6 m-2 text-dark'>Privacy policy</Link>
          <Link className='h6 m-2 text-dark'>Work with us</Link>
          <div>
            <FontAwesomeIcon  className="h1 text-primary m-2"icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className="h1 text-danger m-2"icon={faYoutubeSquare}></FontAwesomeIcon>
            <FontAwesomeIcon className="h1 text-info m-2"icon={faFacebookMessenger}></FontAwesomeIcon>
          </div>
          </div>
      </div>

    </div>
  );
};

export default Footer;
