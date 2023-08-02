import React from 'react'

function Setting2() {
  return (
    <div>
      <form action="">
        <div className='grid xl:grid-cols-4 sm:grid-cols-2  grid-cols-2 xl:gap-4 p-2'>
        
       <div> <label htmlFor="">Change Name</label></div>
       <div> <input type="text" className=' border-1 border-black-50'/></div>
        <div><p>Delete</p></div>
       <div> <p>Enter</p></div>
     </div>
       
        
        <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 xl:gap-4 p-2'>
        
       <div> <label htmlFor="">Change Profile Picture </label></div>
       <div> <input type="text" className=' border-1 border-black-50'/></div>
        <div><p>Delete</p></div>
       <div> <p>Upload</p></div>
     </div>
        <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 xl:gap-4 p-2'>
        
       <div> <label htmlFor="">Change Email</label></div>
       <div> <input type="text" className=' border-1 border-black-50'/></div>
        <div><p>Delete</p></div>
       <div> <p>Enter</p></div>
     </div>
     <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 xl:gap-4 p-2'>
        
        <div> <label htmlFor="">Change Mob no </label></div>
        <div> <input type="text" className=' border-1 border-black-50'/></div>
         <div><p>Delete</p></div>
        <div> <p>Enter</p></div>
      </div>

      <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 xl:gap-4 p-2'>
        
        <div> <label htmlFor="">Change Address</label></div>
        <div> <textarea name="" id="" cols="22" rows="2" className='border-1'></textarea></div>
         <div><p>Delete</p></div>
        <div> <p>Enter</p></div>
      </div>

      </form>
    </div>
  )
}

export default Setting2
