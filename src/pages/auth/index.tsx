import { useSession, signIn, signOut } from 'next-auth/react';

const Auth = () => {
  const session = useSession();

  console.log('session-', session);

  if (!session.data) {
    return (
      <button onClick={() => signIn} className="self-center cursor-grabbing">
        Login
      </button>
    );
  }

  return (
    <>
      <div className="text-center">auth</div>
      <button onClick={() => signOut} className="self-center cursor-grabbing">
        Log Out
      </button>
    </>
  );
};

export default Auth;
