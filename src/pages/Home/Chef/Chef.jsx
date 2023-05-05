import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineCheck } from "react-icons/hi";

const Chef = ({chef}) => {
    const {name, id, recipes_numbers, experience_years, photo_url, likes} = chef;
    return (
        
                <div className="col glass rounded-md">
                    <img className='rounded-md w-full h-72' src={photo_url} />
                    <div className="p-3">
                        <h2 className="card-title text-yellow-300"><span className='text-purple-200'>Chef Name:</span>  {name}</h2>
                        

                        <div className='flex justify-between mt-3 font-bold gap-2'>
                            <p className='flex items-center gap-2 p-3 bg-purple-950 rounded-md'><span className='text-sky-500'>{likes}</span> Likes <HiOutlineCheck className='font-bold text-2xl text-sky-500'></HiOutlineCheck></p>
                            <p className='pt-5 px-2 bg-purple-950 rounded-md text-center'>Recipes  <span className='text-sky-500'>{recipes_numbers}</span></p>
                            <p className='p-3 bg-purple-950 rounded-md text-center'>Experience <br /><span className='text-sky-500'>{experience_years} Years </span></p>
                        </div>

                        <div className="flex justify-between mt-3 ">
                            <Link to={`${id}`} className="text-sm bg-sky-800 btn text-white p-3 rounded-lg ">View Recipes</Link>
                        </div>
                    </div>
                </div>
            
        

    );
};

export default Chef;