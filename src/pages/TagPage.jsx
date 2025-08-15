import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

const TagPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tag = location.pathname.split("/").at(-1);  
  const formattedTag = tag.replaceAll("-", " ");
  const handleClick = () => {
    navigate("/"); 
  };

  return (
    <div>
      <Header/>
      <div className='mt-[90px] gap-x-3 max-w-[670px]  mx-auto flex-row flex justify-start'>
        <button onClick={handleClick}
        className='rounded-md border-2 px-4 py-1'>
            Back
        </button>
        <h2 className='text-2xl font-bold'>
            Blogs Tagged <span className='text-blue-600 hover:cursor-pointer underline'>#{formattedTag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination tag={tag}/>
    </div>
  )
}

export default TagPage
