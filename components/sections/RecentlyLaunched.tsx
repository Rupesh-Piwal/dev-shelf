"use client";

import { motion } from "motion/react";
import ProductCard from "../ui/ProductCard";

const RECENT_PRODUCTS = [
  {
    name: "Resend",
    tagline: "Email for developers. The best API to reach humans.",
    tags: ["Email", "API", "DevTool"],
    votes: 210,
    logoColor: "bg-zinc-800",
  },
  {
    name: "PlanetScale",
    tagline: "The world's most advanced serverless MySQL platform.",
    tags: ["Database", "Serverless", "MySQL"],
    votes: 320,
    logoColor: "bg-gray-800",
  },
  {
    name: "Clerk",
    tagline: "Authentication and user management, built for the modern web.",
    tags: ["Auth", "Security", "SaaS"],
    votes: 180,
    logoColor: "bg-purple-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function RecentlyLaunched() {
  return (
    <section className="py-20 px-6 container mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Recently Launched</h2>
        <div className="hidden md:block h-px flex-1 bg-input/30 ml-8" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {RECENT_PRODUCTS.map((product) => (
          <motion.div key={product.name} variants={item}>
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
