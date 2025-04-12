import Head from 'next/head';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

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
      {/* <Navbar /> */}
      <Main />
      {/* <About />
      <Projects /> */}
    </div>
  );
}
