import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Order = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setOrderInfo(data);
  };

  const processOrder = () => {
    fetch("https://polar-hollows-69401.herokuapp.com/newOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ orderInfo, status: "pending" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="admin-bg">
      <div style={{borderRadius:'20px'}} className="col-md-6 m-auto mt-5 bg-white p-5">
      <h5 className="text-secondary">New Order</h5>
        <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control m-2 "
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <input
          placeholder="Email Address"
            className="form-control m-2 "
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <select
            className="form-control m-2 "
            {...register("plan", { required: true })}
          >
            <option selected value="selected">Select plan</option>
            <option value="baby">weeding</option>
            <option value="medium">Product</option>
            <option value="large">Fashion</option>
          </select>
          {errors.plan && <span>This field is required</span>}

          <input
            onClick={processOrder}
            className="form-control m-2 btn btn-danger 'd-none' "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Order;
