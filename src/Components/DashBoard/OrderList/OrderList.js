import React, { useEffect, useState } from 'react';
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
        <div className="row">
            {
                orderList.map(order=><OrderListCard order={order}></OrderListCard>)
            }
        </div>
    );
};

export default OrderList;