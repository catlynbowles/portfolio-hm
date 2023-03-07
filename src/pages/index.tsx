import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Intro } from '@/components/Intro'
import { Navbar } from '@/components/Navbar'
import About from './about'
import Projects from './projects'
import Contact from './contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Catlyn Bowles | Front-End Software Engineer</title>
        <meta name="description" content="I'm a front-end developer with a special interest in web accessibility and building digital experiences that make the world a better place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
