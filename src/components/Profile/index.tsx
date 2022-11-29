import { useContext } from 'react';
import { Bio, Website, Twitter, Avatar, Location } from '../index';
import { AiOutlineTwitter, AiOutlineLoading } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import UserContext from '../../context/UserContext';

export default function Profile() {
  const { user, isLoading } = useContext(UserContext);
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col'>
        <h1 className='text-lg md:text-5xl font-semibold'>{`${
          user?.name ? user?.name : 'Name'
        }`}</h1>
        <h3 className='text-sm md:text-base ml-1 md:ml-2 lowercase'>
          @{`${user?.login ? user?.login : 'pseudo'}`}
        </h3>
      </div>
      <div className='flex flex-col text-xs md:text-base'>
        <Bio content={user?.bio} />
        <Website content={user?.blog} icon={{ src: BiLink, size: 17 }} />
        <Twitter
          content={user?.twitter_username}
          icon={{ src: AiOutlineTwitter, size: 17 }}
        />
        <Location
          content={user?.location}
          icon={{ src: HiLocationMarker, size: 15 }}
        />
      </div>
      <div
        className='w-20 h-20 md:w-36 md:h-36 xl:w-40 xl:h-40
                    rounded-lg flex justify-center items-center absolute 
                    right-6 top-6 xl:right-10 xl:top-8 overflow-hidden drop-shadow-lg'>
        {isLoading ? (
          <AiOutlineLoading size={70} className='animate-spin' />
        ) : (
          <Avatar size='w-[80%] h-full' />
        )}
      </div>
    </div>
  );
}
