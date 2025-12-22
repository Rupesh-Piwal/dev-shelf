// TODO: write get featuredProducts function to fetch cards

import { db } from "@/app/db";
import { products } from "@/app/db/schema";
import { desc } from "drizzle-orm";

// TODO: write get allProducts function to fetch cards

export const getAllProducts = async () => {
  const productData = await db
    .select()
    .from(products)
    .orderBy(desc(products.voteCount));
  return productData;
};
