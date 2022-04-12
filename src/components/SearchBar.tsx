import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'


export default function SearchBar() {
    const {value, setValue} = useContext(UserContext);
    const [updated, setUpdate] = useState('');
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdate(e.target.value);
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValue(updated);
    }
  return (
    <div className='flex items-center text-xs md:text-sm bg-slate-800 
            rounded-lg container max-w-[80%] md:max-w-[60%] drop-shadow-lg'>
        <form className='m-1 w-full flex' onSubmit={submitHandler}>
            <input type="text" 
                placeholder='Enter name here...'
                className='mx-2 bg-transparent outline-none w-full 
                    placeholder:text-sm placeholder:opacity-40'
                onChange={changeHandler}/>
            <button className='m-1 p-1.5 md:p-2 rounded-lg bg-slate-900 text-md shadow-lg outline-none'
                    type='submit'>
                Search
            </button>
        </form>
    </div>
  )
}