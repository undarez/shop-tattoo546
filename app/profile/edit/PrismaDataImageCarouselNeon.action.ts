// actions.ts

import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const PrismaDataFetchImageCarousel = async (setImages: (images: string[]) => void) => {
    

   try {
      const tattooImages = await prisma.tattooImage.findMany({
         select: {
            imageUrl: true,
         },
      });
      setImages(tattooImages.map((image) => image.imageUrl));
   } catch (error) {
      console.error('Erreur lors de la récupération des images depuis la base de données:', error);
   }
};
