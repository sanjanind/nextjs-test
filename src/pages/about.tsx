import { Nosifer } from 'next/font/google';
import { useRouter } from 'next/router';

const About = () => {
  const route = useRouter();

  console.log('router -', route);

  return (
    <div className="text-center">
      <div>About</div>
      <button onClick={() => route.push('/my-ssg')} className="bg-amber-400">
        click me
      </button>
    </div>
  );
};

export default About;
