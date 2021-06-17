import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../Service/Service';
import TestimonialTitle from '../TestimonialTitle/TestimonialTitle';

const Home = () => {
    return (
        <div style={{width: '1300px', margin: 'auto'}}>
            <Header />
            <Service />
            <FeaturedService />
            <MakeAppointment />
            <TestimonialTitle />
        </div>
    );
};

export default Home;