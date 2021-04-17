import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../Testimonial/TestimonialCard/TestimonialCard";

const testimonialInfo = [
  {
    name: "jhon heirston",
    company: "amazon",
  },
  {
    name: "Bill Gates",
    company: "Microsoft",
  },
  {
    name: "lorem thomas",
    company: "Google",
  },
  {
    name: "amir albani",
    company: "petrolium",
  },
  {
    name: "thomas heirston",
    company: "Google",
  },
];
const TestimonialCardSlider = () => {
  const [reviews,setReviews] = useState([])
  useEffect(() => {
    fetch("https://polar-hollows-69401.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        console.log('[data]',data)
        setReviews(data)
      });
  }, []);
console.log(reviews)
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="w-100">
      <Slider {...settings}>
        {reviews.map((info) => (
          <TestimonialCard info={info}></TestimonialCard>
        ))}

        {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div> */}
      </Slider>
    </div>
  );
};

export default TestimonialCardSlider;
