import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';



const Messages = () => {

  const {messages, loading} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    if(lastMessageRef.current){
      lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight
    }
  }, [messages, loading])

  return (

    <div ref={lastMessageRef} className='px-4 overflow-auto flex-1'>
      {
        !loading && messages.length > 0 && messages.map((message, index) => (
          <div key={index}  >
          <Message message={message} />
          </div>
        ))
      }
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}

      {!loading && messages.length === 0 && (
				<p className='text-center text-gray-500' >Send a message to start the conversation</p>
			)}
      
       
    
    </div>
  )
}

export default Messages