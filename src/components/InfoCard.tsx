import React from 'react'
import Profile from './Profile'
import ReposAndFollowers from './Repos&Followers'

export default function InfoCard() {
  return (
    <div className='container flex flex-col items-center justify-center max-w-[80%] lg:max-w-[60%] bg-slate-800 rounded-lg drop-shadow-lg'>
        <Profile/>
        <ReposAndFollowers/>
    </div>
  )
}