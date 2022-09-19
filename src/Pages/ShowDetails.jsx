import React, { useState } from 'react'
import img from '../assets/demo.jpg'
import Rating from './Rating'
import {
    ChatBubbleBottomCenterIcon,
    BookmarkIcon,
    ArrowsUpDownIcon
} from '@heroicons/react/24/outline';

import { StarIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router';
import { useEffect } from 'react';


function ShowDetails() {
    const data = [
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Xiao-BaiS-Father-Is-A-Wonderful-Person-125x180.jpg",
            "name": "A Symbiotic Relationship Between A Rabbit And A Black Panther",
            "rating": "4.4"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Yuanlong-125x180.jpg",
            "name": "The lazy prince becomes a genius (Reformation of the Deadbeat Noble)",
            "rating": "4.5"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Son-in-Law-Does-Cheap-Cultivation-193x278-1-125x180.jpeg",
            "name": "Against the Gods",
            "rating": "3.8"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Road-to-Awakening-125x180.jpg",
            "name": "I Can See The Success Rate",
            "rating": "3.3"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/National-School-Prince-Is-A-Girl-125x180.jpg",
            "name": "Martial Peak",
            "rating": "3.9"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/thumb_5e5b81aad0b53-125x180.jpg",
            "name": "Cultivator Against Hero Society",
            "rating": "3.9"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Yuan-Zun-125x180.jpg",
            "name": "Tales of Demons and Gods",
            "rating": "4"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Xiao-BaiS-Father-Is-A-Wonderful-Person-125x180.jpg",
            "name": "The Beginning After the End",
            "rating": "4.6"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Yuanlong-125x180.jpg",
            "name": "Soul Land IV – The Ultimate Combat",
            "rating": "4"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Son-in-Law-Does-Cheap-Cultivation-193x278-1-125x180.jpeg",
            "name": "Rebirth of the Urban Immortal Cultivator",
            "rating": "3.3"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Road-to-Awakening-125x180.jpg",
            "name": "Player from Today Onwards",
            "rating": "4.1"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/National-School-Prince-Is-A-Girl-125x180.jpg",
            "name": "Versatile Mage",
            "rating": "3.5"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/thumb_5e5b81aad0b53-125x180.jpg",
            "name": "Dimensional Mercenary (Other World Warrior)",
            "rating": "3.5"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Yuan-Zun-125x180.jpg",
            "name": "It Starts With a Kingpin Account",
            "rating": "3.5"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Xiao-BaiS-Father-Is-A-Wonderful-Person-125x180.jpg",
            "name": "The Constellation That Returned From Hell",
            "rating": "4.2"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Yuanlong-110x150.jpg",
            "name": "CITY OF SANCTUARY",
            "rating": "3.4"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/thumb_5e5b81aad0b53-110x150.jpg",
            "name": "I Return from the Heaven and Worlds",
            "rating": "3.3"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Xiao-BaiS-Father-Is-A-Wonderful-Person-110x150.jpg",
            "name": "Forced to Become the Villain’s Son-in-law",
            "rating": "3.5"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/Son-in-Law-Does-Cheap-Cultivation-193x278-1-110x150.jpeg",
            "name": "100,000 Levels of Body Refining : All the dogs I raise are the Emperor",
            "rating": "3.3"
        },
        {
            "img": "https://mangalogy.com/wp-content/uploads/2022/08/National-School-Prince-Is-A-Girl-110x150.jpg",
            "name": "The Tutorial Tower of the Advanced Player",
            "rating": "4.3"
        }
    ]
    let { detailsId } = useParams();
    const chapters = ['chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3', 'chapter1', 'chapter2', 'chapter3',]
    const [currentData, setCurrentData] = useState({})
    const [fullSummary, setFullSummary] = useState(false);
    useEffect(() => {
        setCurrentData(data[detailsId]);
    }, [])
    return (
        <div className='w-full bg-slate-900 text-slate-200 py-8'>
            <div className=' max-w-[1240px]  m-auto px-2'>
                <h6 className='pb-4 text-gray-400 text-xs'>
                    Home / All Mangas / {currentData.name}
                </h6>
                <h3 className='text-2xl'>{currentData.name}</h3>
                <div className='grid grid-cols-1 md:grid-cols-4 py-4 gap-4 '>
                    {/* img */}
                    <div className='w-fit  p-4 m-auto'>
                        <img className='w-[225px]' src={currentData.img} alt='show details img' />
                    </div>
                    {/* details */}
                    <div className='col-span-3 bg-[#363636] p-8 '>
                        <Rating size={48} rating={currentData.rating} />
                        <div className='grid md:grid-cols-3 '>
                            <div className='col-span-2'>
                                <div className='flex mt-4'>
                                    <h3 className='w-1/4 font-bold text-slate-300'>Rating</h3>
                                    <h3 className='text-gray-400'> Reviews {currentData.rating} / 5 out of 120</h3>

                                </div>
                                <div className='flex mt-4'>
                                    <h3 className='w-1/4 font-bold text-slate-300'>Rank</h3>
                                    <h3 className='text-gray-400'> 72nd, it has 1.3M views</h3>
                                </div>
                                <div className='flex mt-4'>
                                    <h3 className='w-1/4 font-bold text-slate-30 '>Alternative</h3>
                                    <h3 className='text-gray-400 '> Reformation of the Deadbeat Noble</h3>
                                </div>
                                <div className='flex mt-4'>
                                    <h3 className='w-1/4 font-bold text-slate-300'>Genre</h3>
                                    <h3 className='text-gray-400'>Action, Adventure, Fantasy, Reincarnation, Shounen
                                    </h3>
                                </div>
                                <div className='flex mt-4'>
                                    <h3 className='w-1/4 font-bold text-slate-300'>Tags</h3>
                                    <h3 className='w-3/4 text-gray-400'>
                                        mangaweebs, Reformation of the Deadbeat Noble, Reformation of the Deadbeat Noble manga, Reformation of the Deadbeat Noble manhua, Reformation of the Deadbeat Noble manhwa, Reformation of the Deadbeat Noble webtoon, The lazy prince becomes a genius, The lazy prince becomes a genius manga, The lazy prince becomes a genius manhua, The lazy prince becomes a genius manhwa, The lazy prince becomes a genius webtoon</h3>
                                </div>
                            </div>
                            <div className='p-4'>
                                <div className='flex gap-10 my-4'>
                                    <h1 className='font-bold text-slate-300'>Status</h1>
                                    <h1 className='text-gray-400'>Ongoing</h1>
                                </div>
                                <div className='flex gap-4 items-center text-center'>
                                    <div>
                                        <ChatBubbleBottomCenterIcon />
                                        200 <br />
                                        comment
                                    </div>
                                    <div className='text-[100px] font-thin'>|</div>
                                    <div>
                                        <BookmarkIcon size={20} />
                                        300 <br />
                                        bookmark
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* summery */}

                <div className='my-8 px-8'>
                    <div className=''>
                        <div className='m-2 mt-0   flex  border-b-[1px] border-slate-100 items-center'>
                            <div className='flex items-center '>
                                <div className='w-8 h-8 bg-gradient-to-r from-[#17A30B] to-[#1A6B13] z-[1] text-white ' ><StarIcon /></div>
                                <div className='w-4 h-4 bg-[#1A6B13] relative left-[-0.8rem] rotate-45 '></div>
                            </div>
                            <h3 className='text-slate-100 font-medium text-2xl mr-8'>  SUMMARY
                            </h3>

                        </div>
                        <div className='transition-all duration-700'>
                            <div className={fullSummary?'px-4 text-2xl text-gray-500 max-h-auto overflow-hidden' :'px-4 text-2xl text-gray-500 max-h-28 overflow-hidden'}>
                                As the grandmaster who founded the Demonic Sect, Wei WuXian roamed the world in his wanton ways, hated by millions for the chaos he created. In the end, he was back-stabbed by his dearest junior brother and killed by powerful clans that combined to overpower him. He incarnates into the body of a lunatic who was abandoned by his clan and is later, unwillingly, taken away by a famous cultivator among the clans—Lan WangJi, his archenemy.

                                This marks the start of a thrilling yet hilarious journey of attacking monsters, solving mysteries, and
                            </div>
                            <div className='flex justify-center'>
                                <button onClick={()=>setFullSummary(!fullSummary)} className='text-white hover:text-red-500 text-center  flex  py-2 px-1 my-2 '>{fullSummary ? "Show Less" : "Show More"}</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* latest releases part */}
                <div className='my-8 px-8'>
                    <div className=''>
                        <div className='m-2 mt-0   flex  border-b-[1px] border-slate-100 items-center'>
                            <div className='flex items-center '>
                                <div className='w-8 h-8 bg-gradient-to-r from-[#17A30B] to-[#1A6B13] z-[1] text-white ' ><StarIcon /></div>
                                <div className='w-4 h-4 bg-[#1A6B13] relative left-[-0.8rem] rotate-45 '></div>
                            </div>
                            <h3 className='text-slate-100 font-medium text-2xl mr-8'> LATEST MANGA RELEASES
                            </h3>
                            <div><ArrowsUpDownIcon className='h-6' /></div>
                        </div>
                    </div>
                </div>
                <div className='px-10'>
                    {
                        chapters.map((cpter, index) => {
                            return (
                                <div key={index}>
                                    <div className='text-2xl py-4 '>
                                        Chapter {index + 1}
                                    </div>
                                    <hr className=' border-gray-500' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowDetails