'use client'
import { isBase64Image } from '@/lib/utils'
import {
   Form,
   FormField,
   FormItem,
   FormControl,
   FormLabel,
   FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import React, { useState } from 'react'
import { useUploadThing } from '@/lib/uploadthing'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

// interface ModalAddImageProps {
//    form: ReturnType<typeof useForm>;
//    onSubmit: SubmitHandler<ModalAddImageValues>; // Utilisez le type correct pour votre formulaire
// }

const modalAddImageSchema = z.object({
   imageUrl: z.string(),
})

type ModalAddImageValues = z.infer<typeof modalAddImageSchema>

const ModalAddImage: React.FC<ModalAddImageProps> = ({ form, onSubmit }) => {
   const [selectedImageFile, setSelectedImageFile] = useState<File[]>([])
   const { startUpload } = useUploadThing('imageUploader')

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

   const handleAddPictures: SubmitHandler<ModalAddImageValues> = async (
      values
   ) => {
      const blob = values.imageUrl
      const hasImageChanged = isBase64Image(blob)

      if (hasImageChanged) {
         const imgRes = await startUpload(selectedImageFile)
         if (imgRes && imgRes[0].url) {
            values.imageUrl = imgRes[0].url
         }
      }

      // Appeler la fonction de soumission passée en prop
      onSubmit(values)
   }

   return (
      <Form
         {...form}
         onSubmit={form.handleSubmit(handleAddPictures)}
         className="space-y-8"
      >
         <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Sélectionner une image</FormLabel>
                  <FormControl>
                     <Input
                        type="file"
                        accept="image/*"
                        placeholder="Sélectionner une image"
                        onChange={(e) => handleImage(e, field.onChange)}
                     />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <Button type="submit">Ajouter l`image</Button>
      </Form>
   )
}

export default ModalAddImage
