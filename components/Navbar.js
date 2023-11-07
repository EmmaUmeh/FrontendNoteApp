"use client";

import React, { useState } from "react"
import { BiMenu, BiSearch, BiX } from "react-icons/bi"
import Avatar from "./Avatar";
import { GrNotification } from "react-icons/gr";


export default function Navbar() {

    const [avatarmodal, setAvatarModal] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false)

    const handleAvatarModal = () => {
        setAvatarModal(!avatarmodal)
    }

    const handleToggle = () => {
        setMenuToggle(!menuToggle)
    }


    return (
        <>
            <div className="w-full bg-[#121212]">
                <div className="flex border-b-2 py-5 px-3 items-center  border-b-[#0a0908] justify-between">
                    <span className="font-bold text-2xl">Notes</span>

                    <label class="relative block lg:block md:block hidden">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <BiSearch size={25} color="rgb(163 163 163)" />
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white text-black w-full border border-slate-300 rounded-md py-2 pl-9 pr-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                    </label>


                    <div className="flex items-center gap-3">
                        {/* <GrNotification size={20}/> */}
                        <Avatar width={40} height={40} onClick={handleAvatarModal} />
                        <div className="flex flex-col text-sm">
                        </div>
                    </div>

                    {/* block lg:hidden sm:block md:block  */}

                    {avatarmodal && <AvatarModal />}

             

                </div>

                <label class="relative sm:block hidden px-2">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <BiSearch size={25} color="rgb(163 163 163)" />
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white text-black w-full border border-slate-300 rounded-md py-2 pl-9 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text"  />
                    </label>
            </div>
        </>
    )
}