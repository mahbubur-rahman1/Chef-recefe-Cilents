import React from 'react';
import Details from '../pages/Details/Details';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';

const DetailsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default DetailsLayout;