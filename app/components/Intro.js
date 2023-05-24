'use client'

import Image from 'next/image'
import { useRef } from 'react'

export default function Intro() {
  const commonPath = '/images/common'
  const arrowRef = useRef()
  const changeImg = () => {
    let arrow = arrowRef.current.src
  }

  return (
    <div className="w-screen">
      <div className="my-8 w-full">
        <Image src={`${commonPath}/title.png`} width={442} height={204} className="mx-auto" />
      </div>
      <div>
        <video autoPlay loop muted playsInline>
          <source src="/videos/trailer1.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="flex gap-5 items-center justify-center cursor-pointer hover:translate-y-4 hover:transition-all hover:duration-300"
        onMouseOver={changeImg}
      >
        <Image src={`${commonPath}/go.png`} width={30} height={20} ref={arrowRef} className="rotate-90" />
        <p className="font-en hover:text-point">Scroll Down</p>
        <Image src={`${commonPath}/go.png`} width={30} height={20} ref={arrowRef} className="rotate-90" />
      </div>
    </div>
  )
}
