import { BioProps } from '../Bio';

export default function Location(data: BioProps) {
  return (
    <div className='flex items-center'>
      {data.icon && <data.icon.src size={data.icon.size} />}
      {data.content ? (
        <h3 className='mx-2'>{data.content}</h3>
      ) : (
        <h3 className='mx-2 opacity-80'>Location</h3>
      )}
    </div>
  );
}
