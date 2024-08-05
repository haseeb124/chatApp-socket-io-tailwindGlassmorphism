import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className='flex items-centerf gap-2'>
    
    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
    
    <div>
    <button type='submit' className="btn btn-circle bg-sky-500 text-white">
    <IoSearchSharp className="w-6 h-6 outline-none" />
</button>
    </div>
    </form>
  )
}

export default SearchInput


// Starter code 

// import { IoSearchSharp } from "react-icons/io5";


// const SearchInput = () => {
//   return (
//     <form className='flex items-centerf gap-2'>
    
//     <input type="text" placeholder="Type here" className="input input-bordered w-full" />
    
//     <div>
//     <button type='submit' className="btn btn-circle bg-sky-500 text-white">
//     <IoSearchSharp className="w-6 h-6 outline-none" />
// </button>
//     </div>
//     </form>
//   )
// }

// export default SearchInput