import React from 'react'
import { data } from './Bio'


export default function Twitter (data: data) {
  return (
    <div className="flex items-center text-blue-500">
        {data.icon && <data.icon.src size={data.icon.size}/>}
        {data.content ? <a className='mx-2' href={`https://twitter.com/${data.content}`}>{data.content}</a> : 
            <h3 className='mx-2 opacity-80'>Twitter</h3>}
    </div>
  )
}