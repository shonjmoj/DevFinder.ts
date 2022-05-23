import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='flex flex-col items-center my-8'>
        <h3 className='font-extralight lg:text-lg'>Made by <strong className=''>Shonjmoj</strong></h3>
        <div className='flex'>
            <a href={`http://github.com/miid0`} className="mx-1 group">
                <AiOutlineGithub size={20} className="group-hover:rotate-6 transition-all duration-300"/>
            </a>
            <a href={`http://twitter.com/ouaaa77`} className="mx-1 group">
                <AiOutlineTwitter size={20} className="group-hover:-rotate-6 transition-all duration-300"/>
            </a>
        </div>
    </div>
  )
}