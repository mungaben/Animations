import React from "react";
import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import BidsInput from "./components/BidsInput";
import Products from "./components/Products";
import { ITriggerPayloadOptions } from "@novu/node/build/main/lib/events/events.interface";
import { Novu } from "@novu/node";

import NovuComp from "./components/Novux";
const page = async () => {
  const login = cookies().get("login");
  const Novu_ID = process.env.NOVU_API_KEY;
  const novu = new Novu(Novu_ID!);
  const addBid = async (id: number, bid: number) => {
    "use server";
    // @ts-ignore
    const login = cookies().get("login");
    await sql`UPDATE bids SET total_bids = total_bids + ${bid} WHERE id = ${id}`;
    const { rows } = await sql`SELECT * FROM bids WHERE id = ${id}`;

    await novu.trigger("host-bid", {
      to: [
        {
          subscriberId: rows[0].owner,
        },
      ],
      payload: {
        name: login?.value!,
        bid: bid,
      },
    });

    await novu.topics.addSubscribers(`bid-${id}`, {
      subscribers: [login?.value!],
    });

    await novu.trigger("new-bid-in-the-system", {
      to: [{ type: "Topic", topicKey: `bid-${id}` }],
      payload: {
        name: login?.value!,
        bid: bid,
      },
      actor: { subscriberId: login?.value! },
    } as ITriggerPayloadOptions);
    revalidatePath("/");
  };

  const addProduct = async (product: string) => {
    "use server";
    const login = cookies().get("login");
    const { rows } =
      await sql` INSERT INTO bids (name,owner,total_bids) VALUES(${product},${login?.value!},0) RETURNING id`;
    await novu.topics.create({
      key: `bid-${rows[0].id}`,
      name: "People inside of a bid",
    });
    revalidatePath("/");
  };

  const { rows } = await sql`SELECT * FROM bids ORDER BY id DESC`;
  return (
    <div className="text-black container mx-auto p-4 border-l border-white border-r min-h-[100vh]">
      <div className="flex">
        <h1 className="flex-1 text-3xl font-bold mb-4 ">
          Product Listing ({login?.value!})
        </h1>
        <div>
            <NovuComp user={login?.value!} />
        </div>
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
