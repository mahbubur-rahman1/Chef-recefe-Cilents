import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

const DetailsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
            
        </div>
    );
};

export default DetailsLayout;