import { useSession, signIn, signOut } from 'next-auth/react';
import Nav from '@/components/Nav';

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      // Add a login button
      <div className='flex items-center w-screen h-screen bg-blue-900'>
        <div className='w-full text-center'>
          <button onClick={() => signIn('google')} className='p-2 px-4 bg-white rounded-lg shadow-md'>
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className='flex min-h-screen bg-blue-900 shadow-md'>
      <Nav />
      <div className='flex-grow mt-2 mb-0 ml-2 mr-2 bg-white border-b rounded-lg shadow-md'>
        <div className='flex items-center block p-4 '>{children}</div>
      </div>
      ;
    </div>
  );
}
