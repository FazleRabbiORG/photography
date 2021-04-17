import React from 'react';

const PortfolioCard = ({info}) => {
    return (
        <div className ="m-2">
            <img  src={info.img} alt="" className="img-fluid"/>
        </div>
    );
};

export default PortfolioCard;