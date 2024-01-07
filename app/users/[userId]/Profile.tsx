// Import necessary components and styles
'use client'
import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
   CardDescription,
   CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PencilLine } from 'lucide-react'
import { UserProfile } from '@/src/themes/query/user.query'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Image from 'next/image'


// Helper function to remove 'http://' from the URL
const removeHttp = (url: string) => {
   return url.replace(/(^\w+:|^)\/\//, '')
}

// Profile component
const Profile = ({ user }: PropsWithChildren<{ user: UserProfile }>) => {
   return (
      <div className="py-10">
         <Card className="container w-1/2 h-auto gap-1 py-5">
         
   
            <CardHeader >
               <div className="flex   gap-2 items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                     <h3 className="text-2xl font-bold">{user.name}</h3>
                     <p className="font-medium text-lg underline decoration-cyan-300 " >{user.username}</p>
                  </div>
                  <Avatar>
                     {user.image ? (
                        <AvatarImage
                        className="h-auto w-20 rounded-full shadow-md shadow-cyan-500 "
                        src={user.image}
                        alt={user.username}
                        />
                        ) : null}
                     <AvatarFallback>
                        {user.username.slice(0, 2).toUpperCase()}
                     </AvatarFallback>
                  </Avatar>
               </div>
            </CardHeader>

            <CardContent>
               {/* Additional content can be added here if needed */}
               
            </CardContent>

            

            <CardFooter>
               <Link href="/profile/edit">
                  <div className="flex gap-2 items-center w-full">
                     <Button size="icon" variant="ghost">
                        <PencilLine size={20} />
                     </Button>
                  </div>
               </Link>
            </CardFooter>
         </Card>
      </div>
   )
}

export default Profile
