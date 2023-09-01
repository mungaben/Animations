"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { prismadb } from "@/prisma/client";
import handleSubmit from "../actions/Formactions";
import ValidPostForm from "./ValidPostForm";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  year: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  rating: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  directorId: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PostMovie = () => {


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className=" flex flex-col min-w-[320px] max-w-[800px] justify-center w-full z-10 ">
      <div className="  ">
        <ValidPostForm/>
       
      </div>

    </div>
  );
};

export default PostMovie;
