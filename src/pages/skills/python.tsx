import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pythonProjects = [
  {
    name: "Web Scraper",
    description: "A versatile web scraping tool built with Beautiful Soup and Requests to extract data from various websites for analysis.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Flask API",
    description: "A lightweight RESTful API for a blog application, built using the Flask microframework to handle backend logic.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Data Analysis with Pandas",
    description: "Jupyter notebooks showcasing data cleaning, analysis, and visualization using Pandas and Matplotlib.",
    link: "#" // Replace with your actual project link
  }
];

export function PythonSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Python Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Python is my go-to language for a wide range of tasks, from web development to scripting and automation. Here are a few projects that demonstrate my skills.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pythonProjects.map((project) => (
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
