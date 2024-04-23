import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

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
        <input
          className="w-[24rem] border border-gray-400 p-2 rounded-l-3xl outline-none"
          type="text"
        />
        <button className="bg-gray-100 border border-gray-400 px-5 py-2 rounded-r-3xl">
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className=" col-span-1 flex items-center">
        <i className="fa-solid fa-user h-8 flex items-center"></i>
      </div>
    </div>
  );
}

export default Head