import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cProjects = [
  {
    name: "Data Structures Library",
    description: "A custom library of common data structures (Linked Lists, Stacks, Queues, Trees) implemented from scratch in C++.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Console-Based Banking App",
    description: "A simple banking application built in C to handle basic account operations like deposits, withdrawals, and balance inquiries.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "OpenGL Graphics Demo",
    description: "A basic 3D graphics demonstration using C++ and OpenGL to render simple shapes and apply transformations.",
    link: "#" // Replace with your actual project link
  }
];

export function CSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">C/C++ Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have a strong foundation in C and C++, with experience in data structures, algorithms, and object-oriented programming. Here are some projects that showcase my skills.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cProjects.map((project) => (
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