import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const nodejsProjects = [
  {
    name: "GraphQL API Server",
    description: "A backend server built with Node.js and Apollo Server, providing a GraphQL API for a client-side application to consume.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Web Scraper and Data Processor",
    description: "A script that scrapes data from multiple websites, processes it, and saves the structured information into a database.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "CLI Tool for Productivity",
    description: "A command-line interface tool built with Node.js to help manage tasks and notes directly from the terminal.",
    link: "#" // Replace with your actual project link
  }
];

export function NodejsSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Node.js Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have experience building scalable and efficient back-end services with Node.js. Here are some projects I've developed.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nodejsProjects.map((project) => (
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
