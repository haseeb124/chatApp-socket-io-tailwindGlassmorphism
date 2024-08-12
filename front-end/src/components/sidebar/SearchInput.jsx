import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversations";
import useGetConversations from '../../hooks/useGetConversations'
import toast from "react-hot-toast";

const SearchInput = () => {

  const [search, setSearch] = useState("");

  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error("Search term must be atleast 3 characters")
    }

    const searchedData = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
  
    if(searchedData){
      setSelectedConversation(searchedData);
      setSearch("");

    }else {
      toast.error("user not found")
    }
  }


  return (
    <form onSubmit={handleSubmit} className='flex items-centerf gap-2'>
    
    <input type="text" placeholder="Type here" className="input input-bordered w-full"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
     />
    
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