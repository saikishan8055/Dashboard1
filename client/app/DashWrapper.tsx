'use client'

import React, { useEffect } from 'react'
import Navbar from '@/app/(Components)/Navbar/index'
import Sidebar from "@/app/(Components)/Sidebar"
import StoreProvider, { useAppSelector } from './redux'

/* DASH LAYOUT */
const DashLayout = ({ children }: { children: React.ReactNode }) => {

  const SidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  )
  const isDarkMode = useAppSelector ((state) => state.global.isDarkMode)
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add("dark");

    }else{
      document.documentElement.classList.add("light")
    }
  })

  return (
    <div className={` ${isDarkMode ? "dark":"light:"}flex w-full min-h-screen bg-gray-50 text-gray-900`}>
      <Sidebar />

      <main
        className={`flex flex-col py-7 px-9 bg-gray-200 w-full h-full ${
          SidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  )
}

/* WRAPPER */
const DashWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashLayout>{children}</DashLayout>
    </StoreProvider>
  )
}

export default DashWrapper