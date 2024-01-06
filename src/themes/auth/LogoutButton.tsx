"use client"

import { Button } from '@/components/ui/button'
import { Loader, LogIn, LogOut } from 'lucide-react'
import React, { useTransition } from 'react'
import {signIn, signOut} from "next-auth/react"
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import  Link from 'next/link'
const DropdownMenuItemLogout = () => {
 
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem onClick={()=>{
      startTransition(()=> {signOut()})
        
    }}>
      {isPending ?(
        <Loader className='mr-2 h-4 w-4'/>
      ) : (
        <Link href='/'>
        
        <LogOut className='mr-2 h-4 w-4'/> 
        </Link>
      )}
        LogOut
    </DropdownMenuItem>
  )
}

export default DropdownMenuItemLogout
