import React from 'react'

const VideoCard = ({ info }) => {
    // console.log({info});

    if (!info) {
      return <div>Loading...</div>; // or render any loading indicator
  }

    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet
    
  return (

    <div className='p-2 m-2 w-80 flex flex-col shadow-md'>
        <img className='rounded-lg' alt='thumbnail' src= {thumbnails.medium.url} />
        <ul>
            <li className='font-bold p-1'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-900">
      <VideoCard info={info}/>
    </div>
  );
}

export default VideoCard
 
// ------------Snippet ------------
// channelTitle
// title
// thumbnails {iske andar 4 varities hain}
// publishedAt

// ------------Statistics ------------
// viewCount
