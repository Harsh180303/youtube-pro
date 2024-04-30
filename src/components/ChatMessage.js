import React from 'react'

const ChatMessage = ( {name, message} ) => {

  return (
    <div className='flex items-baseline gap-x-2 p-2'>
        <i className="fa-solid fa-user"></i>
        <span className='font-bold'>{name}:</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage