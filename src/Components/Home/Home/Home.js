import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Package from '../Package/Package';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useState } from 'react';

const Home = () => {
    const [homeProgress,setHomeProgress]= useState(false)
    return (
        <div >
            {homeProgress && <LinearProgress />}
            <Header></Header>
            <Portfolio></Portfolio>
            <Package homeProgress={[homeProgress,setHomeProgress]} ></Package>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;