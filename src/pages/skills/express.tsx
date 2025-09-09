import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const expressProjects = [
  {
    name: "Task Manager API",
    description: "A RESTful API built with Express and MongoDB for managing tasks, with endpoints for creating, reading, updating, and deleting.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "User Authentication Service",
    description: "A backend service using Express.js and JWT for user registration, login, and protected route management.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Real-time Chat Application",
    description: "A simple real-time chat app using Express and Socket.IO to demonstrate WebSocket communication.",
    link: "#" // Replace with your actual project link
  }
];

export function ExpressSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Express.js Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have experience building RESTful APIs with Express, a minimal and flexible Node.js web application framework. Here are some projects that showcase my skills.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expressProjects.map((project) => (
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
