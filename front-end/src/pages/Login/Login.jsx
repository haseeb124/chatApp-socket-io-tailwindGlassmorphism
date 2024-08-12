import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { VscEyeClosed } from "react-icons/vsc";
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const {loading, login} = useLogin();

  const handleSubmit = async(e) => {
      e.preventDefault();
      await login({username, password});

  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Login
      <span className='text-blue-500'> ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>username</span>
          </label>
          <input type="text" placeholder="Enter username" className="input input-bordered h-12 w-full" onChange={(e) => setUsername(e.target.value)} value={username} />
        </div>
        <div className=' relative'>
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password" className="input input-bordered w-full h-12" />
          <VscEyeClosed className=' absolute right-2 bottom-3 size-5 cursor-pointer'/>
        </div>
        <Link to="/signup" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
          {"Don't"} have an account?
        </Link>
        <div>
        <button  className='btn btn-block btn-sm mt-2'>
        {
          loading ? <span className='loading loading-spinner'></span> : "Login"
        }
        </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login





// Starter code for login 



// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>
//         Login
//       <span className='text-blue-500'> ChatApp</span>
//       </h1>
//       <form>
//         <div>
//           <lable className='label p-2'>
//             <span className='text-base label-text'>username</span>
//           </lable>
//           <input type="text" placeholder="Enter username" className="input input-bordered h-12 w-full" />
//         </div>
//         <div>
//           <lable className='label p-2'>
//             <span className='text-base label-text'>Password</span>
//           </lable>
//           <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-12" />
//         </div>
//         <a href='#' className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
//           {"Don't"} have an account?
//         </a>
//         <div>
//         <button className='btn btn-block btn-sm mt-2'>
//         Login
//         </button>
//         </div>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default Login