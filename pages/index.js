import { useSession } from 'next-auth/react';
import Layout from '@/components/Layout';

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Layout>
        <div className='justify-between text-blue-900'>
          <h2>
            Hello, <b>{session?.user?.name}</b>
          </h2>
        </div>
        <span className='px-2'></span>
        <div className='flex items-center gap-1 justify-normal text-blue '>
          <img src={session?.user?.image} alt='' className='w-12 h-12 rounded-lg' />
          <span className='px-2'>{session?.user?.name}</span>
        </div>
      </Layout>
    </>
  );
}
