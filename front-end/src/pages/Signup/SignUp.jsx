import React from 'react'
import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
        SignUp
      <span className='text-blue-500'> ChatApp</span>
      </h1>
      <form>
      <div>
          <lable className='label p-2'>
            <span className='text-base label-text'>Full Name</span>
          </lable>
          <input type="text" placeholder="Enter Full name" className="input input-bordered h-12 w-full" />
        </div>
        <div>
          <lable className='label p-2'>
            <span className='text-base label-text'>username</span>
          </lable>
          <input type="text" placeholder="Enter username" className="input input-bordered h-12 w-full" />
        </div>
        <div>
          <lable className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </lable>
          <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-12" />
        </div>
        <div>
          <lable className='label p-2'>
            <span className='text-base label-text'>Confirm Password</span>
          </lable>
          <input type="password" placeholder="Enter Confirm Password" className="input mb-2 input-bordered w-full h-12" />
        </div>

        <GenderCheckBox />

        <a href='#' className='text-sm hover:underline mt-2 hover:text-blue-500 inline-block'>
          Already have an account?
        </a>
        <div>
        <button className='btn btn-block btn-sm mt-2'>
        SignUp
        </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignUp;





// Starter code for signup





// import React from 'react'
// import GenderCheckBox from './GenderCheckBox';

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>
//         SignUp
//       <span className='text-blue-500'> ChatApp</span>
//       </h1>
//       <form>
//       <div>
//           <lable className='label p-2'>
//             <span className='text-base label-text'>Full Name</span>
//           </lable>
//           <input type="text" placeholder="Enter Full name" className="input input-bordered h-12 w-full" />
//         </div>
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
//         <div>
//           <lable className='label p-2'>
//             <span className='text-base label-text'>Confirm Password</span>
//           </lable>
//           <input type="password" placeholder="Enter Confirm Password" className="input mb-2 input-bordered w-full h-12" />
//         </div>

//         <GenderCheckBox />

//         <a href='#' className='text-sm hover:underline mt-2 hover:text-blue-500 inline-block'>
//           Already have an account?
//         </a>
//         <div>
//         <button className='btn btn-block btn-sm mt-2'>
//         SignUp
//         </button>
//         </div>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default SignUp;