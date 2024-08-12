import React from 'react'

const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className='flex mt-2'>
    <div className="form-control">
    <label className="label gap-2 cursor-pointer">
    <span className="label-text">Male</span>
    <input onChange={() => onCheckBoxChange("male")} checked={selectedGender === "male"}  type="checkbox" className="checkbox checkbox-sm border-slate-900" />
  </label>
</div>
<div className="form-control">
    <label className="label gap-2 cursor-pointer">
    <span className="label-text">Female</span>
    <input onChange={() => onCheckBoxChange("female")} checked={selectedGender === "female"} type="checkbox" className="checkbox checkbox-sm border-slate-900" />
  </label>
</div>
</div>
  )
}

export default GenderCheckBox;



// Starter code for genderbox

// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
//     <div className="form-control">
//     <label className="label gap-2 cursor-pointer">
//     <span className="label-text">Male</span>
//     <input type="checkbox" defaultChecked className="checkbox checkbox-sm border-slate-900" />
//   </label>
// </div>
// <div className="form-control">
//     <label className="label gap-2 cursor-pointer">
//     <span className="label-text">Female</span>
//     <input type="checkbox" defaultChecked className="checkbox checkbox-sm border-slate-900" />
//   </label>
// </div>
// </div>
//   )
// }

// export default GenderCheckBox