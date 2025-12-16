"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden">
            {/* Background Gradient/Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-accent/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto space-y-6"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                    Discover & Showcase <br />
                    <span className="text-primary-accent">Developer-Built</span> Products
                </h1>

                <p className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto leading-relaxed">
                    Submit your projects, get community feedback, and explore curated
                    developer tools built by people like you.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Button size="lg" className="h-12 px-8 text-base">
                        Share Your Project
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-12 px-8 text-base border-input text-secondary-text hover:text-white"
                    >
                        Explore Projects
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
