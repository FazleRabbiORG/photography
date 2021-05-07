import React from 'react';
import clean from '../../../images/clean.png'
import federal from '../../../images/federal.png'
import funParty from '../../../images/funparty.png'
import landg from '../../../images/landg.png'
import mop from '../../../images/mop.png'
import native from '../../../images/native.png'
import neuc from '../../../images/neuc.png'
import PortfolioCard from './PortfolioCard/PortfolioCard';

const portfolioInfo = [
    {
        img:clean
    },
    {
        img:federal
    },
    {
        img:funParty
    },
    {
        img:landg
    },
    {
        img:native
    },
    {
        img:mop
    },
    {
        img:neuc
    }
] 

const Portfolio = () => {
    return (
        <section style={{backgroundColor:'lightGray'}} className=' pt-5 pb-5  w-100'>
            <div className=" d-flex align-items-center justify-content-center ">
                <div>
                <h2 className=' text-dark mb-5 font-weight-bold'> Our latest work</h2>
                </div>
            </div>
            <div className="ml-5 d-flex" >
                {
                   portfolioInfo.map(info => <PortfolioCard info={info}></PortfolioCard>) 
                }
            </div>
            
        </section>
    );
};

export default Portfolio;