

import React, { useEffect, useState } from 'react'

const useGetConversations = () => {
  
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {

    const getConversations = async() => {
        setLoading(true);

        try {
          
          const res = await fetch("http://localhost:8000/api/users/getall", {credentials: 'include'});
          
          const data = await res.json();
        
          if(!data){
            throw new Error(error.message)
          }
         
          setConversations(data.findUsers);


        } catch (error) {
          console.log(error)
          
        }finally {
          setLoading(false);
        }
    
      }

      getConversations();

    }, [])
    return {loading, conversations}

  }

export default useGetConversations;