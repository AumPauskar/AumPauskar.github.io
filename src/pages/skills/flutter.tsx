import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const flutterProjects = [
  {
    name: "Recipe Finder App",
    description: "A mobile app built with Flutter that allows users to search for recipes based on ingredients, using a public API.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Personal Finance Tracker",
    description: "A cross-platform app to track income and expenses, featuring charts and data visualization for financial insights.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Flashcard Study App",
    description: "An application to help users study with digital flashcards, built with a focus on smooth animations and a clean UI.",
    link: "#" // Replace with your actual project link
  }
];

export function FlutterSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Flutter Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have experience developing cross-platform mobile applications using Flutter and Dart. Here are some of my projects.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flutterProjects.map((project) => (
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
