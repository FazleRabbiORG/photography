import React, { useEffect } from "react";
import { useState } from "react";
import PackageCard from "./PackageCard/PackageCard";

const packageInfo = [
  {
    price: 290,
    title: "Logo Only",
    service: [
      "5 Logo Designers",
      "5 Concepts",
      "Unlimited Redraws",
      "Unlimited Revisions",
      "Money-Back Guarantee",
      "Copyright Transfer",
    ],
  },
  {
    price: 300,
    title: "Logo + Matched Stationery",
    service: [
      "5 Logo Designers",
      "5 Concepts",
      "Unlimited Redraws",
      "Unlimited Revisions",
      "Money-Back Guarantee",
      "Copyright Transfer",
      "Business Card Design",
      "Letterhead Design",
      "Envelope Design",
    ],
  },
  {
    price: 450,
    title: "Logo + Matched Stationery + 500 Business Cards",
    service: [
      "5 Logo Designers",
      "5 Concepts",
      "Unlimited Redraws",
      "Unlimited Revisions",
      "Money-Back Guarantee",
      "Copyright Transfer",
      "Business Card Design",
      "Letterhead Design",
      "Envelope Design",
      "500 Business Cards",
    ],
  },
];

const Package = () => {

  const [packages, setPackages]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
  return (
      <div className="row w-75 m-auto" >
        {packages.map((info) => (
          <PackageCard info={info}></PackageCard>
        ))}
    </div>
  );
};

export default Package;
