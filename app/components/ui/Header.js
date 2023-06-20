'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { navState } from '../atoms/navState'
import Nav from './Nav'

export default function Header() {
  const [isOpen, setIsOpen] = useRecoilState(navState)

  return (
    <>
      <div className="bg-black flex justify-between py-2 px-36 items-center sticky top-0 z-10">
        <h1>
          <Link href="/">
            <Image src="/images/common/logo.png" width={240} height={24} alt="logo" />
          </Link>
        </h1>
        <div className="flex items-center gap-10">
          <p className="font-en text-white cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
            MENU?
          </p>
          <div>
            <Image src="/images/common/south-korea.png" width={50} height={54} alt="flag" />
          </div>
        </div>
      </div>
      <Nav />
    </>
  )
}
