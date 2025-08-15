import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className=''>
      <Header/>
      <div className='mt-[100px]'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
