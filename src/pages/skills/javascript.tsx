import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const javascriptProjects = [
  {
    name: "Interactive Data Dashboard",
    description: "A web dashboard that visualizes data from a public API using Chart.js, demonstrating asynchronous JavaScript and DOM manipulation.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Single-Page Application (SPA)",
    description: "A client-side rendered application built with vanilla JavaScript, featuring routing and component-based architecture.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Browser-Based Game",
    description: "A simple game like Tic-Tac-Toe or Snake, created with HTML5 Canvas and JavaScript to showcase game logic and interactivity.",
    link: "#" // Replace with your actual project link
  }
];

export function JavascriptSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">JavaScript Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I am proficient in JavaScript and have used it extensively for building interactive and dynamic front-end experiences. Here are some examples.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {javascriptProjects.map((project) => (
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
