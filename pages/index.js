import Head from 'next/head';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';

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
      <Navbar />
      <Main />
      <Projects />
      <About />
    </div>
  );
}
