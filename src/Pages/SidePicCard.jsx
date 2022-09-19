import { data } from 'autoprefixer'
import React from 'react'
import pic from './../assets/demo2.jpg'

function SidePicCard({ data, index }) {
    return (
        <div>
            <div className='flex  my-4  items-center gap-2'>
                <div className='w-[65px] py-2 hover-effcet-container'>
                    <img className='w-full' src={data.img} alt="/" />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-sm w-3/4 text-slate-200'>{data.name}</h2>
                    <div className='w-3/4'>
                        <button className='border rounded-xl px-4 py-1 text-xs mt-2 hover:bg-[#277720] hover:shadow hover:text-white'> chapter 2</button>
                        <span className='text-[12px] ml-2 text-gray-400'>7 September 16:33</span>
                    </div>
                    <div className='w-3/4'>
                        <button className='border rounded-xl px-4 py-1 my-2 text-xs hover:bg-[#277720] hover:shadow hover:text-white'> chapter 1</button>
                        <span className='text-[12px] ml-2 text-gray-400'>1 September 02:09</span>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default SidePicCard