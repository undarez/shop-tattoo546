"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';

const imageTattous = ['546.jpg', 'acceuil2546.jpg', 'debz546.jpg', 'entrée546.jpg', 'fleur546.jpg', 'oiseau546.jpg', 'tattooMangaColor.jpg'];

const Slider = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const openModal = (image: string) => {
      setSelectedImage(image);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    // Ajoutez un gestionnaire de clic pour fermer la modale lorsqu'on clique à l'extérieur de l'image
    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
      // Si l'élément cliqué est la modale elle-même (pas son contenu interne),
      // alors fermez la modale
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };
  
    return (
      <div>
        {/* Votre carousel existant */}
        <Carousel className="w-full max-w-sm">
          <CarouselContent>
            {imageTattous.map((imageTattou, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1" onClick={() => openModal(imageTattou)}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        className="object-cover rounded-lg"
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
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" onClick={handleModalClick}>
            <div className="modal-content">
              <Image
                className="object-cover h-auto w-full bg-background "
                src={`/assets/${selectedImage}`}
                alt="Full-size Image"
                width={800}
                height={800}
              />
              <button onClick={closeModal}>Fermer la modale</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Slider;
