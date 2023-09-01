




"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import handleSubmitPOst from "../actions/Formactions";

const formSchema = z.object({
    title: z.string().nonempty({
      message: "Title is required.",
    }),
    description: z.string().nonempty({
      message: "Description is required.",
    }),
    year: z.number().min(1900, {
      message: "Year must be greater than or equal to 1900.",
    }),
    rating: z.number().min(0, {
      message: "Rating must be a positive number.",
    }),
    directorId: z.string().nonempty({
      message: "Director ID is required.",
    }),
  });
  

const ValidPostForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          description: "",
          year: 0,
          rating: 0,
          directorId: "",
        },
      });
  return (
    <>
         <Form {...form}>
          <form action={
        async(FormData)=>{
            form.reset();
            await handleSubmitPOst(FormData);

        }
          } className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>TITLE</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <FormControl>
                    <Input placeholder="Year" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input placeholder="Rating" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="directorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DirectorId</FormLabel>
                  <FormControl>
                    <Input placeholder="DirectorId" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button  type="submit">Submit</Button>
          </form>
        </Form>
      
    </>
  )
}

export default ValidPostForm
