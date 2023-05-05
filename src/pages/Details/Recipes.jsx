import React from 'react';

const  Recipes = ({recipe}) => {
    const {photo_url, recipes_name, cooking, ingredients, rating} = recipe;
    return (
       
            <div className="col glass rounded-md">
            <img className='rounded-md h-72 w-full' src={photo_url} />
                <div className="p-3">
                    <h2 className="card-title"><span className='text-sky-800 font-bold'> {recipes_name}</span> </h2>


                <div className='mt-3  text-slate-600'>
                    <h5 className='text-red-800 font-bold'>Cooking Methood</h5>
                    <hr/>
                    <p>1. {cooking[0]}</p>
                    <p>2. {cooking[1]}</p>
                    <p>3. {cooking[2]}</p>
                    <p>4. {cooking[3]}</p>
                    
                </div>

                <div className='mt-3  text-slate-600'>
                    <h5 className='text-red-800 font-bold'>Ingredients</h5>
                    <hr />
                    <p>1. {ingredients[0]}</p>
                    <p>2. {ingredients[1]}</p>
                    <p>3. {ingredients[2]}</p>
                    <p>4. {ingredients[3]}</p>
                    <p>5. {ingredients[4]}</p>
                </div>

                   <div className='flex mt-4'>
                   <h1>Reviews</h1>
                   </div>
                    <p className='text-sky-500 font-bold'>Rating: {rating}</p>

                    <div className="flex justify-between mt-3 ">                 
                    <div className="">
                    <button className='text-sm  bg-slate-600 text-white flex items-center gap-2'><span> Add to Favorite</span></button>
                    
                    </div>
                    </div>
                </div>
            </div>
       
    );
};

export default  Recipes;