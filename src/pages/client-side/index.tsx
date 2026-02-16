import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface iUser {
  id: string;
  firstName: string;
}
const About = () => {
  const route = useRouter();
  const [user, setUser] = useState<iUser[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://dummyjson.com/user');
      const jsonData = await data.json();
      setUser(jsonData.users);
    }

    fetchData();
  }, []);

  console.log('user', user);
  return (
    <div className="text-center">
      <div>Client Users</div>
      <button onClick={() => route.push('/about')} className="bg-amber-400">
        click me
      </button>
      {user?.map((data) => {
        console.log(data);
        return <li key={data.id}>{data.firstName}</li>;
      })}
    </div>
  );
};

export default About;
