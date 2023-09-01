



import { prismadb } from "@/prisma/client";
import { revalidatePath } from "next/cache";
import handleSubmit from "../actions/Formactions";
import { Button } from "@/components/ui/button";

import PostForm from "./PostForm";

const ServerPost = async () => {
  const data = await prismadb.movie.findMany({});
 


  
  return (
    <div className="  w-full mx-auto p-4 ">
      <div className=" flex gap-10 mx-10 flex-col md:flex-row ">
        <PostForm/>
       
        <div className="mt-5 gap-8 grid lg:grid-cols-4 md:grid-cols-2  w-full place-content-center">
          

          {data.map((movie) => (
            <div
              key={movie.id}
              className="bg-primary-foreground p-4 rounded-lg shadow-md flex flex-col gap-2"
            >
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-gray-700">{movie.description}</p>
              <p className="text-gray-700">Year: {movie.year}</p>
              <p className="text-gray-700">Rating: {movie.rating}</p>
              <p className="text-gray-700 break-words underline ">Director ID: {movie.directorId}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerPost;
