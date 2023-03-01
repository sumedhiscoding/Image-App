import React from 'react'
import Search2 from './Search2'
const Header2 = () => {
  return (
    <div
    className="   flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 h-60 w-full"

    >
        <div className='text-3xl text-white font-thin'>
    Download High Quality Images by Creators
        </div>
        <div className='text-white font-thin pb-2 '>
            Over 2.4 Million+ Stock Images by our talented community
        </div>
        <div className='  w-4/5 flex justify-center'>
            <Search2/>
        </div>
    </div>
  )
}

export default Header2