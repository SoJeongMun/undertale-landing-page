import Image from 'next/image'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { navState } from '../atoms/navState'

export default function Nav() {
  const navList = [
    {
      title: 'Download',
      link: '',
    },
    {
      title: 'About',
      link: '',
    },
    {
      title: 'News',
      link: '',
    },
    {
      title: 'Shop',
      link: '',
    },
    {
      title: 'FAQ | Contact',
      link: '',
    },
    {
      title: 'Other Games',
      link: '',
    },
  ]
  const [isOpen, setIsOpen] = useRecoilState(navState)

  return (
    <>
      {isOpen && (
        <div className="bg-black w-screen h-screen fixed top-0 z-50">
          <div className="nav">
            <Image
              src="/images/common/back.png"
              width={118}
              height={40}
              alt="back"
              className="cursor-pointer absolute top-5 left-5"
              onClick={() => setIsOpen(prev => !prev)}
            />
            <ul className="flex flex-col justify-center items-center h-full">
              {navList.map(({ title, link }) => (
                <li key={title} className="font-en text-white text-4xl py-6 hover:text-point">
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
