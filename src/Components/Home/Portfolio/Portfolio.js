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
        <section className='row bg-light pt-5 pb-5  w-100'>
            <div className="col-md-4  offset-1 d-flex align-items-center ">
                <div>
                <h2 className='text-primary text-dark mb-5 font-weight-bold'> OUR lATEST WORK</h2>
                <button className="btn btn-primary mb-4 font-weight-bold">View All</button>
                </div>
            </div>
            <div className="col-md-6 ml-5 row" >
                {
                   portfolioInfo.map(info => <PortfolioCard info={info}></PortfolioCard>) 
                }
            </div>
            
        </section>
    );
};

export default Portfolio;