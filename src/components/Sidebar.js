import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if(!isMenuOpen) return null;
  
  return (
     //h-[calc(100vh-3rem)]
    <div className='p-5 shadow-lg h-full w-[14rem]'> 

      <ul>
        <li>
          <Link className='flex items-center gap-x-2 p-2' to={"/"}>
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-solid fa-film"></i>
          Shorts
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-solid fa-video"></i>
          Videos
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-brands fa-square-steam"></i>
          Live
        </li>
      </ul>
    
      <h1 className='font-bold text-xl pt-5'>Subscriptions</h1>
      <ul>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-solid fa-music"></i>
          Music
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
        <i className="fa-solid fa-medal"></i>
          Sports
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-solid fa-gamepad"></i>
          Gaming
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
           <i className="fa-solid fa-video"></i>
          Movies
        </li>
      </ul>

      <h1 className='font-bold text-xl pt-5'>Explore</h1>
      <ul>
        <li className='gap-x-2 p-2 flex items-center'>
        <i className="fa-solid fa-fire"></i>
          Trending
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-solid fa-bag-shopping"></i>
          Shopping
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-solid fa-newspaper"></i>
          News
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-solid fa-trophy"></i>
          Sports
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-brands fa-discourse"></i>
          Courses
        </li>
        <li className='gap-x-2 p-2 flex items-center'>
          <i className="fa-solid fa-podcast"></i>
          Podcast
        </li>
      </ul>

    </div>
  )
}

export default Sidebar