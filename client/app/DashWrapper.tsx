import React from 'react'
import Navbar from '@/app/(Components)/Navbar/index'
import Sidebar from "@/app/(Components)/Sidebar"



const DashWrapper = ({children}: {children :React.ReactNode}) => {
  return (
    <div className={`flex w-full min-h-screen bg-gray-50 text-gray-900`}>
      <Sidebar/>
       <main className='flex flex-col py-7 px-9 bg-gray-200 w-full h-full md:pl-24'>
        <Navbar/>
   {children}
       </main>
    </div>
  )
}

export default DashWrapper