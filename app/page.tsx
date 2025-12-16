import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedToday from "@/components/sections/FeaturedToday";
import RecentlyLaunched from "@/components/sections/RecentlyLaunched";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedToday />
        <RecentlyLaunched />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
