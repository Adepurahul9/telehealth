"use client";
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const menuOptions=[
    {
        id: 1,
        name: 'Home',
        path: '/home'
    },
        {
        id: 2,
        name: 'History',
        path: '/history'
    },
        {
        id: 3,
        name: 'Pricing',
        path: '/pricing'
    },
        {
        id: 4,
        name: 'Profile',
        path: '/profile'
    },
]

function AppHeader() {
  return (
    <div className='flex items-center justify-between p-4 shadow px-10 md:px-20 lg:px-40 lx:px-60 ' >
      <Image src={'logo.svg'} alt='logo' width={180} height={90} />
      <div className='flex gap-5 items-center' >
{menuOptions.map((option) => (
  <Link key={option.id} href={option.path}>
    <h2 className='hover:font-bold transition-all duration-300 '>
      {option.name}
    </h2>
  </Link>
))}
      </div>
      <UserButton />
    </div>
  )
} 



export default AppHeader
