import React from 'react';

const PortfolioCard = ({info}) => {
    return (
        <div className ="col-md-4">
            <img  src={info.img} alt="" className="img-fluid rounded mb-3"/>
        </div>
    );
};

export default PortfolioCard;