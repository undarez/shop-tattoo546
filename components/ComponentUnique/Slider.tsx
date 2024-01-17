// Slider.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import {
   ChevronLeft,
   ChevronRight,
   FileSymlink,
   ImageDown,
   X,
} from 'lucide-react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { UploadButton, useUploadThing } from '@/lib/uploadthing'
import { authOptions } from '@/lib/auth'
import { isBase64Image } from '@/lib/utils'
import {
   Form,
   FormField,
   FormItem,
   FormControl,
   FormLabel,
   FormMessage,
} from '../ui/form'
import ModalAddImage from './ModalAddImage'
import ModalAddImage2 from './ModalAddImage2'
import UploadForm from './UploaderForm'
import { PrismaDataFetchImageCarousel } from '@/app/profile/edit/PrismaDataImageCarouselNeon.action'


const imageTattous = [
   '546.jpg',
   'acceuil2546.jpg',
   'debz546.jpg',
   'entrée546.jpg',
   'fleur546.jpg',
   'oiseau546.jpg',
   'tattooMangaColor.jpg',
]

const Slider = () => {
   const [images, setImages] = useState<string[]>(imageTattous)
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedImageIndex, setSelectedImageIndex] = useState(0)
   const [isAddImageModalOpen, setIsAddImageModalOpen] = useState(false)
   const [selectedImageFile, setSelectedImageFile] = useState<string[]>([])
   const fileInputRef = useRef<HTMLInputElement>(null)

   const form = useForm()

   const openModal = (index: number) => {
      setSelectedImageIndex(index)
      setIsModalOpen(true)
   }

   const closeModal = () => {
      setIsModalOpen(false)
      setIsAddImageModalOpen(false)
   }

   const handleNextImage = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length)
   }

   const handlePreviousImage = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setSelectedImageIndex(
         (prevIndex) => (prevIndex - 1 + images.length) % images.length
      )
   }

   useEffect(()=> {
      PrismaDataFetchImageCarousel(setImages)
   }, [])

   //Fonction PrismaDataFetchImageCarousel 
   //recupere les images de neon grace a prisma pour les ajouter dans le carousel

   // const PrismaDataFetchImageCarousel = async () => {
   //    try {
   //       const tattooImages = await prisma.tattooImage.findMany({
   //          select: {
   //             imageUrl: true,
   //          },
   //       });
   //       setImages(tattooImages.map((image) => image.imageUrl));
   //    } catch (error) {
   //       console.error('Erreur lors de la récupération des images depuis la base de données:', error);
   //    }
   // };

   // // Utilisez useEffect pour appeler la fonction après le rendu initial
   // useEffect(() => {
   //    PrismaDataFetchImageCarousel();
   // }, []); // Le tableau vide des dépendances signifie que cela ne dépend d'aucun état, ce qui le rend équivalent à componentDidMount

   return (
      <div>
         {/* Votre carousel existant */}
         <Carousel className="w-full max-w-sm">
            <CarouselContent>
               {images.map((image, index) => (
                  <CarouselItem
                     key={index}
                     className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                     <div className="p-1" onClick={() => openModal(index)}>
                        <Card>
                           <CardContent className="flex aspect-square items-center justify-center p-6">
                              <Image
                                 className="object-cover rounded-lg cursor-pointer"
                                 src={`/assets/${image}`}
                                 alt={`Tattoo image ${index + 1}`}
                                 width={200}
                                 height={200}
                              />
                           </CardContent>
                        </Card>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>

         {/* Modale */}
         {isModalOpen && (
            <div
               className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
               onClick={closeModal}
            >
               <div
                  className="modal-content relative flex justify-center items-center"
                  onClick={(event) => event.stopPropagation()}
               >
                  <button
                     onClick={handlePreviousImage}
                     className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  >
                     <ChevronLeft className="text-green-300 w-8 h-auto bg-white rounded-md active:text-pink-600 " />
                  </button>
                  <button
                     onClick={handleNextImage}
                     className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                     <ChevronRight className="text-green-300 w-8 h-auto bg-white rounded-md active:text-pink-600 " />
                  </button>
                  <button
                     onClick={closeModal}
                     className="absolute top-4 right-4"
                  >
                     <X className="text-red-500 w-6 h-auto bg-white rounded-md active:bg-black active:text-green-300" />
                  </button>
                  <Image
                     className="object-cover h-1/2 w-1/2 bg-background rounded-md"
                     src={`/assets/${imageTattous[selectedImageIndex]}`}
                     alt="Full-size Image"
                     width={800}
                     height={800}
                  />
               </div>
            </div>
         )}
         {/* Modale pour rajouter un button qui va demander pour rajouter des images */}
         {isAddImageModalOpen && (
            <div
               className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
               onClick={closeModal}
            >
               <ModalAddImage2 />
            </div>
         )}

         <div className="container w-full h-auto m-auto flex justify-center items-center py-5">
            <Button
               type="button"
               onClick={(event) => {
                  event.stopPropagation()
                  setIsAddImageModalOpen(true)
               }}
            >
               <ImageDown className="" />
            </Button>
         </div>
      </div>
   )
}

export default Slider
