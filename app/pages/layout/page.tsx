"use client"
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/ComponentUnique/ContactForm';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

// Définissez le schéma de validation du formulaire
const schemaForm = z.object({
  name: z.string().min(2).max(25),
  email: z.string().email(),
  message: z.string().min(5).max(500)
});

// Définissez le type pour la fonction de soumission du formulaire
type FormValues = z.infer<typeof schemaForm>;

const Page = () => {
  // Fonction de soumission du formulaire
  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    // Faites quelque chose avec les données du formulaire
    console.log(data);
  };

  return (
    <div className="container max-w-full w-full flex items-center justify-center p-8 ">
      <Card>
        <CardHeader>
          <CardTitle>Formulaire de Contact</CardTitle>
          <CardDescription>Vous souhaitez nous contacter, veuillez remplir le formulaire pour toute demande.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Fournissez la fonction de soumission au composant ContactForm */}
          <ContactForm onSubmit={handleFormSubmit} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
