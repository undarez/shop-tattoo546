import { getAuthSession } from '@/lib/auth'
import React from 'react'
import Image from 'next/image'
import UserProfil from './themes/auth/UserProfile'
import LoginButton from './themes/auth/LogginButton'
import { ThemeToggle } from './themes/ThemeToggle'
import { Button } from '@/components/ui/button'

const Header = async () => {

  const session = await getAuthSession()
  return (
    <header className="border-b border-b-accent top-0 z-20 py-12 bg-background w-full">
      <div className="container flex items-center justify-center p-5 max-w-lg m-auto gap-1">
    
      <Image
      className='w-22 flex items-start  m-auto rounded-full shadow-xl shadow-black'
      src={"/assets/logo_546.jpg"}
      width={200}
      height={200}
      alt="acceuil"
      />

      {session?.user ? <UserProfil/> : <LoginButton/>}
      <ThemeToggle/>
      </div>
    </header>
  )
}

export default Header
