import React from 'react'
import { getUserEdit } from '@/src/themes/query/user.query'
import { Prisma } from '@prisma/client'
import { getAuthSession } from '@/lib/auth'
import { ProfileForm } from './ProfileForm'
import { editProfile } from './edit.profil.action'


const page = async () => {
    const user = await getUserEdit()
  return (
    <div className="h-full container items-center">
        <div className="bg-card rounded-md border border-border p-4 flex-1">
            <ProfileForm user={user} onSubmit={editProfile} />

        </div>
      
    </div>
  )
}

export default page
