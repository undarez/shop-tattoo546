"use client"
import { buttonVariants } from '@/components/ui/button'
import clsx from 'clsx'
import { Facebook, Home, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
   return (
      <footer className="border-b border-b-accent top-0 z-20 py-12 bg-background w-full">
         <div className="container flex flex-1 gap-1 p-5  items-center justify-center m-auto ">
            <Link href="/" className={clsx(buttonVariants({variant:'ghost'}))}><Home/></Link>
            <Link href="/pages/layout" className={clsx(buttonVariants({variant:'ghost'}))}><Mail/></Link>
            <Link href="https://www.facebook.com/guillaume.rabozzi" className={clsx(buttonVariants({variant:'ghost'}))}><Facebook className='text-blue-600'/></Link>
            <Link href="https://www.instagram.com/546_tattoo/" className={clsx(buttonVariants({variant:'ghost'}))}><Instagram className='text-rose-400' /></Link>
         </div>
         <span className='text-sm font-bold px-10'>© 2024 SHOP546. Tous droits réservés.
</span>
      </footer>
   )
}

export default Footer
