export default function Stats({ data }: { data: number | undefined }) {
  return (
    <>
      {data ? (
        <h1 className='text-lg md:text-2xl'>{data}</h1>
      ) : (
        <span className='text-xl md:text-2xl'>-</span>
      )}
    </>
  );
}
