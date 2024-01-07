'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

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
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedImageIndex, setSelectedImageIndex] = useState(0)

   const openModal = (index: number) => {
      setSelectedImageIndex(index)
      setIsModalOpen(true)
   }

   const closeModal = () => {
      setIsModalOpen(false)
   }

   const handleNextImage = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setSelectedImageIndex(
         (prevIndex) => (prevIndex + 1) % imageTattous.length
      )
   }

   const handlePreviousImage = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setSelectedImageIndex(
         (prevIndex) =>
            (prevIndex - 1 + imageTattous.length) % imageTattous.length
      )
   }

   return (
      <div>
         {/* Votre carousel existant */}
         <Carousel className="w-full max-w-sm">
            <CarouselContent>
               {imageTattous.map((imageTattou, index) => (
                  <CarouselItem
                     key={index}
                     className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                     <div className="p-1" onClick={() => openModal(index)}>
                        <Card>
                           <CardContent className="flex aspect-square items-center justify-center p-6">
                              <Image
                                 className="object-cover rounded-lg cursor-pointer"
                                 src={`/assets/${imageTattou}`}
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
      </div>
   )
}

export default Slider
