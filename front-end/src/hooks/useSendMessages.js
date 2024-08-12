import { useState } from "react";
import useConversation from "../zustand/useConversations";
import {toast} from 'react-hot-toast'
 
const useSendMessages = () => {


  const {messages, setMessages, selectedConversation} = useConversation();
  const [loading, setLoading] = useState(false);

  const sendMessage = async(message) => {

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/api/message/send/${selectedConversation._id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({message}),
          credentials: 'include'
      })
      const data = await response.json();
      
      if(data.error){
        throw new Error(data.error)
      }

      setMessages([...messages, data.newMessage]);

      
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false);
    }

  }

  return {sendMessage, loading}
 
}

export default useSendMessages