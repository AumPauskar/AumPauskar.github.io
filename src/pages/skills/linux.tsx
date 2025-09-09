import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const linuxProjects = [
  {
    name: "Bash Scripting for Automation",
    description: "A collection of Bash scripts for automating routine tasks like backups, file management, and system monitoring.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Web Server Setup",
    description: "A guide and script for setting up a full LEMP (Linux, Nginx, MySQL, PHP) stack on a virtual private server from scratch.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Customized Development Environment",
    description: "Documentation of my personal Linux development setup, including shell customization, dotfiles management, and essential tools.",
    link: "#" // Replace with your actual project link
  }
];

export function LinuxSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Linux & Scripting Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I am comfortable in a Linux environment and proficient with the command line. Here are some projects that showcase my scripting and administration skills.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {linuxProjects.map((project) => (
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
