"use client"

import { Button } from '@/components/ui/button'
import { Forklift, Loader, LogIn } from 'lucide-react'
import React, { useTransition } from 'react'
import {signIn} from "next-auth/react"

const LoginButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button className=' bg-[#00c66a] hover:bg-[#F76B15]' onClick={()=>{
      startTransition(()=> signIn())
        
    }}>
      {isPending ?(
        <Loader className='mr-2 h-4 w-4'/>
      ) : (

        <LogIn className='mr-2 h-4 w-4 text-[#ffffff] hover:text-[#080808]'/> 
      )}
       <Forklift className='text-[#ffffff] active:text-[#080808]'/>
    </Button>
  )
}

export default LoginButton