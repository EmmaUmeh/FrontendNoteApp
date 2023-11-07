"use client";

import React, { useState } from "react"
import CustomButton from "@/components/CustomButton";
import { PiPlus } from "react-icons/pi";
import CreateModal from "@/components/CreateModal";

export default function Home() {

    const [menuToggle, setMenuToggle] = useState(false)

    const handleToggle = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <>
            <div className="py-10 px-7">

                <div className="flex items-center justify-between">

                    <h2 className="p-2">Feeds</h2>

                    <div>
                        <CustomButton onClick={handleToggle}>
                            <div className="flex items-center p-1">
                                <PiPlus color="white" />Create Notes
                            </div>
                        </CustomButton>
                    </div>
                    {menuToggle && <CreateModal />}
                </div>
            </div>
        </>
    )
}