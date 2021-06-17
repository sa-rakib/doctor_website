import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from'../HeaderMain/HeaderMain';
import BusinessInfo from'../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain />
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;