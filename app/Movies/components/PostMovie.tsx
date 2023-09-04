

import * as z from "zod";

import ValidPostForm from "./ValidPostForm";



const PostMovie = () => {



  return (
    <div className=" flex flex-col min-w-[320px] max-w-[800px] justify-center w-full z-10 ">
      <div className="  ">
        <ValidPostForm/>
       
      </div>

    </div>
  );
};

export default PostMovie;
