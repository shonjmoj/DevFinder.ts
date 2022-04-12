import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


export default function ReposAndFollowers() {
    const {user} = useContext(UserContext);
  return (
    <div className='flex w-[85%] md:w-[90%] bg-slate-900 rounded-lg justify-around items-center mb-4 drop-shadow-lg'>
        <div className='flex flex-col items-center p-2'>
            <h3 className='text-xs md:text-lg'>Repos</h3>
            {user?.public_repos ? <h1 className='text-lg md:text-2xl'>{user?.public_repos}</h1> :
                <span className='text-xl md:text-2xl'>-</span>}
        </div>
        <div className='flex flex-col items-center p-2'>
            <h3 className='text-xs md:text-lg'>Following</h3>
            {user?.following ? <h1 className='text-lg md:text-2xl'>{user?.following}</h1> :
                <span className='text-xl md:text-2xl'>-</span>}
        </div>
        <div className='flex flex-col items-center p-2'>
            <h3 className='text-xs md:text-lg'>Followers</h3>
            {user?.followers ? <h1 className='text-lg md:text-2xl'>{user?.followers}</h1> :
                <span className='text-xl md:text-2xl'>-</span>}
        </div>
    </div>
  )
}