import React, { Suspense } from 'react';
import Marquee from "react-fast-marquee";
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const OtherComponent = React.lazy(() => import('../Chef/Chef'));

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div className=''>
            <Marquee speed={100} className='text-center '>
                <h1 className='  text-3xl py-2 animate-text bg-gradient-to-r from-teal-400  via-amber-500  to-orange-400 bg-clip-text text-transparent font-extrabold'>Food Fashionry All Item </h1>
            </Marquee>
            <Marquee speed={200} className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://thumbs.dreamstime.com/z/male-chef-cook-reading-recipe-book-preparing-food-portrait-handsome-isolated-white-background-60149375.jpg" className="w-full h-[70vh]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://www.shutterstock.com/image-photo/female-chef-writing-recipe-book-260nw-1082403935.jpg" className="w-full h-[70vh]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://thumbs.dreamstime.com/b/chef-slicing-salad-ingredients-restaurant-chef-slicing-salad-ingredients-restaurant-cutting-ripe-red-tomato-136257548.jpg" className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://www.shutterstock.com/image-photo/chef-cooking-food-kitchen-restaurant-260nw-562219663.jpg" className="w-full h-[70vh]" />
                </div>
            </Marquee>
            <div className='container mx-auto grid md:grid-cols-3 gap-4 grid-cols-1 justify-between mt-5'>

                <Suspense  fallback={<div className="border text-center border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>} >
                    {
                        chefs.map(chef => <OtherComponent key={chef.id}
                            chef={chef}></OtherComponent>)
                    }
                </Suspense>
            </div>
            <div>
                <Banner></Banner>
            </div>


        </div>
    );
};

export default Home;