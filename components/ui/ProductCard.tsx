"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

interface ProductCardProps {
    name: string;
    tagline: string;
    tags: string[];
    votes: number;
    logoColor?: string;
}

export default function ProductCard({
    name,
    tagline,
    tags,
    votes,
    logoColor = "bg-primary-accent",
}: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className="group h-full bg-card-bg border-input/50 hover:border-primary-accent/50 transition-colors cursor-pointer overflow-hidden relative">
                <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div
                            className={`w-12 h-12 rounded-lg ${logoColor} flex items-center justify-center text-white font-bold text-xl`}
                        >
                            {name.charAt(0)}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8 gap-1.5 border-input/50 group-hover:border-primary-accent/30 bg-transparent text-secondary-text hover:text-primary-accent"
                        >
                            <ArrowUp className="w-4 h-4" />
                            <span>{votes}</span>
                        </Button>
                    </div>

                    <div className="space-y-2 mb-6">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-accent transition-colors">
                            {name}
                        </h3>
                        <p className="text-secondary-text text-sm line-clamp-2">
                            {tagline}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-primary-bg text-secondary-text hover:bg-input border border-input/30"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
