import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { json } from 'react-router-dom';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // API call

           // check
    // console.log(searchQuery);
    
    // make an api call after every key press
    // but if the difference between 2 API Calls is <200ms
    // decline the API call 

    const timer = setTimeout(() => {

      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }

    },200)

    return () => {
      clearTimeout(timer);
    }
    
  },[searchQuery])


  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1])
    setSuggestions(json[1]);

    // Update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }
  
  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
};
  return (
    <div className="grid grid-flow-col py-4 px-6 shadow-lg justify-between overflow-x-hidden items-center">
      <div className="flex col-span-1 gap-x-2">
        <i onClick={() => toggleMenuHandler()} className="fa-solid fa-bars h-8 flex items-center cursor-pointer"></i>

        <img
          className="h-8 "
          alt="Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className=" col-span-10 justify-self-center">

        <div>
          <input
            className="w-[32rem] border pl-5 border-gray-400 p-2 rounded-l-3xl outline-none"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder='Search'
          />
          <button className="bg-gray-100 border border-gray-400 px-5 py-2 rounded-r-3xl">
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {showSuggestions && (<div className='fixed bg-white w-[32rem] mt-1 px-5 py-3 rounded-lg shadow-2xl'>
        <ul>
          {suggestions.map((s, index) => (
            <li key={index} className='py-2 shadow-sm hover:bg-gray-100 font-semibold'>
            <i className="fa-solid fa-magnifying-glass mr-1"></i>
            {s}
          </li>
          ))}
          

          
        </ul>
        </div>)}

      </div>

      <div className=" col-span-1 flex items-center">
        <i className="fa-solid fa-user h-8 flex items-center"></i>
      </div>
    </div>
  );
}

export default Head