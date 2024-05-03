'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

export default function Intro() {
  const [over, setOver] = useState(false)
  const imgName = over ? 'go-red' : 'go'
  const arrowRef = useRef()
  const heightRef = useRef()
  const scrollH = heightRef.current?.offsetHeight + 56
  const scrollMove = () => window.scrollTo({ left: 0, top: scrollH, behavior: 'smooth' })

  return (
    <div className="max-w-full h-screen" ref={heightRef}>
      <div className="my-6 w-full">
        <Image src="/images/common/title.png" width={442} height={204} alt="title" className="mx-auto" />
      </div>
      <div className="w-full bg-black py-5 video-wrap">
        <video autoPlay loop muted playsInline className="mx-auto">
          <source src="/videos/trailer1.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="flex gap-5 py-2 items-center justify-center cursor-pointer my-8 hover:text-point hover:translate-y-4 hover:transition-all hover:duration-500"
        onMouseEnter={() => setOver(prev => !prev)}
        onMouseLeave={() => setOver(prev => !prev)}
        onClick={scrollMove}
      >
        <Image
          src={`/images/common/${imgName}.png`}
          width={30}
          height={20}
          ref={arrowRef}
          alt="arrow"
          className="rotate-90"
        />
        <p className="font-en">Scroll Down</p>
        <Image
          src={`/images/common/${imgName}.png`}
          width={30}
          height={20}
          ref={arrowRef}
          alt="arrow"
          className="rotate-90"
        />
      </div>
    </div>
  )
}
