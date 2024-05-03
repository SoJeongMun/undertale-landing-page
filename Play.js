import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { tabListState } from '../atoms/downloadState'

export default function Play() {
  const tabList = useRecoilValue(tabListState)
  const playImgList = [
    {
      link: 'https://www.nintendo.com/store/products/undertale-switch/',
      fileImg: '/images/download/platform-switch.png',
      thumbnailImg: '/images/download/game-switch.png',
      btn: '/images/download/nintendo-shop.png',
    },
    {
      link: '',
      fileImg: '/images/download/platform-pc.png',
      thumbnailImg: '/images/download/game-pc.png',
      btn: [
        {
          src: 'https://store.steampowered.com/app/391540/Undertale/',
          img: '/images/download/steam-shop.png',
        },
        {
          src: 'https://www.humblebundle.com/store/undertale',
          img: '/images/download/humble-shop.png',
        },
        {
          src: 'https://www.gog.com/game/undertale',
          img: '/images/download/gog-shop.png',
        },
        {
          src: 'https://www.xbox.com/en-us/games/store/undertale-pc/9n046hwgq4j2',
          img: '/images/download/microsoft-shop.png',
        },
      ],
    },
    {
      link: 'https://store.playstation.com/en-us/product/UP3893-CUSA08801_00-TFSHVCUTPS400084',
      fileImg: '/images/download/platform-psvita.png',
      thumbnailImg: '/images/download/game-ps4.png',
      btn: '/images/download/ps4-shop.png',
    },
    {
      link: 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&rver=7.3.6963.0&wp=MBI_SSL&wreply=https%3a%2f%2fwww.microsoft.com%2fen-us%2fstore%2fr%2fundertale%2f9pjggx9xjxpb&lc=1033&id=74335&claims=%7b%22compact%22%3a%7b%22name%22%3a%7b%22essential%22%3atrue%7d%7d%7d',
      fileImg: '/images/download/platform-xbox.png',
      thumbnailImg: '/images/download/game-xbox.png',
      btn: '/images/download/xbox-shop.png',
    },
    {
      link: '',
      thumbnailImg: '/images/download/game-ps.png',
      btn: '/images/download/fangamer-shop.png',
    },
  ]
  const { fileImg, thumbnailImg, link, btn } = playImgList[tabList]

  return (
    <div className="flex flex-col w-5/12">
      <div className="flex justify-between items-end h-12">
        <span className="font-en text-xl">Purchased On</span>
        <Link href={link}>
          {fileImg ? (
            <Image src={fileImg} width={100} height={22} alt="desc-img" className="h-7 w-auto mb-1" />
          ) : (
            <span className="font-en text-xl">Only On</span>
          )}
        </Link>
      </div>
      <div className="w-full mt-[18px]">
        <Link href={link}>
          <Image src={thumbnailImg} width={400} height={216} alt="desc-img" className="w-full" />
        </Link>
      </div>
      <div className="flex justify-between gap-2 mx-auto mt-6">
        {Array.isArray(btn) ? (
          <>
            {btn.map(({ src, img }, i) => (
              <Link key={i} href={src}>
                <Image src={img} width={170} height={46} alt="shop-btn" className="w-auto h-auto" />
              </Link>
            ))}
          </>
        ) : (
          <Link href={link}>
            <Image src={btn} width={170} height={46} alt="shop-btn" className="w-auto h-auto" />
          </Link>
        )}
      </div>
    </div>
  )
}
