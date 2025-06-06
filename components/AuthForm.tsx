"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import {DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn} from 'react-hook-form';
import { ZodType } from 'zod';
import { Button } from './ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel ,
    FormMessage,
    } from "@/components/ui/form";
import {Input} from "@/components/ui/input";
interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    type: 'SIGN_IN' | 'SIGN_UP';
    onSubmit: (data: T) => Promise<{success: boolean; error?: string}>;
}

const AuthForm = <T extends FieldValues>({type, schema, defaultValues, onSubmit}: Props<T>) => {
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit: SubmitHandler<T> = async (data) => { };

    return (
        <p>
            Mohammed is the best js dev
        </p>
        // <Form {...form}>
        //   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        //     <FormField
        //       control={form.control}
        //       name="username"
        //       render={({ field }) => (
        //         <FormItem>
        //           <FormLabel>Username</FormLabel>
        //           <FormControl>
        //             <Input placeholder="shadcn" {...field} />
        //           </FormControl>
        //           <FormDescription>
        //             This is your public display name.
        //           </FormDescription>
        //           <FormMessage />
        //         </FormItem>
        //       )}
        //     />
        //     <Button type="submit">Submit</Button>
        //   </form>
        // </Form>
      )
  };

export default AuthForm
