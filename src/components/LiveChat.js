import React, { useState } from 'react'
import { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'
import { isAction } from '@reduxjs/toolkit'

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector((store)=> store.chat.messages);
        
    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            console.log("API Polling");

            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(12)
                })
            )
        }, 2000)

        return () => clearInterval(i)
    }, [])
    
  return (
    <>
      <div className="h-[70vh] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>

      <form className="w-full p-2 border border-black rounded-lg mt-2 gap-x-2 flex" 
        onSubmit={(e) => {
          e.preventDefault()
          console.log("ON Form sumbit", liveMessage)
          dispatch(addMessage({
            name: "Harsh Chourasiya",
            message: liveMessage,
          }));
          setLiveMessage("");
        }}
      >
        <input
          className="w-80 bg-gray-400 p-2 rounded-md pl-6 outline-none font-semibold placeholder:text-black"
          type="text"
          placeholder="chat..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-green-700 shadow-md hover:bg-green-800 shadow-slate-400 font-bold text-lg px-3 py-1 text-white rounded-md">
          Send
        </button>
      </form>
    </>
  );
}

export default LiveChat