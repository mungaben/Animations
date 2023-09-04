"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import handleSubmit from "../actions/Formactions";

const PostForm = () => {
  const formref = React.useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (FormData) => {
        formref.current?.reset();
        await handleSubmit(FormData);
      }}
      className=" w-full flex justify-center items-center flex-col"
    >
      <div className="mb-4 w-full">
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
          required
          className="mt-1 p-2 w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4 w-full">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="mt-1 p-2 w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4 w-full">
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
          required
          className="mt-1 p-2 w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4 w-full">
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
          required
          className="mt-1 p-2 w-full rounded-md border-gray-300"
        />
      </div>

      <div className="mt-6">
        <Button type="submit" className="">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
