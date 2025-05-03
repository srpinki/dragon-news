import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch("../categories.json").then(res => res.json());
const Categories = () => {
    const categories = use(categoryPromise);
    
    return (
        <div>
            <h2 className="font-bold">All Categories({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 '>
                {
                    categories.map(category => <NavLink className={" hover:bg-base-200 p-3 bg-base-100 border-0 font-semibold text-accent"} key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;