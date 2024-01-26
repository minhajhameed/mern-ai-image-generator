import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import openAI from '@public/assets/openAI.svg'
import logo from '@public/assets/logo.svg'

const Nav = () => {
  return (
    <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link href="https://openai.com/" target="_blank" >
        <Image src={openAI} alt="openAI" className="w-28 object-contain" />
      </Link>
      <div className='head_text_openAI'>
      <Link href="/">
        <Image src={logo} alt="logo" className="w-18 object-contain" />
      </Link>
      </div>
      <Link href="/create-post" className="font-inter font-medium bg-[#ffffff] text-black px-4 py-2 rounded-md">Generate Image</Link>
    </header>
  )
}

export default Nav