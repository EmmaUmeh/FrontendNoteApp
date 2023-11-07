"use client";

import React, { useEffect, useState } from "react"


const SignUp = () => {

const [loading, setLoading] = useState(false);

useEffect(() => {
setLoading(loading)
},[])
    return(
        <>
            <div className="fixed top-6 z-20 w-screen h-screen overflow-y-scroll flex">
      <div className=" w-11/12 md:w-1/3 h-max m-auto p-8 bg-white border border-secondary rounded-lg">
        <h4 className="text-2xl text-center py-3 font-semibold">Register</h4>

        {/* form */}

        <div className="mt-4">
          <form className="space-y-3">

          <div>
              <h5>Name</h5>
              <input
                className="py-2 px-2 w-full border border-[#E1DDDD]"
             
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <h5>Email</h5>
              <input
                className="py-2 px-2 w-full border border-[#E1DDDD]"
             
                placeholder="Enter your email"
              />
            </div>

            <div>
              <h5>Password</h5>
              <input
                className="py-2 px-2 w-full border border-[#E1DDDD]"
               type="password"
                placeholder="Password"
              />
            </div>


            <div>
              <button
                type="submit"
                className={`bg-[#0085ff] text-white w-full py-3 ${
                  loading && "bg-gray-500"
                }`}
                disabled={loading}
              >
                {loading ? "Loading..." : "SignUp"}
              </button>
            </div>

            <div className="flex justify-center">
              <span>Or</span>
            </div>

          

            <div className="flex justify-center">
              <p className="text-xs">
                Already have an account?{" "}
                <span
                 
                  className="text-[#5670F9] text-xs hover:underline cursor-pointer"
                >
                  LogIn
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
        <div
          className="w-full h-full  backdrop-blur-[1px] bg-white/25  pt-4 absolute top-0 left-0 -z-10"
         
        />
      </div>
    </div>
        </>
    )
}

export default SignUp;