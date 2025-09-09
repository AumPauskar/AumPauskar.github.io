import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const kotlinProjects = [
  {
    name: "Movie Discovery App",
    description: "A native Android app built with Kotlin that uses The Movie Database (TMDb) API to display popular and upcoming movies.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Coroutines & Flow Demo",
    description: "An application showcasing modern asynchronous programming in Kotlin using coroutines and Flow for data streams.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Unit and Integration Tests",
    description: "A project demonstrating a strong testing culture, with comprehensive unit and integration tests written for an Android application.",
    link: "#" // Replace with your actual project link
  }
];

export function KotlinSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Kotlin Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I've embraced Kotlin for modern Android development. Here are some projects that highlight my skills in building native Android apps with it.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kotlinProjects.map((project) => (
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
