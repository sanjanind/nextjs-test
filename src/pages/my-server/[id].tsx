import { useRouter } from 'next/router';

const server = (props: any) => {
  const route = useRouter();
  console.log('on client-', props);

  return (
    <div className="text-center">
      <div>static individual Users</div>
      <button
        onClick={() => route.push('/client-side')}
        className="bg-amber-400"
      >
        click me
      </button>
      <li>{props.data.firstName}</li>
    </div>
  );
};

export const getServerSideProps = async (context: {
  query: { id: string };
}) => {
  const id = context.query.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  console.log('id-', id, data);
  return {
    props: {
      data,
    },
  };
};

export default server;
