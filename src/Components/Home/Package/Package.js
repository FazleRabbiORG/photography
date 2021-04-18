import React, { useEffect } from "react";
import { useState } from "react";
import PackageCard from "./PackageCard/PackageCard";

const Package = (props) => {
  const [homeProgress,setHomeProgress]=props.homeProgress
  const [packages, setPackages]=useState([])
    useEffect(()=>{
      setHomeProgress(true)
        fetch('https://polar-hollows-69401.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>{
          setHomeProgress(false)
          setPackages(data)})
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
