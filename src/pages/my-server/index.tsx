import { useRouter } from 'next/router';

const server = (props: any) => {
  const route = useRouter();
  console.log('on client-', props.data);

  return (
    <div className="text-center">
      <div>Server Users</div>
      <button
        onClick={() => route.push('/client-side')}
        className="bg-amber-400"
      >
        click me
      </button>
      {props.data?.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await (await fetch('https://dummyjson.com/users')).json();
  console.log('on server--', data);
  return {
    props: {
      data: data.users,
    },
  };
};

export default server;
