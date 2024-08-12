import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../zustand/useConversations.js"



const Conversation = ({conversation, lastidx, emoji}) => {
  
  
  const {selectedConversation, setSelectedConversation} = useConversation();
  
  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers} = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
    <div className={`flex items-center gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`} 
    onClick={() => setSelectedConversation(conversation)}
    
    >
    <div className={`avatar ${isOnline ? "online" : ""}`}>
    
    <div className="w-12  rounded-full ">
    <img src={conversation.profilePic} />
    </div>

    </div>
    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between'>
        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
        <span className='text-xl'>{emoji}</span>
      </div>
    </div>

    </div>
    
    
    {
      !lastidx && <div className='divider my-0 py-0 h-1'/>
    }
    </>
  )
}

export default Conversation


//start code

// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className='flex items-center gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//     <div className="avatar online">
    
//     <div className="w-12  rounded-full ">
//     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//     </div>

//     </div>
//     <div className='flex flex-col flex-1'>
//       <div className='flex gap-3 justify-between'>
//         <p className='font-bold text-gray-200'>HHH</p>
//         <span className='text-xl'>😃</span>
//       </div>
//     </div>

//     </div>
    
    
//     <div className='divider my-0 py-0 h-1'/>
//     </>
//   )
// }

// export default Conversation