import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Rating from '@material-ui/lab/Rating';

const TestimonialCard = ({ info }) => {
  return (

    <div className="ml-5 mr-5 p-5 bg-white rounded shadow border">
      <div className="d-flex justify-content-between">
        <div>
          <FontAwesomeIcon
            className="text-primary h1"
            icon={faQuoteLeft}
          ></FontAwesomeIcon>
        </div>
        <div>
          
          <Rating name="disabled" value={4} disabled />
        </div>
      </div>
      <h6 className="text-secondary mt-5 mb-5">
        comment
        {info.data.comment}
      </h6>
      <FontAwesomeIcon
        className="text-primary h1"
        icon={faQuoteRight}
      ></FontAwesomeIcon>
      <h2 className="text-primary">{info.data.name}</h2>
      <h4 className="text-danger">{info.data.companyName}</h4>
    </div>
  );
};

export default TestimonialCard;
