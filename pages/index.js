import Head from 'next/head';
import Main from './components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lawrence | Frontend Developer</title>
        <meta
          name='description'
          content='Lawrence Narh-Lawson personal website'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
    </div>
  );
}
