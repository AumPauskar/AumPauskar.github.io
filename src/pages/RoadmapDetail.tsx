import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { roadmaps } from "@/data/roadmaps";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RoadmapDetail() {
    const { track } = useParams<{ track: string }>();
    const [expandedId, setExpandedId] = useState<string | null>(null);

    // If the track is not found, redirect to the main roadmap page
    // The type assertion is needed because useParams can return undefined, 
    // but we know 'roadmaps' keys are strings. 
    const currentRoadmap = track && roadmaps[track as keyof typeof roadmaps];

    if (!currentRoadmap) {
        return <Navigate to="/roadmap" replace />;
    }

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
                <Button variant="ghost" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link to="/roadmap" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Roadmaps
                    </Link>
                </Button>
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold capitalize">
                        {currentRoadmap.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {currentRoadmap.description}
                    </p>
                </div>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 md:hidden" />

                <div className="space-y-8">
                    {currentRoadmap.items.map((item, index) => {
                        const isEven = index % 2 === 0;
                        const isExpanded = expandedId === item.id;

                        return (
                            <div
                                key={item.id}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 items-start md:items-center group",
                                    isEven ? "md:flex-row-reverse text-right" : "text-left"
                                )}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10 -translate-x-1/2 mt-1 md:mt-0" />

                                {/* Content Card */}
                                <div
                                    className={cn(
                                        "ml-12 md:ml-0 md:w-[calc(50%-2rem)] transition-all duration-300 ease-in-out cursor-pointer",
                                        "rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md",
                                        isExpanded ? "ring-2 ring-primary" : ""
                                    )}
                                    // Expand on hover
                                    onMouseEnter={() => setExpandedId(item.id)}
                                    // Collapse on mouse leave
                                    onMouseLeave={() => setExpandedId(null)}
                                    // Toggle on click (essential for touch devices or if user clicks)
                                    onClick={() => toggleExpand(item.id)}
                                >
                                    <div className="p-6">
                                        <div className={cn(
                                            "flex items-center gap-4 mb-2",
                                            isEven ? "md:flex-row-reverse" : ""
                                        )}>
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-semibold tracking-tight">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="text-muted-foreground text-sm mb-0">
                                            {item.description}
                                        </p>

                                        <div
                                            className={cn(
                                                "grid overflow-hidden transition-all duration-300 ease-in-out",
                                                isExpanded ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                                            )}
                                        >
                                            <div className="min-h-0">
                                                <div className="h-px w-full bg-border mb-4" />
                                                <h4 className="font-medium mb-2 text-sm text-foreground/80">Key Topics:</h4>
                                                <ul className={cn(
                                                    "space-y-1 text-sm text-muted-foreground",
                                                    isEven ? "md:items-end" : "md:items-start",
                                                    "flex flex-col"
                                                )}>
                                                    {item.topics.map((topic) => (
                                                        <li key={topic} className="flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for the other side (desktop only) */}
                                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
