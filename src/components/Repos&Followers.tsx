import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import {AiOutlineLoading} from 'react-icons/ai'
import Stats from './Stats';


export default function ReposAndFollowers() {
    const {user, isLoading} = useContext(UserContext);
  return (
    <div className='flex w-[85%] md:w-[90%] bg-slate-900 rounded-lg justify-around items-center mb-4 drop-shadow-lg'>
        <div className='flex flex-col items-center p-2'>
            <h3 className='text-xs md:text-lg'>Repos</h3>
            {isLoading ? <AiOutlineLoading size={20} className="animate-spin my-2"/> :
                <Stats data={user?.public_repos}/>}
        </div>
        <div className='flex flex-col items-center p-2'>
            <h3 className='text-xs md:text-lg'>Following</h3>
            {isLoading ? <AiOutlineLoading size={20} className="animate-spin my-2"/> :
                <Stats data={user?.following}/>}
        </div>
        <div className='flex flex-col items-center p-2'>
            <h3 className='text-xs md:text-lg'>Followers</h3>
            {isLoading ? <AiOutlineLoading size={20} className="animate-spin my-2"/> :
                <Stats data={user?.followers}/>}
        </div>
    </div>
  )
}