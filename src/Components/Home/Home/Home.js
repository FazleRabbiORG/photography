import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Package from '../Package/Package';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Portfolio></Portfolio>
            <Package></Package>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;