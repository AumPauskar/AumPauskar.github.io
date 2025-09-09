import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mariadbProjects = [
  {
    name: "E-commerce Database Schema",
    description: "Designed and implemented a relational database schema for an e-commerce platform using MariaDB, including tables for products, orders, and users.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Data Migration Script",
    description: "A Python script to migrate data from a CSV file into a structured MariaDB database, performing data validation and transformation.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Blog with User Authentication",
    description: "A full-stack blog application with a MariaDB backend to store posts, comments, and user credentials securely.",
    link: "#" // Replace with your actual project link
  }
];

export function MariadbSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">MariaDB Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have experience using MariaDB for relational data storage. Here are some projects where I've designed schemas and managed data.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mariadbProjects.map((project) => (
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
