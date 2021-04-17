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
        <section className='row bg-light pt-5 pb-5 w-100'>
            <div className="col-md-7 offset-md-1 row" >
                {
                   portfolioInfo.map(info => <PortfolioCard info={info}></PortfolioCard>) 
                }
            </div>
            <div className="col-md-3 d-flex align-items-center ">
                <div>
                <h2 className='text-info mb-5'> Our latest work</h2>
                <button className="btn btn-dark mt-5">View All</button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;