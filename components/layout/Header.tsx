"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-primary-bg/80 backdrop-blur-md border-input/50 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    DevShelf
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="#"
                        className="text-sm font-medium text-secondary-text hover:text-white transition-colors"
                    >
                        Explore
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium text-secondary-text hover:text-white transition-colors"
                    >
                        Submit
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium text-secondary-text hover:text-white transition-colors"
                    >
                        Featured
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="hidden md:block text-sm font-medium text-secondary-text hover:text-white transition-colors"
                    >
                        Login
                    </Link>
                    <Button size="sm">Sign up</Button>
                </div>
            </div>
        </header>
    );
}
