'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/ContactForm_lang';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { contactFormSchemaEn, contactFormSchemaEs } from '@/schema/contactFormSchema';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { sendEmail } from '@/server/actions/sendEmail';
import formToEmail from './formToEmail';
import { Spinner } from '@nextui-org/react';

export default function ContactForm() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  const formSchema = appIsEnglish ? contactFormSchemaEn : contactFormSchemaEs;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      consult: '',
    },
  });

  async function onSubmir(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setIsSubmited(true);

    const infoForEmail = formToEmail(values);
    const emailIsOK = await sendEmail(infoForEmail);

    if (emailIsOK) {
      setIsError(false);
      form.reset();
    } else setIsError(true);

    setIsLoading(false);
  }

  if (isLoading)
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner size="lg" aria-label="Loading..." />
      </div>
    );
  else if (isSubmited && !isError)
    return (
      <div className="h-full flex justify-center items-center">
        <Button variant={'outline'} onClick={() => setIsSubmited(false)}>
          {txt.sendSuccess}
        </Button>
      </div>
    );

  return (
    <div className="max-w-md m-auto">
      <h1 className="text-shadow-main text-4xl">{txt.pageTitle}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmir)} className="space-y-8">
          <div className="flex flex-wrap justify-between">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mt-8 w-full sm:max-w-[220px]">
                  {/* <FormLabel>{txt.input_name}</FormLabel> */}
                  <FormControl>
                    <Input className='dark:caret-white' placeholder={txt.inputName} {...field} />
                  </FormControl>
                  {/* <FormDescription>.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-8 w-full sm:max-w-[220px]">
                  {/* <FormLabel>{txt.input_email}</FormLabel> */}
                  <FormControl>
                    <Input className='dark:caret-white' placeholder={txt.inputEmail} {...field} />
                  </FormControl>
                  {/* <FormDescription>.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>{txt.input_subject}</FormLabel> */}
                <FormControl>
                  <Input className='dark:caret-white' placeholder={txt.inputSubject} {...field} />
                </FormControl>
                {/* <FormDescription>.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="consult"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>{txt.input_consult}</FormLabel> */}
                <FormControl>
                  <Textarea className='dark:caret-white' placeholder={txt.inputConsult} {...field} />
                </FormControl>
                {/* <FormDescription>.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size={'fullWidth'} variant={'outline'}>
            {txt.buttonSend}
          </Button>

          {/* Emial sending error */}
          {isSubmited && isError ? (
            <p className="text-sm font-medium text-red-500 dark:text-yellow-400 text-center text-shadow shadow-white dark:shadow-black">
              {txt.sendError}
            </p>
          ) : null}
        </form>
      </Form>
    </div>
  );
}
