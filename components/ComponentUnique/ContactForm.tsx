import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schemaForm = z.object({
  name: z.string().min(2).max(25),
  email: z.string().email(),
  message: z.string().min(5).max(500),
  recipientEmail: z.string().email(),
});

type FormValues = z.infer<typeof schemaForm>;

interface ContactFormProps {
  onSubmit: SubmitHandler<FormValues>;
}

const ContactForm2: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const form = useZodForm({
    schema: schemaForm,
    defaultValues: {
      name: '',
      email: '',
      message: '',
      recipientEmail: 'fortuna77320@gmail.com',
    },
  });

  const handleSendEmail = () => {
    const { name, email, message, recipientEmail } = form.getValues();
    const mailtoLink = `mailto:${recipientEmail}?subject=Nouveau%20message%20de%20contact&body=Nom:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}&to=${email}`;
    const mailtoWindow = window.open(mailtoLink, '_blank');

    if (mailtoWindow) {
      mailtoWindow.focus();
    } else {
      window.location.href = mailtoLink;
    }
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <div className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Votre nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         {/* Champ pour l'email */}
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Votre email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Champ pour le destinataire (pré-rempli avec l'adresse e-mail du tatoueur) */}
        <FormField
          control={form.control}
          name="recipientEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email du destinataire</FormLabel>
              <FormControl>
                <Input type="email" placeholder="fortuna77320@gmail.com" {...field} readOnly />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Champ pour le message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea placeholder="Votre message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        {/* Ajoutez d'autres champs de formulaire de la même manière */}

        <Button type="button" onClick={handleSendEmail}>
          Envoyer
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm2;
