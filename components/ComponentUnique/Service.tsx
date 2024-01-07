'use client'
import React from 'react'
import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from '@/components/ui/resizable'
import Image from 'next/image'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
const Service = () => {
   return (
      <div className="container flex justify-between w-3/5 h-auto gap-3 py-20 ">
         <Card className="max-w-[300px]">
            <CardHeader>
               <CardTitle className="underline text-lg  decoration-cyan-500">
                  Piercing
               </CardTitle>
               <CardDescription className="font-medium text-xs text-left indent-2.5 ">
                  Explorez notre expertise exceptionnelle en piercing, avec des
                  tarifs flexibles selon la zone de votre choix. Exprimez votre
                  individualité en toute confiance.
               </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
               <Image
                  className=" rounded-lg shadow-lg shadow-cyan-500 "
                  src="/assets/percingOreille.jpg"
                  alt="outil pour tatouage"
                  width={200}
                  height={200}
               />
            </CardContent>
         </Card>
         <Card className="max-w-[300px]">
            <CardHeader>
               <CardTitle className="underline text-lg  decoration-cyan-500">
                  Tatouage
               </CardTitle>
               <CardDescription className="font-medium text-xs text-left indent-2.5 ">
                  Tattoo d`exception: notre art unique souligne votre style.
                  Tarifs variables selon la taille. Exprimez votre créativité en
                  toute confiance.
               </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
               <Image
                  className=" rounded-lg shadow-lg shadow-cyan-500"
                  src="/assets/outilTattoo.jpg"
                  alt="outil pour tatouage"
                  width={200}
                  height={200}
               />
            </CardContent>
         </Card>
         <Card className="max-w-[300px]">
            <CardHeader>
               <CardTitle className="underline text-lg  decoration-cyan-500">
                  Laser Yag
               </CardTitle>
               <CardDescription className="font-medium text-xs text-left indent-2.5 ">
                  Tatouages indélébiles? Notre laser YAG avancé offre des
                  résultats exceptionnels. Libérez-vous de l`encre du passé,
                  révélez une peau renouvelée et confiante.
               </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-10">
               <Image
                  className=" rounded-lg shadow-lg shadow-cyan-500 "
                  src="/assets/laserYag.png"
                  alt="outil pour tatouage"
                  width={300}
                  height={200}
               />
            </CardContent>
         </Card>
         
      </div>
   )
}

export default Service
