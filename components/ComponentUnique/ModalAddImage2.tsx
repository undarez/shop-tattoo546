'use client'
import { isBase64Image } from '@/lib/utils'
import {
   Form,
   FormField,
   FormItem,
   FormControl,
   FormLabel,
   FormMessage,
   useZodForm,
} from '../ui/form'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
import React, { useState } from 'react'
import { UploadButton, useUploadThing } from '@/lib/uploadthing'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
// import { Console } from 'console'

export const modalImageSchema = z.object({
   imageUrl: z.string(),
})

type modalimageProps = z.infer<typeof modalImageSchema>

interface ModalProps {
   // form: ReturnType<typeof useZodForm>
   // onSubmit: SubmitHandler<modalimageProps>
}

const ModalAddImage2: React.FC<ModalProps> = () => {
   const [selectedImageFile, setSelectedImageFile] = useState<File[]>([])
   const { startUpload } = useUploadThing('imageUploader')
   const form = useZodForm({
      schema: modalImageSchema,
      defaultValues: {
         imageUrl: '',
      },
   })

   const handleImage = (
      e: React.ChangeEvent<HTMLInputElement>,
      fieldChange: (value: string) => void
   ) => {
      e.preventDefault()

      const fileReader = new FileReader()

      if (e.target.files && e.target.files.length > 0) {
         const file = e.target.files[0]

         setSelectedImageFile(Array.from(e.target.files))

         if (!file.type.includes('image')) return

         fileReader.onload = async (event) => {
            const imageDataUrl = event.target?.result?.toString() || ''

            fieldChange(imageDataUrl)
         }

         fileReader.readAsDataURL(file)
      }
   }

   const handleAddPictures: SubmitHandler<modalimageProps> = async (values) => {
      const blob = values.imageUrl
      const hasImageChanged = isBase64Image(blob)

      if (hasImageChanged) {
         const imgRes = await startUpload(selectedImageFile)
         if (imgRes && imgRes[0].url) {
            values.imageUrl = imgRes[0].url
         }
      }

      // Appeler la fonction de soumission passée en prop
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(handleAddPictures)}>
            <div className="space-y-8">
               <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Sélectionner une image</FormLabel>
                        <FormControl>
                           <UploadButton
                              endpoint="imageUploader"
                              onClientUploadComplete={(file) => {
                                 console.log('file', file)
                              }}
                           />
                           {/* <Input
                           type="file"
                           accept="image/*"
                           placeholder="Sélectionner une image"
                           onChange={(e) => handleImage(e, field.onChange)}
                        /> */}
                        </FormControl>
                     </FormItem>
                  )}
               />
               {/* <Button type="submit"> Ajouter l'image</Button> */}
            </div>
         </form>
      </Form>
   )
}

export default ModalAddImage2
