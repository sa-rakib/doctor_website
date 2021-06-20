import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../Service/Service';
import TestimonialTitle from '../TestimonialTitle/TestimonialTitle';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <Service />
            <FeaturedService />
            <MakeAppointment />
            <TestimonialTitle />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;