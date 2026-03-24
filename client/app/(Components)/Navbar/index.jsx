"use client";

import { Bell, Menu, Sun, Search, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-8">
      <div className="flex items-center gap-5">
        <button className="px-3 py-3 bg-gray-100 hover:bg-blue-100 rounded-full">
          <Menu className="w-4 h-4" />
        </button>
  

      <div className="relative">
        <input
          type="search"
          placeholder="start type to search groups & products"
          className="pl-10 pr-4 py-2 w-[200px] md:w-80 border-2 bg-white rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Bell className="text-gray-500" size={20} />
        </div>
      </div>
          </div>

      <div className="flex items-center gap-5">
        <div className="hidden md:flex items-center gap-5">
          <div>
          <button>
            <Sun className="cursor-pointer text-gray-500" size={24} />
          </button>
        </div>

        <div className="relative">
          <Bell className="cursor-pointer text-gray-500" size={24} />
          <span className="absolute -top-2 -right-2 px-[0.4rem] py-1 text-xs font-semibold text-red-200 bg-red-500 rounded-full">
            3
          </span>
        </div>
        <hr className="w-0 h-7 border border-solid border-l border bg-gray-300 mx-3" />
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9">Image</div>
          <span className="font-semibold"> Saikishan</span>
        </div>
        </div>
        <Link href="/settings">
        <Settings className="cursor-pointer text-gray-500" size={24}/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
