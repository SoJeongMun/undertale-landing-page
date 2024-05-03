import Image from 'next/image'

export default function Card() {
  const cardList = [
    {
      thumbnail: '/images/about/worldwide-cut.png',
      title: '세계관',
      desc: '이곳에서 게임의 배경과 주인공이 모험을 시작하게 된 계기를 알 수 있습니다. 지금 바로, 아래 버튼을 눌러서요. 싫다면...그저 밀어버리세요...!',
    },
    {
      thumbnail: '/images/about/play-cut.png',
      title: '게임방법',
      desc: '혹시, 이 게임의 플레이 방법이 궁금해지지 않았습니까? 여기서 플레이 방식과 전투 방법을 배울 수 있습니다! 자, 이제 아래 버튼을 눌러보세요!',
    },
    {
      thumbnail: '/images/about/character-cut.png',
      title: '캐릭터',
      desc: 'UNDERTALE에는 매력적인 캐릭터들이 많습니다. 정말로요! 어때요, 매우 흥미롭게 느껴지지 않습니까? 그렇다면 버튼을 눌러버리는 건 어떨까요!',
    },
  ]
  return (
    <ul className="flex rounded-2xl w-3/5 mx-auto overflow-hidden">
      {cardList.map(({ thumbnail, title, desc }, i) => (
        <li key={i} className="flex flex-col bg-white mx-auto card">
          <Image src={thumbnail} width={400} height={214} alt="thumbnail" className="card-img" />
          <h3 className="text-2xl font-bold p-6">{title}</h3>
          <p className="px-6 pb-8 text-lg max-h-36">{desc}</p>
          <button className='pb-6 px-6 self-end'>
            <Image src="/images/common/go.png" width={30} height={20} alt="btn" />
          </button>
        </li>
      ))}
    </ul>
  )
}
