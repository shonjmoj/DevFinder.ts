import { IconType } from 'react-icons';

export type BioProps = {
  content: string | undefined;
  icon?: {
    src: IconType;
    size: number;
  };
};

export default function Bio(data: BioProps) {
  return (
    <div className='flex items-center'>
      {data.icon && <data.icon.src size={data.icon.size} />}
      {data.content ? (
        <h3 className='mx-1 md:mr-24'>{data.content}</h3>
      ) : (
        <h3 className='opacity-80'>Bio</h3>
      )}
    </div>
  );
}
