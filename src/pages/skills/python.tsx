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
    name: "OOPS with Python and packages | Aum's blogging site",
    description: "A comprehensive detailed document on working of python",
    link: "https://aumpauskar.github.io/blog/posts/python/python_oops/"
  },
  {
    name: "Blog - Topic: Python",
    description: "List of all the documents under my blog",
    link: "https://aumpauskar.github.io/blog/tags/python/"
  },
  {
    name: "F1 data analysis",
    description: "A jupyter notebook that compares qualifying times between the fastest and slowest car using publicly available F1 data",
    link: "https://github.com/AumPauskar/f1-analysis-stats"
  },
  {
    name: "F1.5 championship",
    description: "A mock of the popular F1 fantasy game but with prediction of the top 10 instead",
    link: "https://github.com/AumPauskar/f1.5-championship"
  },
  {
    name: "Cursed pong",
    description: "A simple pong game made by pygame",
    link: "https://github.com/AumPauskar/Cursed-pong"
  },
  {
    name: "Discord bot",
    description: "A discord bot that hooks and replies to chat message. Does webscraping, simple reply etc",
    link: "https://github.com/AumPauskar/Discord-Bot"
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