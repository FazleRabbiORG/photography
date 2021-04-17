import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch('https://polar-hollows-69401.herokuapp.com/addReview',{
      method:'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify({data})
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control m-2 "
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <input
            className="form-control m-2 "
            {...register("companyName", { required: true })}
          />
          {errors.companyName && <span>This field is required</span>}
          <textarea
            className="form-control m-2 "
            {...register("comment", { required: true })}
          >
            
          </textarea>
          {errors.comment && <span>This field is required</span>}

          <input
            className="form-control m-2 btn btn-outline-info 'd-none' "
            type="submit"
          />
        </form>
    </div>
  );
};

export default Review;
