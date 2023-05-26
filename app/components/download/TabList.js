import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { tabListState } from '../atoms/downloadState'

export default function TabList({ currentTab }) {
  const listStyle = 'flex justify-between py-3.5 px-2 border-t-2 border-black cursor-pointer'

  const [tabList, setTabList] = useRecoilState(tabListState)
  const demoList = ['WINDOWS DEMO DOWNLOAD', 'MAC DEMO DOWNLOAD', 'WINDOWS 한글판 DEMO DOWNLOAD']
  const playList = [
    'AVAILABLE ON NINTENDO SWITCH',
    'AVAILABLE ON PC',
    'AVAILABLE ON PS4 & PS VITA',
    'AVAILABLE ON X-BOX',
    `AVAILABLE ON COLLECTOR'S EDITION`,
  ]
  const currentList = currentTab === 0 ? demoList : playList
  const selectedList = i => {
    setTabList(i)
  }

  return (
    <div>
      <ul>
        {currentList.map((item, i) => (
          <li
            key={i}
            className={i === currentList.length - 1 ? `${listStyle} border-b-2 border-black` : listStyle}
            onClick={() => selectedList(i)}
          >
            <span>{item}</span>
            <Image src="/images/common/go.png" width={30} height={20} alt="icon" />
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Image src="/images/download/sticker.png" width={272} height={170} alt="sticker" className="mx-auto" />
      </div>
    </div>
  )
}
