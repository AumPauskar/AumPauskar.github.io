import { useNavigate } from "react-router-dom";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { roadmaps } from "@/data/roadmaps";
import { BookOpen, Globe, Cpu, Cloud, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    "basic-software-engineering": BookOpen,
    "web-development": Globe,
    "iot": Cpu,
    "cloud": Cloud
};

export function RoadmapPage() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Choose Your Path
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Select a roadmap to start your learning journey in software engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {Object.values(roadmaps).map((track) => {
                    const Icon = iconMap[track.id] || BookOpen;

                    return (
                        <Card
                            key={track.id}
                            className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 relative overflow-hidden"
                            onClick={() => navigate(`/roadmap/${track.id}`)}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="w-6 h-6 text-primary" />
                            </div>
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">{track.title}</CardTitle>
                                <CardDescription className="text-base mt-2">
                                    {track.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-muted-foreground">
                                    {track.items.length} Stages • Estimated Time: Variable
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
