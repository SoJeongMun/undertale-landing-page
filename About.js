import Image from 'next/image'
import Card from './about/Card'

export default function About() {
  return (
    <div className="max-w-full h-screen bg-black">
      <h1 className="section-title text-white">About</h1>
      <p className="text-center text-white pb-16">
        이 게임은 유머, 캐릭터 대화 및 플레이어 선택에 중점을 둡니다.
        <br />
        이유는 모르지만...많은 사람들이 이 게임을 좋아합니다.
        <br />
        혹시 모릅니다, 당신도 이 게임을 좋아하게 될지!
      </p>
      <Card />
      <Image src="/images/about/bar-img.png" width={1140} height={300} alt="banner" className="mx-auto pt-16" />
    </div>
  )
}
