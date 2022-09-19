import React from 'react'
import CardList from './CardList'
import TendingList from './TendingList'

function Home() {
  return (
    <div className='w-full bg-slate-900 text-slate-200'>
      <div className=' max-w-[1240px]  m-auto'>
        <div className=' grid grid-cols-1 md:grid-cols-3 '>
          <div className='md:col-span-2'>
            <CardList />
          </div>

          <TendingList />
        </div>
      </div>
    </div>
  )
}

export default Home