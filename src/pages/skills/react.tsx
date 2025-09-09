import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const reactProjects = [
  {
    name: "E-commerce Storefront",
    description: "A fully functional e-commerce front-end built with React, featuring product listings, a shopping cart, and state management with Context API.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "This Portfolio Website",
    description: "The very portfolio you are browsing now, built with React, TypeScript, and Tailwind CSS to showcase my skills and projects.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Real-time Dashboard",
    description: "A dashboard application that consumes a WebSocket API to display real-time data updates without needing to refresh the page.",
    link: "#" // Replace with your actual project link
  }
];

export function ReactSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have a strong command of React for building modern, component-based user interfaces. Here are a few projects that demonstrate my capabilities.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reactProjects.map((project) => (
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
