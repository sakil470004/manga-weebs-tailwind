import React from 'react'
import SidePicCard from './SidePicCard'

function TendingList() {
    const data = [
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


    return (
        <div className='md:ml-8 '>
            <div className='flex flex-col '>
                <div className='flex'>
                    <div className='bg-gradient-to-r from-[#17A30B] to-[#1A6B13] mt-4  py-2 px-4 text-xl z-10 font-medium '>
                        TRENDING TODAY
                    </div>
                </div>
                <div className='w-4 h-4 bg-[#17A30B] rotate-45 relative bottom-3 left-5'>

                </div>
            </div>
            <div className='flex flex-col'>



                {data.map((dt, index) => {
                    return (
                        <SidePicCard data={dt} index={index} key={index} />
                    )
                })

                }
            </div>
        </div>
    )
}

export default TendingList