'use client'

import { useState } from 'react'
import Image from 'next/image'
import TabList from './download/TabList'
import Demo from './download/Demo'
import Play from './download/Play'

export default function Download() {
  const [currentTab, setCurrentTab] = useState(0)
  const tabList = [
    {
      img: '/images/download/demo-btn.png',
      clicked: '/images/download/demo-toggle.png',
    },
    {
      img: '/images/common/by.png',
    },
    {
      img: '/images/download/play-btn.png',
      clicked: '/images/download/play-toggle.png',
    },
  ]
  const onClickTab = i => {
    i === 1 ? setCurrentTab(0) : setCurrentTab(i)
  }

  return (
    <div className="min-h-screen w-screen flex-col justify-center items-center pb-20">
      <h1 className="section-title">Download</h1>
      <div className="flex w-4/5 justify-evenly mx-auto">
        <div className="flex flex-col w-5/12">
          <div className="flex justify-center items-center gap-5 mb-6">
            {tabList.map(({ img, clicked }, i) => (
              <Image
                key={i}
                src={currentTab === i ? clicked : img}
                width={clicked ? 112 : 25}
                height={clicked ? 60 : 25}
                alt="tab"
                className={clicked ? 'cursor-pointer h-12 w-auto' : ''}
                onClick={() => onClickTab(i)}
              />
            ))}
          </div>
          <TabList currentTab={currentTab} />
        </div>
        {currentTab === 0 ? <Demo /> : <Play />}
      </div>
    </div>
  )
}
