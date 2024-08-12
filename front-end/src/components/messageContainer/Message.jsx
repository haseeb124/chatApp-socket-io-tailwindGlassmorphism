import React from 'react'
import useConversation from '../../zustand/useConversations';
import { useAuthContext } from '../../context/AuthContext'
import {formatTime} from '../../utils/formatTime'

const Message = ({message}) => {

  const {authUser} = useAuthContext();
  
  const {selectedConversation} = useConversation();

  const fromMe = message.senderId === authUser.user._id
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? authUser.user.profilePic : selectedConversation.profilePic
  const bubleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
      <div className='w-10 rounded-full'>
      <img alt='Tailwind CSS chat bubble component' src={`${profilePic}`} />
      </div>
      </div>

      <div className={`chat-bubble text-white ${bubleBgColor}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-white text-xs flex gap-1 items-center'>{formatTime(message.createdAt)}</div>

    </div>
  )
}

export default Message