import { getAuthSession } from '@/lib/auth'
import { getUserProfile } from '@/src/themes/query/user.query'
import React from 'react'
import Profile from '../users/[userId]/Profile'
import { Button, buttonVariants } from '@/components/ui/button'

import { notFound } from 'next/navigation'
import Link from 'next/link'

const page = async () => {
  const session = await getAuthSession()
  if(! session?.user.id) {
    notFound()
  }
  const user = await getUserProfile(session.user.id)

  if(!user) {
    notFound()
  }

  return (
    <div>
        <Profile user={user}> 
        <form>

        <Link className={buttonVariants({
          variant:'outline'
        })} href="/profile/edit" >
            edit Profile
        </Link>
        </form>
        </Profile>
        
    </div>
  )
}

export default page
