import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Payment from "./Payment/Payment.js";

const Order = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending" 
    setOrderInfo(data);
  };

  const processOrder = (paymentId)=>{
    fetch('https://polar-hollows-69401.herokuapp.com/newOrder',{
      method:'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify({orderInfo,paymentId})
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  return (
    <div>
      {!orderInfo.email ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control m-2 "
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <input
            className="form-control m-2 "
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <select
            className="form-control m-2 "
            {...register("plan", { required: true })}
          >
            <option value="baby">Baby</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          {errors.plan && <span>This field is required</span>}

          <input
            className="form-control m-2 btn btn-outline-info 'd-none' "
            type="submit"
          />
        </form>
      ) : (
        <div>
          <Payment processOrder={processOrder}></Payment>
        </div>
      )}
    </div>
  );
};

export default Order;
