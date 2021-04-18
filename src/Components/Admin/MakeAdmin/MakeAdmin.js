import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://polar-hollows-69401.herokuapp.com/makeAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="admin-bg ">
      <div className="d-flex justify-content-between">
        <h4>Make Admin</h4>
      </div>
      <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control m-2 "
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input className="m-2 btn btn-outline-info " type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
