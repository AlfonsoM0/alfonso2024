'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/ContactForm_lang';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import contactFormSchema from '@/schema/contactFormSchema';

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

export default function ContactForm() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      consult: '',
    },
  });

  function onSubmir(values: z.infer<typeof contactFormSchema>) {
    console.info(values);
    form.reset();
  }

  return (
    <div className="max-w-md m-auto">
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
                    <Input placeholder={txt.input_name} {...field} />
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
                    <Input placeholder={txt.input_email} {...field} />
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
                  <Input placeholder={txt.input_subject} {...field} />
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
                  <Textarea placeholder={txt.input_consult} {...field} />
                </FormControl>
                {/* <FormDescription>.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size={'fullWidth'} variant={'outline'}>
            {txt.button_send}
          </Button>
        </form>
      </Form>
    </div>
  );
}
