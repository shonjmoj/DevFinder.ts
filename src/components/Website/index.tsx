import { BioProps } from '../Bio';

export default function Website(data: BioProps) {
  return (
    <div className='flex items-center'>
      {data.icon && <data.icon.src size={data.icon.size} />}
      {data.content ? (
        <a className='mx-2' href={data.content}>
          {data.content}
        </a>
      ) : (
        <h3 className='mx-2 opacity-80'>Website</h3>
      )}
    </div>
  );
}
