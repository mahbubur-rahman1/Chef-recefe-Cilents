import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const  Recipes = ({recipe}) => {
    const {photo_url, recipes_name, cooking, ingredients, rating} = recipe;

    const addFav = event => {
        
            event.currentTarget.disabled = true;
            toast('Added Favorite');
       
      
        
        
    }
    return (
       
            <div className="col glass rounded-md">
            <img className='rounded-md h-72 w-full' src={photo_url} />
                <div className="p-3">
                    <h2 className="card-title"><span className='text-sky-800 font-bold'> {recipes_name}</span> </h2>


                <div className='mt-3  text-yellow-400'>
                    <h5 className='text-white font-bold'>Cooking Methood</h5>
                    <hr/>
                    <p>1. {cooking[0]}</p>
                    <p>2. {cooking[1]}</p>
                    <p>3. {cooking[2]}</p>
                    <p>4. {cooking[3]}</p>
                    
                </div>

                <div className='mt-3 text-yellow-400'>
                    <h5 className='text-white font-bold'>Ingredients</h5>
                    <hr />
                    <p>1. {ingredients[0]}</p>
                    <p>2. {ingredients[1]}</p>
                    <p>3. {ingredients[2]}</p>
                    <p>4. {ingredients[3]}</p>
                    <p>5. {ingredients[4]}</p>
                </div>

                   
                    <p className='text-sky-500 font-bold'>Rating <Rating style={{ maxWidth: 200 }} value={rating} readOnly /> {rating}</p>

                    <div className="flex justify-between mt-3 ">                 
                    <div className="">
                    <button className='text-sm  bg-slate-600 text-white flex items-center gap-2 p-3' onClick={addFav}><span> Add to Favorite</span></button>
                    
                    </div>
                    </div>
                </div>
            </div>
       
    );
};

export default  Recipes;