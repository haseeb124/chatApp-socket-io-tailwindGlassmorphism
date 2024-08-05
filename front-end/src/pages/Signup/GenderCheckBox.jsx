import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
    <div className="form-control">
    <label className="label gap-2 cursor-pointer">
    <span className="label-text">Male</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-sm border-slate-900" />
  </label>
</div>
<div className="form-control">
    <label className="label gap-2 cursor-pointer">
    <span className="label-text">Female</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-sm border-slate-900" />
  </label>
</div>
</div>
  )
}

export default GenderCheckBox



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