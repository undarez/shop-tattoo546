// Modification du fichier ProfileForm2.tsx
"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useZodForm
} from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import React from 'react'
import { z } from "zod"
import { UserEdit } from '@/src/themes/query/user.query'
import { Save } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Création d'un schéma de formulaire avec une regex
const FormSchema = z.object({
    name: z.string().min(1).max(50),
    username: z.string().min(1).max(50),
    link: z.string().max(50)
        .regex(
            /^(https?:\/\/)?([\w-]+\.)?\w{0,6}(\/[\w \.-]*)*\/?(\?\w+=\w+)?$/,
            {
                message: 'Please enter a valid domain',
            }
        ),
})

export type ProfileFormType = z.infer<typeof FormSchema>

type ProfileFormProps = {
    user: UserEdit
    // onSubmit sert à la soumission du formulaire
    onSubmit: (values: { name: string; username: string; link: string }) => Promise<void | string>
}

export const ProfileForm : React.FC<ProfileFormProps> =({ onSubmit, user }) => {
    const form = useZodForm({
        schema: FormSchema,
        defaultValues: {
            name: user.name ?? '',
            username: user.username,
            link: user.link ?? '',
        },
    })

    const router = useRouter()

    return (<div className="flex container justify-center w-full h-auto g-3">

        <Card className="shadow-lg shadow-cyan-300 ">
            <CardHeader>
                <CardTitle> Votre Profil </CardTitle>
                <CardDescription>Afin d`avoir plus de sécurité nous demandons de bien vouloir remplir les champs suivant</CardDescription>
            </CardHeader>
            <CardContent>
        <Form
            className="space-y-4"
            
            form={form}
            onSubmit={async (values) => {
                const url = await onSubmit(values)
                
                if (url) {
                    router.push(url)
                    router.refresh()
                }
            }}
            >
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Zuck" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="username" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Link</FormLabel>
                        <FormControl>
                            <Input placeholder="email@.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

            <Button type="submit"><Save className='active:bg-transparent active:text-pink-300' /></Button>
        </Form>
                </CardContent>
                </Card>
                </div>
    )
}
