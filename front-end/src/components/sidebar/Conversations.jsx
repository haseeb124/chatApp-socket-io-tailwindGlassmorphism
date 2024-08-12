import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { randomEmojis } from '../../utils/emoji'

const Conversations = () => {

  const {loading, conversations} = useGetConversations();

  
  return (
    <div className='flex flex-col overflow-auto py-2'>
    {
      conversations?.map((con, idx) => (
        <Conversation 
          key={con._id}
          conversation={con}
          emoji={randomEmojis()}
          lastidx = {idx === conversations.length - 1}
        />
      ))
    }

    {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default Conversations


//starter code

// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='flex flex-col overflow-auto py-2'>
//     <Conversation />
//     <Conversation />
//     <Conversation />
//     <Conversation />
//     <Conversation />


//     </div>
//   )
// }

// export default Conversations