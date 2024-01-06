import { getAuthSession } from '@/lib/auth'
import { getUserProfile } from '@/src/themes/query/user.query' 
import React from 'react'
import Profile from './Profile'
import { notFound, redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'

import { Metadata } from 'next'
import { User } from '@prisma/client';  // Ajout de l'import du modèle User

export const generateMetadata = async ({params}: PageParams): Promise<Metadata>  => {

    const user = await getUserProfile(params.userId)

    if(!user){
        throw new Error("User not found")
    }
    return({
        title: `${user.name} (${user.username})`
    })
}

type PageParams = {
    params: {
        userId: string
    }
}

const UserPage = async ({params,}: PageParams)=>{
    
    const session = await getAuthSession()
    const user = await getUserProfile(params.userId)

    if(!user) {
        notFound()
    }

    const isCurrentUser = params.userId === session?.user.id
    if (!isCurrentUser){
        redirect("/profile")
    }

    // Utilisation de Prisma pour effectuer des opérations sur la base de données
    const updateUser = async (updatedFields: Partial<User>) => {
        // Exemple: Mettez à jour le nom de l'utilisateur
        await prisma.user.update({
            where: { id: params.userId },
            data: updatedFields,
        });
    };

    return (
        <div>
            <Profile user={user}> 
                <form>
                    {/* Ajoutez les champs de formulaire nécessaires */}
                    <label>
                        New Name:
                        <input
                            type="text"
                            value={""}
                            onChange={(e) => {
                                // Mettez à jour la valeur du champ du formulaire
                                // (Vous devrez probablement utiliser un état local pour cela)
                            }}
                        />
                    </label>
                    <Button onClick={() => {
                        // Soumettre le formulaire et appeler la fonction pour mettre à jour l'utilisateur
                        // Exemple: updateUser({ name: /* Nouveau nom */ });
                    }}>
                        Save
                    </Button>
                </form>
            </Profile>
        </div>
    );
}

export default UserPage
