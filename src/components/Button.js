import React from 'react'

const Button = ({ label }) => {
  return (
    <div>
        <button className='px-5 m-2 py-1 mt-4 bg-gray-200 rounded-md'>{label}</button>
    </div>
  )
}

export default Button