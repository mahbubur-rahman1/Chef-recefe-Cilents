import React, { Suspense } from 'react';
import Marquee from "react-fast-marquee";
import slider1 from '../../../assets/slide01.jpg'
import slider2 from '../../../assets/slide02.jpg'
import slider3 from '../../../assets/slide03.jpg'
import slider4 from '../../../assets/slide04.jpg'
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const OtherComponent = React.lazy(() => import('../Chef/Chef'));

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div className=''>
            <Marquee speed={100} className='text-center '>
                <h1 className='  text-3xl py-2 animate-text bg-gradient-to-r from-teal-400  via-amber-500  to-orange-400 bg-clip-text text-transparent font-extrabold'>Food is not only for eat It's a Fashion </h1>
            </Marquee>
            <Marquee speed={200} className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src={slider1} className="w-full h-[70vh]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slider2} className="w-full h-[70vh]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slider3} className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={slider4} className="w-full h-[70vh]" />
                </div>
            </Marquee>
            <div className='container mx-auto grid md:grid-cols-3 gap-4 grid-cols-1 justify-between mt-5'>

                <Suspense  fallback={<div class="border text-center border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
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