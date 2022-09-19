import React from 'react'
import { useNavigate } from 'react-router';
import demoPhoto from './../assets/demo.jpg'
import Rating from './Rating';
function Card({ data, index }) {
    const navigate = useNavigate();
    const handleOnClick = (id) => {
        navigate(`/showDetails/${id}`);
    }
    return (
        <div>
            <div className='w-full p-2'>
                <div className='hover-effcet-container'>
                    <div className='absolute text-red-500'>
                        This is pic {index + 1}
                    </div>
                    <img src={data.img} alt='logo' />

                </div>
                <div className='flex flex-col items-start'>
                    <h2 className='text-slate-300 text-xl my-2 hover:text-red-400 transition-all cursor-pointer'
                        onClick={() => handleOnClick(index)}
                    >{data?.name}</h2>
                    {/* here is the rates */}
                    <Rating rating={data?.rating} />
                    <button className='border rounded-xl px-4 py-1 text-sm mt-2 hover:bg-[#277720] hover:shadow hover:text-white'> chapter 2</button>
                    <button className='border rounded-xl px-4 py-1 my-2 text-sm hover:bg-[#277720] hover:shadow hover:text-white'> chapter 1</button>

                </div>
            </div>
        </div>
    )
}

export default Card;