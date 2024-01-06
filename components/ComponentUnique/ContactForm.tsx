import React, { useEffect } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
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

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      recipientEmail: 'fortuna77320@gmail.com', // Laissez le champ du destinataire initialisé à une chaîne vide
    },
  });

  useEffect(() => {
    // Mettre à jour la valeur du champ du destinataire au montage avec process.env.EMAIL_SUBJECT
    const defaultRecipientEmail = process.env.EMAIL_SUBJECT || '';
    if (!form.getValues('recipientEmail')) {
      form.setValue('recipientEmail', defaultRecipientEmail);
    }
  }, [form]);

  const handleSendEmail = () => {
    const { name, email, message, recipientEmail } = form.getValues();
  
    // Construire l'URL mailto avec les champs pré-remplis
    const mailtoLink = `mailto:${recipientEmail}?subject=Nouveau%20message%20de%20contact&body=Nom:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}&to=${email}`;
  
    // Ouvrir le client de messagerie de l'utilisateur
    const mailtoWindow = window.open(mailtoLink, '_blank');
  
    // Vérifier si l'ouverture de la fenêtre a réussi
    if (mailtoWindow) {
      // Focus sur la fenêtre pour s'assurer que l'utilisateur la voit
      mailtoWindow.focus();
    } else {
      // Si l'ouverture de la fenêtre a échoué, rediriger l'utilisateur vers le lien mailto
      window.location.href = mailtoLink;
    }
  };
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Champ pour le nom */}
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

        {/* Bouton d'envoi du formulaire avec le lien mailto */}
        <Button type="button" onClick={handleSendEmail}>
          Envoyer
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
