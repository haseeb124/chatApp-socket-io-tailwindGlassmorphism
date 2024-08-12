import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversations";


const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    // const [data, setData] = useState(null)
    const {messages, setMessages, selectedConversation} = useConversation();
  
    useEffect(() => {

      setLoading(true);
      const getMsgs = async() => {
        try {

          const res = await fetch(`http://localhost:8000/api/message/get/${selectedConversation._id}`, {
            credentials: 'include',
            headers: { "Content-Type": "application/json"} ,
          })
  
          const fetchedData = await res.json();
          
          setMessages(fetchedData);
          
    
        } catch (error) {
          console.log(error)
        }finally {
          setLoading(false);
        }
      }

      if(selectedConversation?._id){
        getMsgs();
      } 
    
    }, [selectedConversation?._id])

    // useEffect(() => {
    //   // console.log("daaaa",data)
    //   if(data){
    //     setMessages(data)
        
    //   }
    // }, [data, setMessages])

    // console.log("last", messages)
    return {messages, loading}
}

export default useGetMessages