



"use server";

import { prismadb } from "@/prisma/client";

import { Movie, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";


const handleSubmitPOst = async(formData: FormData) => {
    
    // Handle form submission here, e.g., send a POST request to your API
    // get values from formData
  
    const title= formData.get("title");
    const description= formData.get("description");
    const year= Number(formData.get("year"));
    const rating= Number(formData.get("rating"));
    const directorId= formData.get("directorId");
    

    console.log(title, description, year, rating, directorId);
    await prismadb.movie.create({
        data: {
            title: title as string,
            description: description as string,
            year:  year as unknown as number,
            rating: rating as unknown as number,
            directorId: directorId as string,
            },
        });

        revalidatePath("/movies");
  };

  export default handleSubmitPOst
  
