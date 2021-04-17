import React, { useState } from "react";

const ManagePackageCard = ({info}) => {
    const [deleteItem,setDeleteItem]= useState('')
    const {name,price} = info.data
    const handleDeleteBtn=(id)=>{
        fetch('http://localhost:5000/delete/'+id)
        .then(res=>res.json())
        .then(data=>{
            setDeleteItem("d-none")
            console.log(data)})
    }
    console.log(info._id)
  return (
    <tbody className={deleteItem} >
        <td>{name}</td>
        <td >${price}</td>
        <td>{info.date?new Date(info.date).toDateString():"date"}</td>
        <td><span onClick={()=>handleDeleteBtn(info._id)} className="h6 btn btn-outline-danger rounded "  >delete</span></td>
    </tbody>
  );
};

export default ManagePackageCard;
