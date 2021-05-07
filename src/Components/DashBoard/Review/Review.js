import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://polar-hollows-69401.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="admin-bg ">
      <div style={{borderRadius:'20px'}} className=" col-md-6 m-auto mt-5 bg-white p-5">
        <h5 className="text-secondary">Review</h5>
        <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
          <input
          placeholder="Your name"
            className="form-control m-2 "
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <input
          placeholder="Your company Name"
            className="form-control m-2 "
            {...register("companyName", { required: true })}
          />
          {errors.companyName && <span>This field is required</span>}
          <textarea
          placeholder="Comment"
            className="form-control m-2 "
            {...register("comment", { required: true })}
          ></textarea>
          {errors.comment && <span>This field is required</span>}

          <input
            className="form-control m-2 btn btn-danger 'd-none' "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
