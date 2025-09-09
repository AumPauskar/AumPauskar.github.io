import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const dartProjects = [
  {
    name: "Flutter To-Do App",
    description: "A cross-platform to-do list application built with Flutter and Dart, demonstrating state management and a reactive UI.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Command-Line Utility",
    description: "A command-line tool written in Dart for file organization, showcasing Dart's capabilities for scripting and system tasks.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Dart Backend with Aqueduct",
    description: "An exploration into server-side Dart by building a simple REST API using the Aqueduct framework.",
    link: "#" // Replace with your actual project link
  }
];

export function DartSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dart Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have experience with Dart, primarily in the context of Flutter development, but also for scripting and backend experiments. Here are some examples.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dartProjects.map((project) => (
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
