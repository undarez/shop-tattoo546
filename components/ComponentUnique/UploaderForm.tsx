'use client'

import React, { useState } from 'react'
import { Form, FormField } from '../ui/form'
import { useForm } from 'react-hook-form'
import { UploadButton, useUploadThing } from '@/lib/uploadthing'
import { isBase64Image } from '@/lib/utils'

const UploadForm = () => {
  const { startUpload } = useUploadThing('imageUploader')
  const [files, setFiles] = useState<File[]>([])

  const form = useForm({
    defaultValues: {
      imgUp: null
    }
  })

  const onSubmit = async (values: any) => {
    const blob = values.imgThread;

        const hasImageAdded = blob ? isBase64Image(blob) : false;
        if (hasImageAdded) {
            const imgRes = await startUpload(files);

            if (imgRes && imgRes[0].url) {
                values.imgThread = imgRes[0].url;
            }
        }

  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-5"
        >
          <FormField 
            name="imgUp" 
            control={form.control}
            render={({ field }) => (
              <UploadButton 
                endpoint='imageUploader'
                onClientUploadComplete={(files) => {
                  console.log('files', files);
                }}
                className='w-64 h-64 bg-slate-600'
              />
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default UploadForm