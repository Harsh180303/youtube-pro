import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  // check
  // console.log("searchParams are: ", searchParams.get("v"))
  
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( closeMenu() )
    }, [])

  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 py-4 flex gap-x-2'>
        <div>
          <iframe
            className='rounded-2xl h-[70vh] w-[65vw]'
            // width="900"
            // height="450"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className='w-full'>
          <LiveChat />
        </div>

      </div>

      <CommentsContainer/>
    </div>
  );
}

export default WatchPage