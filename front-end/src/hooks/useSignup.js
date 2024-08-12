import { useState } from "react"
import {toast} from 'react-hot-toast'
import { useAuthContext } from "../context/AuthContext";


const useSignup = () => {

  const [loading, setLoading] = useState(false);

  const {setAuthUser} = useAuthContext();


  const signup = async ({fullName, username, password, confirmPassword, gender}) => {
      
      if(!fullName || !username || !password || !confirmPassword || !gender){
        
        toast.error("All fields are required")
        
        return;
      }
      
      if(password !== confirmPassword){
        toast.error("password do not match")
        return;
      }

      if(password.length < 6){
        toast.error("password must be at least of 6 characters")
        return;
      }

      setLoading(true);
      try {

          const res = await fetch("http://localhost:8000/api/auth/signup", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullName, username, password, confirmPassword, gender})
          });

          const data = await res.json();

          if(data.error){
            throw new Error(data.message)
          }
          
          if(data){
            toast.success("successfully resgistered");

          }

          localStorage.setItem("chat-user", JSON.stringify(data));

          setAuthUser(data);


      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false);
      }

     

  }

  return {signup, loading}

}

export default useSignup;