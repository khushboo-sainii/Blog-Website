import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='flex flex-col'>
      <NavLink to={`/blog/${post.id}`} className='mb-2 text-lg font-bold'>
        <span className=' hover:underline '>{post.title}</span>
      </NavLink>
      <p  className=' text-sm mb-1'>
        By { " "}
        <span className='italic'>{post.author}</span>
        {" "} on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className=' underline font-semibold '>{post.category}</span>
        </NavLink>
      </p>
      <p  className='text-sm mb-3'>Posted On {post.date}</p>
      <p className='text-[16px]'> { post.content} </p>

      <div className='flex flex-row gap-x-3'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                <span className='text-sm text-blue-600 underline font-semibold'>{`#${tag}`}</span>
            </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BlogDetails
