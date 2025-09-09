import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const elixirProjects = [
  {
    name: "Concurrent Word Counter",
    description: "An application that processes large text files concurrently using Elixir's processes to count word frequencies efficiently.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Simple Phoenix API",
    description: "An exploration into the Phoenix framework by building a basic JSON API to understand its structure and features.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Key-Value Store with GenServer",
    description: "A simple in-memory key-value store built using Elixir's GenServer to learn about state management and concurrency.",
    link: "#" // Replace with your actual project link
  }
];

export function ElixirSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Elixir Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I am interested in functional programming and have started learning Elixir. Here are some projects I've worked on to explore its capabilities.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elixirProjects.map((project) => (
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
