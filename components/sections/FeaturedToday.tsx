import ProductCard from "../ui/ProductCard";

const FEATURED_PRODUCTS = [
    {
        name: "Supabase",
        tagline: "The open source Firebase alternative.",
        tags: ["Database", "Backend", "Open Source"],
        votes: 842,
        logoColor: "bg-emerald-500",
    },
    {
        name: "Linear",
        tagline: "The issue tracking tool you'll actually enjoy using.",
        tags: ["Productivity", "SaaS", "Management"],
        votes: 721,
        logoColor: "bg-indigo-500",
    },
    {
        name: "Vercel",
        tagline: "Develop. Preview. Ship. For the best frontend teams.",
        tags: ["Hosting", "Frontend", "Cloud"],
        votes: 954,
        logoColor: "bg-black border border-white/20",
    },
];

export default function FeaturedToday() {
    return (
        <section className="py-20 px-6 container mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Featured Today</h2>
                <a href="#" className="text-primary-accent hover:underline text-sm">
                    View all featured
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURED_PRODUCTS.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    );
}
