"use client"

import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/app/state'
import { Menu } from 'lucide-react'
import React from 'react'




const Sidebar = () => {
  const dispatch = useAppDispatch()
 const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
 const togglesidbar = ()=>{
  dispatch(setIsSidebarCollapsed(!isSidebarCollapsed) )

 }
 const SiderbarClassNames = `fixed flex flex-col ${
  isSidebarCollapsed ? "w-0 md:w-16": "w-72 md:w-64"
 } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`
  return (
    <div className={SiderbarClassNames}>
         <div className={`flex justify-between gap-3 md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
        <div> logo </div>
        <h1 className={` ${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>Saikishan</h1>
 
    
    <button
  className="md:hidden px-3 py-3 bg-gray-200 hover:bg-blue-200 active:bg-blue-300 rounded-full"

    onClick={togglesidbar}
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

export default Sidebar