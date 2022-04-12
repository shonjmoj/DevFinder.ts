import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Avatar from './Avatar';
import Bio from './Bio';
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLink} from 'react-icons/bi'
import {HiLocationMarker} from 'react-icons/hi'
import Website from './Website';
import Twitter from './Twitter'
import Location from './Location';


export default function Profile() {
    const {user} = useContext(UserContext); 
  return (
    <div className='flex flex-col my-4 w-[90%] md:w-[90%] relative'>
        <div className='flex flex-col mx-4 md:mx-8 my-6 md:my-12'>
            {user?.name ? <h1 className='text-lg md:text-5xl font-semibold'>{user?.name}</h1> : 
                <h1 className='text-lg md:text-5xl font-semibold'>Name</h1>}
            {user?.login ? <h3 className='text-sm md:text-base ml-1 md:ml-2 lowercase'>@{user?.login}</h3> : 
                <h3 className='text-sm md:text-base ml-1 md:ml-2'>@pseudo</h3>}
        </div>
        <div className='flex flex-col text-xs md:text-base'>
            <Bio content={user?.bio}/>
            <Website content={user?.blog} icon={{src: BiLink, size: 17}}/>
            <Twitter content={user?.twitter_username} icon={{src: AiOutlineTwitter, size : 17}}/>
            <Location content={user?.location} icon={{src: HiLocationMarker, size: 15}}/>
        </div>
        <div className='w-20 h-20 md:w-36 md:h-36 
                    rounded-lg flex justify-center items-center absolute 
                    right-0 top-2 mx-2 md:mx-4 overflow-hidden drop-shadow-lg'>
            <Avatar size="w-14 h-14 md:w-24 md:h-24"/>
        </div>
    </div>
  )
}