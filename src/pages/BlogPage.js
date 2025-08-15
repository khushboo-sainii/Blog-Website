import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { useCallback } from 'react';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    const navigate = useNavigate();

    const fetchRelatedBlogs = useCallback(async () => {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error fetched in blog id.");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }, [blogId, setLoading]);

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [blogId, fetchRelatedBlogs]);

  const handleClick = () => {
    navigate("/"); 
  };

  return (
    <div>
      <Header/>
      <div className='mt-[90px] max-w-[670px] mx-auto flex justify-start'>
        <button onClick={handleClick}
          className='rounded-md border-2 px-4 py-1 '>
            Back
        </button>
      </div> 

      {
        loading ?
        (<div className='flex items-center justify-center min-h-screen'>
            <p className='font-bold text-3xl '>Loading...</p>
        </div>) :
        blog ? 
        (<div  className='flex flex-col gap-y-7 my-4 mt-[10px] mb-[60px] max-w-[670px] mx-auto'>
            <BlogDetails post={blog} />
            <h2 className='text-start font-bold text-2xl'>Related Blogs</h2>
            {
                relatedBlogs.map( (post) => (
                    <div key={post.id}>
                        <BlogDetails post={post} />
                    </div>
                ))
            }
          </div>) :
        (<div className='text-center font-bold text-3xl'>
            No Blog Found
        </div>)
      }

    </div>
  )
}

export default BlogPage
