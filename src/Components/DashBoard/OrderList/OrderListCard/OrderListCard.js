import React from "react";

const OrderListCard = ({ order }) => {
  return (
    <div className="col-md-4  ">
      <div className="bg-light border m-2 p-4 rounded">
        <h4 className="pb-2 pt-1 rounded text-light bg-secondary mb-5 text-center">{order.orderInfo.plan} Plan</h4>
        <span className="h5 rounded bg-warning mt-5 m-3 pl-4 pr-4 pb-2 pt-2">
          {order.status}
        </span>
        {/* <span className="h5 bg-success pl-5 pr-5 pb-2 pt-2">Done</span> */}
      </div>
    </div>
  );
};

export default OrderListCard;
