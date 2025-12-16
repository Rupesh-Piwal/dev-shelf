import { Button } from "../ui/button";

export default function CTASection() {
    return (
        <section className="py-24 px-6 text-center">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto rounded-3xl bg-secondary/20 p-12 border border-input/30 relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/5 rounded-full blur-[80px] -z-10" />

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Built something cool? <br className="hidden md:block" />
                        Put it on DevShelf.
                    </h2>
                    <p className="text-secondary-text text-lg mb-8 max-w-xl mx-auto">
                        Join thousands of developers sharing their work, getting feedback, and
                        growing their user base.
                    </p>
                    <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary-accent/20">
                        Submit Your Product
                    </Button>
                </div>
            </div>
        </section>
    );
}
