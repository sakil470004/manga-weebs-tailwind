import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>


function Footer() {
    const data = ['Action', 'Horrry', 'Adult', 'Comic', 'Comedy', 'Fun', 'Funny', 'Action', 'Horrry', 'Adult', 'Comic', 'Comedy', 'Fun', 'Funny', 'Action', 'Horrry', 'Adult', 'Comic', 'Comedy', 'Fun', 'Funny']
    return (
        <div className='w-full bg-[#363636] text-slate-200 py-8 '>
            <div className=' max-w-[1240px]  m-auto'>
                {/* icon */}
                <div className='w-full flex justify-center '>
                    <div className='flex justify-between sm:[250px] text-2xl '>
                        <FaFacebook />
                        <FaInstagram className='mx-4' />
                        <FaTwitter />
                    </div>
                </div>
                {/* tending clip */}
                <div className=' flex justify-center mt-4 '>
                    <div>
                        <div className='flex'>
                            <div className='bg-gradient-to-r from-[#17A30B] to-[#1A6B13] mt-4  py-1 px-8 text-sm z-10 font-medium  text-slate-200 '>
                                Legal Disclaimer
                            </div>
                        </div>
                        <div className='w-4 h-4 bg-[#17A30B] rotate-45 relative bottom-3 left-5'>
                        </div>

                    </div>
                </div>
                <h3 className='text-sm text-gray-500 mt-6  px-4'>All the manga on this site are the property of the publisher. We are just trying to translate them into other languages so that you can more easily track them. Do not try to make a profit from these. If you like any of the comics you get here, consider buying them from the publisher, if available. You can contact us at: sakil@gmail.com</h3>
                {/* past the all category */}
                <div className=' grid grid-cols-2 md:grid-cols-6 mt-6 px-4'>
                    {
                        data.map((dt, index) => {
                            return (
                                <div key={index}>
                                    <h4 className='text-slate-300 cursor-pointer hover:text-red-500 w-fit'>
                                        {dt}
                                    </h4>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                {/* nav list */}
                {/* for larger device */}
                <ul className='hidden md:flex justify-center gap-8 my-4 text-slate-400 hover:text-red-400'>
                    <li>
                        Home
                    </li>
                    |
                    <li>
                        PATRON
                    </li>
                    |
                    <li>
                        ABOUT US
                    </li>
                    |
                    <li>
                        PRIVACY POLICY
                    </li>
                    |
                    <li>
                        DMCA
                    </li>
                </ul>
                {/* for small device */}
                <div className='md:hidden gap-8 my-4 text-slate-400 flex justify-center hover:text-red-400 '>
                    <ul className='hover:text-red-400 w-fit'>
                        <li>
                            Home
                        </li>

                        <li>
                            PATRON
                        </li>

                        <li>
                            ABOUT US
                        </li>

                        <li>
                            PRIVACY POLICY
                        </li>

                        <li>
                            DMCA
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center text-xs  text-gray-500 '>
                    © 2022 Mynul Islam Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer