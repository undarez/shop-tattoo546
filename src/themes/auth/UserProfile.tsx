import React from 'react'
import { getAuthSession } from '@/lib/auth'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import DropdownMenuItemLogout from './LogoutButton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Contact, User2 } from 'lucide-react'

const UserProfil = async () => {
   const session = await getAuthSession()
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
               {session?.user.name ?? ''}
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuItem asChild>
               <Link href="/profile">
                  {' '}
                  <User2 className="mr-2 h-4 w-4" /> profile
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
               <Link href="/pages/layout">
                  {' '}
                  <Contact className="mr-2 h-4 w-4" />
                  Contact
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItemLogout />
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

export default UserProfil
