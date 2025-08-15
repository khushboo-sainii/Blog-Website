import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = ({ tag = null, category = null }) => {
    const {page, handlePageChange, totalPages} = useContext(AppContext);
    if( !totalPages) return null;

  return (
    <div className=' border bg-white fixed bottom-0 w-full shadow-top'>
      <div className='flex justify-between py-2 items-center w-11/12 max-w-[670px] mx-auto'>
        <div className='flex flex-row gap-x-2'>
          { page > 1 && 
            (
                <button
                  className='rounded-md border-2 px-4 py-1'
                  onClick={() => handlePageChange(page - 1, tag, category)}>
                      Previous
                </button>
            )
          }

          { page <  totalPages && 
            (
                <button
                  className='rounded-md border-2 px-4 py-1'
                  onClick={() => handlePageChange(page + 1, tag, category)}>
                    Next
                </button>
            )
          }
        </div>
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
