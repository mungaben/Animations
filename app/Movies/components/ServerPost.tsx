
import { prismadb } from "@/prisma/client";
import { revalidatePath } from "next/cache";

const ServerPost = async() => {
 const data= await prismadb.movie.findMany({})

  const handleSubmit = async(formData: FormData) => {
    "use server"
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
  return (
    <div className="max-w-md mx-auto">
        <div className=" flex gap-10 ">

        
      <form action={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-1 p-2 w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700"
          >
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            className="mt-1 p-2 w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="number"
            step="0.1"
            id="rating"
            name="rating"
            className="mt-1 p-2 w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="directorId"
            className="block text-sm font-medium text-gray-700"
          >
            Director ID
          </label>
          <input
            type="text"
            id="directorId"
            name="directorId"
            className="mt-1 p-2 w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <div className=" mt-5 gap-8">
        <h1>Server</h1>

        {data.map((movie) => (
            <div key={movie.id} className=" bg-slate-700 p-4 ">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>{movie.year}</p>
                <p>{movie.rating}</p>
                <p>{movie.directorId}</p>


            </div>
        ))}

      </div>
      </div>
    </div>
  );
};

export default ServerPost;
