import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mysqlProjects = [
  {
    name: "Inventory Management System",
    description: "A database-driven application to track inventory, suppliers, and sales, built with a Node.js backend and a MySQL database.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Performance-Tuned Queries",
    description: "A project focused on optimizing complex SQL queries for a large dataset in MySQL, improving performance through indexing and query restructuring.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Social Media App Backend",
    description: "The backend for a social media application, with a MySQL database to handle user profiles, posts, and relationships between users.",
    link: "#" // Replace with your actual project link
  }
];

export function MysqlSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">MySQL Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I am proficient in using MySQL for relational databases. Below are some projects that showcase my database design and query optimization skills.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mysqlProjects.map((project) => (
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
