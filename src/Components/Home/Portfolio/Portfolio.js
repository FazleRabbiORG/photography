import React from 'react';
import bride1 from '../../../images/bride1.jpg'
import wedding1 from '../../../images/wedding1.jpg'
import funParty from '../../../images/event2.jpg'
import landg from '../../../images/beer2.jpg'
import mop from '../../../images/mop.png'
import native from '../../../images/native.png'
import neuc from '../../../images/neuc.png'
import PortfolioCard from './PortfolioCard/PortfolioCard';

const portfolioInfo = [
    {
        img:bride1
    },
    {
        img:wedding1
    },
    {
        img:funParty
    },
    {
        img:landg
    },
    {
        img:bride1
    },
    {
        img:bride1
    }
] 

const Portfolio = () => {
    return (
        <section style={{backgroundColor:'lightGray'}} className=' pt-5 pb-5  w-100'>
            <div className=" d-flex align-items-center justify-content-center ">
                <div>
                <h2 className=' text-dark mb-5 font-weight-bold'> CREATIVE WORK</h2>
                </div>
            </div>
            <div style={{width: "100%"}} className="row ml-1 p-2" >
                {
                   portfolioInfo.map(info => <PortfolioCard info={info}></PortfolioCard>) 
                }
            </div>
            
        </section>
    );
};

export default Portfolio;