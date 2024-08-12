

import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
 
  const [loading, setLoading] = useState(false);

  const {setAuthUser} = useAuthContext();

  const login = async({username, password}) => {

    
    if(!username || !password) {
      toast.error("All fields are required");
      return;
    }
    

    setLoading(true)
      try {
        const res = await fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({username, password}),
          credentials: 'include'
        
        });

  
        const data = await res.json();
        
        
        if(data.error){
          throw new Error(data.message)
        }

        localStorage.setItem("chat-user", JSON.stringify(data))

        setAuthUser(data);


      } catch (error) {
        toast.error(error.message)
        
      }finally {
        setLoading(false);
      }
    }

    return {loading, login}

}
      


export default useLogin;