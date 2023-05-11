import Head from 'next/head';
import Main from './components/Main';
import Contact from './components/Contact';
import ProjectItem from './components/ProjectItem';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

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
      <About />
      {/* <ProjectItem /> */}
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}
