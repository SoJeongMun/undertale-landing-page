import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { tabListState } from '../atoms/downloadState'

export default function Demo() {
  const tabList = useRecoilValue(tabListState)
  const demoImgList = [
    {
      fileImg: '/images/download/windows-download.png',
      thumbnailImg: '/images/download/intro1.png',
      link: 'https://thisisatestofthevideogamedeliverysystem.sfo2.digitaloceanspaces.com/game/UndertaleDemo.zip',
    },
    {
      fileImg: '/images/download/download-mac.png',
      thumbnailImg: '/images/download/intro4.png',
      link: 'https://thisisatestofthevideogamedeliverysystem.sfo2.digitaloceanspaces.com/game/MacUnderTale.zip',
    },
    {
      fileImg: '/images/download/download-kor.png',
      thumbnailImg: '/images/download/intro3.png',
      link: 'https://thisisatestofthevideogamedeliverysystem.sfo2.digitaloceanspaces.com/game/UndertaleDemo_k.zip',
    },
  ]
  const { fileImg, thumbnailImg, link } = demoImgList[tabList]

  return (
    <div className="flex flex-col w-5/12">
      <Link href={link}>
        <Image src={fileImg} width={357} height={65} alt="desc-img" className="float-right h-[52px] w-auto" />
      </Link>
      <div className="w-full mt-[18px]">
        <Link href={link}>
          <Image src={thumbnailImg} width={400} height={216} alt="desc-img" className="w-full" />
        </Link>
      </div>
      <div>
        <p className="my-4">
          <span className="text-point font-bold">! 참고 !</span>
          <br />
          DEMO는 기능이 다른 이전 소프트웨어에서 생성되었습니다.
          <br />
          따라서 전체 게임을 100% 나타내지는 않을 수 있습니다.
          <br />
          하지만, 어떤 면에서는 조금 특별합니다...
        </p>
        <p>
          <span className="text-point font-bold">! 참고 !</span>
          <br />
          저장 파일은 데모에서 정식 게임으로 전송되지 않습니다.
          <br />
          하지만, 데모는 너무 짧아서 신경쓰지 않을 것입니다...
        </p>
      </div>
    </div>
  )
}
