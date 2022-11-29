import { Profile, ReposAndFollowers } from '../index';

export default function InfoCard() {
  return (
    <div className='p-4 md:p-6 xl:p-8 container flex flex-col gap-2 xl:gap-6 items-center justify-center max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] bg-slate-800 rounded-lg drop-shadow-lg'>
      <Profile />
      <ReposAndFollowers />
    </div>
  );
}
