import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Songs", "Cricket", "Football", "Live", "Valentines", "Comedy", "Python", "RCB", "Programming", "React", "Javascript", "Terminal", "India", "Election", "Apple"]

const ButtonList = () => {
  
  return (
    <div className='flex w-[calc(100vw-14rem)] overflow-x-scroll'>
      
      {list.map((item, index) => (
        <Button key={index} label={item} />
      ))}
      
    </div>
  )
}

export default ButtonList