import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const [imageUrl, setImageUrl] = useState("");
  const handleImageUpload = (e) => {
    let body = new FormData();
    body.set("key", "d9df22459998db9719f423a928f646a7");
    body.append("image", e.target.files[0]);

    return axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    }).then((res) => setImageUrl(res.data.data.url));
  };

  const onSubmit = (data) => {
    fetch("https://polar-hollows-69401.herokuapp.com/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ data, imageUrl, date: new Date() }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="admin-bg">
      <div className="d-flex justify-content-between ">
        <h4>Add Service</h4>
      </div>

      <div className="w-75">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control m-2 "
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            className="form-control m-2 "
            placeholder="Price"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
          <textarea
            className="form-control m-2 "
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.description && <span>This field is required</span>}

          <input
            onChange={handleImageUpload}
            className="form-control m-2"
            type="file"
            name="serviceImg"
          />

          <input
            className="form-control m-2 btn btn-outline-info 'd-none' "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};


export default AddService;
