import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";

const ManagePackageCard = ({info}) => {
  const [deleteSpinner, setDeleteSpinner] = useState(false);

    const [deleteItem,setDeleteItem]= useState('')
    const {name,price} = info.data
    const handleDeleteBtn=(id)=>{
      setDeleteSpinner(true)
        fetch('https://polar-hollows-69401.herokuapp.com/delete/'+id)
        .then(res=>res.json())
        .then(data=>{
            if (data) {
              setDeleteSpinner(false)
            setDeleteItem("d-none")
            
            } 
          })
    }
    console.log(info._id)
  return (
    <tbody className={deleteItem} >
        <td>{name}</td>
        <td >${price}</td>
        <td>{info.date?new Date(info.date).toDateString():"date"}</td>
        <td><span onClick={()=>handleDeleteBtn(info._id)} className="h6 btn btn-outline-danger rounded "  >delete</span>
        {deleteSpinner && <span ><CircularProgress color="primary" /></span>}
        </td>
    </tbody>
  );
};

export default ManagePackageCard;
