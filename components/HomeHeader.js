import { useSession } from 'next-auth/react';

export default function HomeHeader() {
  const { data: session } = useSession();
  return (
    <div className='flex justify-between text-blue-900'>
      <h2 className='mt-0'>
        <div className='flex items-center gap-2'>
          <img src={session?.user?.image} alt='' className='w-6 h-6 rounded-md sm:hidden' />
          <div>
            Hello, <b>{session?.user?.name}</b>
          </div>
        </div>
      </h2>
      <div className='hidden sm:block'>
        <div className='flex gap-1 overflow-hidden text-black bg-gray-300 rounded-lg'>
          <img src={session?.user?.image} alt='' className='w-6 h-6' />
          <span className='px-2'>{session?.user?.name}</span>
        </div>
      </div>
    </div>
  );
}
