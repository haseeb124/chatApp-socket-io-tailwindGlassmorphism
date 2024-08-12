import {createContext, useContext, useEffect, useState} from 'react'

import io from 'socket.io-client';
import {useAuthContext} from '../context/AuthContext'

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socket, setSocket] = useState(null);

  const {authUser} = useAuthContext();

  useEffect(() => {
    if(authUser){
      const socket = io("http://localhost:8000",{
        query: {
          userId: authUser.user._id
        },
        withCredentials: true,
        transports: ['websocket']
      })
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users)
      })

      return () => socket.close();
    } else {
      if(socket){
        socket.close();
        setSocket(null)
      }
    }

  }, [authUser])

  return (
    <SocketContext.Provider value={{socket, onlineUsers}}>
      {children}
    </SocketContext.Provider>
  )
}