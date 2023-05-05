import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Register from '../pages/Login/Register/Register';
import Blogs from '../pages/Blogs/Blogs';
import Details from '../pages/Details/Details';
import DetailsLayout from '../Layout/DetailsLayout';
import PrivateRoute from './PrivateRoute';
import About from '../pages/About/About';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                
                loader: ({params}) => fetch('https://chef-hunter-server-sheikhmsip.vercel.app/chefs')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            }
           
        ]
    },
    {
        path:'/',
        element: <DetailsLayout></DetailsLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-hunter-server-sheikhmsip.vercel.app/${params.id}`)
            }
        ]
    }
    
   
]) 

export default router;