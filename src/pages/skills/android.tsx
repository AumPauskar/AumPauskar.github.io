import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const androidProjects = [
  {
    name: "Note-Taking App",
    description: "A native Android app built with Kotlin for creating, editing, and organizing notes, featuring a clean and intuitive user interface.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Weather Forecast App",
    description: "An application that fetches and displays weather data from a third-party API, showcasing asynchronous programming and UI updates.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Quiz Game",
    description: "A simple quiz application for Android that tests users' knowledge on various topics, built using Jetpack Compose.",
    link: "#" // Replace with your actual project link
  }
];

export function AndroidSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Android Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I am passionate about mobile development and have experience building native Android applications using Kotlin and Java. Here are a few of my projects.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {androidProjects.map((project) => (
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
