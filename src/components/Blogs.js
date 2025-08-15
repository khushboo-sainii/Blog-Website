import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import BlogDetails from './BlogDetails';

const Blogs = () => {
    // Consume
    const {posts, loading} = useContext(AppContext);

  return (
    <div className='flex flex-col gap-y-10 my-4  mb-[90px] max-w-[670px] mx-auto'>
      { loading ? (
        <div className='min-h-[80vh] w-full flex justify-center items-center'>
          <p className='text-center font-bold text-3xl'>Loading...</p>
        </div>
      ) : posts.length === 0 ? (
          <div className='min-h-[80vh] w-full flex justify-center items-center'>
            <p className='text-center font-bold text-3xl'>No Blogs Found !</p>
          </div>
      ) : (
        posts.map( (post) => {
          return <BlogDetails post={post} key={post.id}/>
        })
      )

      }
    </div>
  )
}

export default Blogs
