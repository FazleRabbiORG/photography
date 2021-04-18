import React, { useContext, useEffect, useState } from 'react';
import OrderListCard from './OrderListCard/OrderListCard';

const OrderList = () => {
    const [orderList, setOrderList]=useState([])
    useEffect(()=>{
        fetch('https://polar-hollows-69401.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrderList(data))
    },[])
console.log(orderList)
    return (
        <div className="admin-bg">
            <h5 className="text-secondary">Order List</h5>
        <div className="row ">
            {
                orderList.map(order=><OrderListCard order={order}></OrderListCard>)
            }
        </div>
        </div>
    );
};

export default OrderList;