import React from 'react'
import {  useLocation, useNavigate,  } from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    
    const handleClick = () => {
    navigate("/"); 
  };
    return (
    <div>
      <Header/>
      <div className='mt-[90px] gap-x-3 max-w-[670px]  mx-auto flex-row flex justify-start'>
        <button onClick={handleClick}
        className='rounded-md border-2 px-4 py-1 w-24 '>
            Back
        </button>
        <h2 className='text-2xl font-bold'>
            Blogs on <span className='text-blue-600 hover:cursor-pointer underline'>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination category={category}/>
    </div>
  )
}

export default CategoryPage
