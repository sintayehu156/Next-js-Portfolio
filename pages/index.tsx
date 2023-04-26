import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '@/src/components/Main'
import About from '@/src/components/About'
import Skills from '@/src/components/Skills'
import Projects from '@/src/components/Projects'
import Contact from '@/src/components/Contact'
import Footer from '@/src/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sintayehu | Software Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sentia.ico" />
      </Head>
      <Main />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    
    </>
  )
}
