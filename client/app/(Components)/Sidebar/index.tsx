"use client"

import { Menu } from 'lucide-react'
import React from 'react'



const index = () => {
  return (
    <div>
         <div className='flex justify-between gap-3 md:justify-normal items-center pt-8'>
        <div> logo </div>
        <h1 className='font-extrabold  text-2xl'>Saikishan</h1>
 
    
    <button
  className="md:hidden px-3 py-3 bg-gray-200 hover:bg-blue-200 active:bg-blue-300 rounded-full"

    onClick={()=>{}}
    >
        <Menu className='w-4 h-4'/>
    </button>
       </div>
       <div className='flex-grow mt-8'>
        
       </div>
       <div >
        <p className=' text-center text-xs text-gray-600'>&copy; Saikishan</p>

       </div>

    </div>
   
  )
}

export default index