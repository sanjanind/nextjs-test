import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23lia8mF2GYnqHqwus',
      clientSecret: '7d660bbb17b8f3468d53b10f495e9b8735941f72',
    }),
  ],
};

export default NextAuth(authOptions);
