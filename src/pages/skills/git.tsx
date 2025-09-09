import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const gitProjects = [
  {
    name: "Collaborative Web Project",
    description: "A group project where I managed branching strategies, conducted code reviews, and merged pull requests on GitHub.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Open Source Contribution",
    description: "A contribution to a popular open-source library, involving forking the repository, creating a feature branch, and submitting a pull request.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Project with Complex History",
    description: "A personal project with a detailed commit history, showcasing the use of interactive rebasing to maintain a clean and understandable log.",
    link: "#" // Replace with your actual project link
  }
];

export function GitSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Git & Version Control</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I am proficient in using Git for version control. Here are some projects that highlight my experience with collaborative workflows.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gitProjects.map((project) => (
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
