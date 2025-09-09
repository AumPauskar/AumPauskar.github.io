import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const dockerProjects = [
  {
    name: "Multi-Container Web App",
    description: "A full-stack application composed of a React front-end, Node.js API, and a database, all orchestrated with Docker Compose.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "CI/CD Pipeline with Docker",
    description: "A project demonstrating a continuous integration and deployment pipeline that builds and pushes Docker images to a registry.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Containerized Python Script",
    description: "A simple, reproducible data processing script packaged into a lightweight Docker container for easy execution anywhere.",
    link: "#" // Replace with your actual project link
  }
];

export function DockerSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Docker Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have experience with Docker and have used it to containerize and deploy applications. Here are some projects that showcase my skills.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dockerProjects.map((project) => (
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
