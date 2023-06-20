import Image from 'next/image'
import About from './components/About'
import Download from './components/Download'
import Intro from './components/Intro'

export default function Home() {
  return (
    <>
      <Intro />
      <Download />
      <About />
    </>
  )
}
