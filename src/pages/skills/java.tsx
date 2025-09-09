import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const javaProjects = [
  {
    name: "Library Management System",
    description: "A desktop application built with Java and Swing for managing books, borrowers, and library inventory.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Android Fitness Tracker",
    description: "A native Android application written in Java to track workouts, log exercises, and monitor progress over time.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Web Scraper with Jsoup",
    description: "A simple web scraper that extracts data from websites using the Jsoup library, demonstrating HTML parsing in Java.",
    link: "#" // Replace with your actual project link
  }
];

export function JavaSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Java Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have a solid understanding of Java's core concepts and have used it for desktop and Android development. Here are some of my projects.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {javaProjects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
