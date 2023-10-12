import React from "react";
import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import BidsInput from "./components/BidsInput";
import Products from "./components/Products";
const page = async () => {
  const login = cookies().get("login");
  const addBid = async (id: number, bid: number) => {
    "use server";

    const login = cookies().get("login");
    await sql`UPDATE bids SET total_bids = total_bids + ${bid} WHERE id = ${id}`;
    revalidatePath("/");
  };

  const addProduct = async (product: string) => {
    "use server";
    const login = cookies().get("login");
    const { rows } =
      await sql` INSERT INTO bids (name,owner,total_bids) VALUES(${product},${login?.value!},0) RETURNING id`;

    revalidatePath("/");
  };

  const { rows } = await sql`SELECT * FROM bids ORDER BY id DESC`;
  return (
    <div className="text-black container mx-auto p-4 border-l border-white border-r min-h-[100vh]">
      <div className="flex">
        <h1 className="flex-1 text-3xl font-bold mb-4 ">
          Product Listing ({login?.value!})
        </h1>
      </div>
      <Products addProduct={addProduct} />
      <div className="grid grid-cols-3 gap-4 text-foreground">
        {rows.map((product) => (
          <div key={product.id} className="  border border-gray-300 p-4">
            <div className="text-lg mb-2">
              <strong>Product Name</strong>: {product.name}
            </div>
            <div className="text-lg mb-2">
              <strong>Owner</strong>: {product.owner}
            </div>
            <div className="text-lg">
              <strong>Current Bid</strong>: {product.total_bids}
            </div>
            <div className=" bg-red-700">
              <BidsInput addBid={addBid} id={product.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
