import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const Portrait_Guillaume = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto p-5">
      <Card className="flex flex-col md:flex-row w-full h-auto p-2">
        <CardHeader className="md:border-r-4 md:border-b-0 border-indigo-500">
          <CardTitle className="border-l-2 border-indigo-500 hover:text-pink-600">Portrait de Guillaume</CardTitle>
          <CardDescription>Presentation de Guillaume 546 Tattoo</CardDescription>
        </CardHeader>
        <CardContent className="flex w-full flex-col md:flex-row  p-10 m-auto justify-center items-center">
          <div className="flex flex-col items-center justify-center rounded-lg  ">
            <Image
              src="/assets/guillaume.jpg"
              alt="guillaume le tatoueur"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <p className="font-weight text-justify p-4 w-full md:w-1/2 lg:w-2/3 text-sm md:text-base lg:text-md xl:text-lg 2xl:text-lg">
              Guillaume Rabozzi, tatoueur et propriétaire du salon de tatouage 546 Shop à Villeneuve Saint Germain depuis
              2019 : Guillaume Rabozzi est un tatoueur passionné qui opère depuis son salon, le 546 Shop. Installé à
              Villeneuve Saint Germain depuis 2019, il offre à sa clientèle une expérience unique dans le domaine du
              tatouage. Spécialisé dans la réalisation de croquis et de tatouages personnalisés, Guillaume Rabozzi met en
              œuvre son talent artistique pour créer des œuvres uniques et significatives pour ses clients. En plus de son
              expertise en tatouage, Guillaume Rabozzi propose également des services de détatouage au laser YAG. Cela
              démontre son engagement envers la satisfaction et le bien-être de ses clients, offrant une solution pour
              ceux qui souhaitent enlever ou modifier des tatouages existants. Son salon, le 546 Shop, est un espace dédié
              à l`expression artistique à travers le tatouage. Guillaume Rabozzi met l`accent sur la sécurité et l`hygiène,
              en utilisant un matériel stérile à usage unique pour chaque client. Sa philosophie consiste à créer une
              expérience de tatouage personnalisée, où chaque projet est pensé de manière unique et adapté aux souhaits de
              ses clients.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portrait_Guillaume;
