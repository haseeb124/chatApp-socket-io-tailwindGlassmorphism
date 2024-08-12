import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {

  const {loading, logout} = useLogout();

 
  return (
    <div className='mt-auto'>
      {
        !loading ? (
          <CiLogout  className="text-white w-6 h-6 cursor-pointer" onClick={logout}/>
        ) : (
          <span className="loading loading-spinner"></span>
        )
      }
   
    </div>
  )
}

export default LogoutButton