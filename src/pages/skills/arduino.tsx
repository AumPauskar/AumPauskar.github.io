import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const arduinoProjects = [
  {
    name: "IoT Weather Station",
    description: "A weather station that collects temperature and humidity data and sends it to a web server for real-time monitoring.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "LED Cube",
    description: "A 4x4x4 LED cube that displays various animations and patterns, controlled by an Arduino microcontroller.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Automated Plant Watering System",
    description: "A system that monitors soil moisture and automatically waters plants when they're dry, helping to keep them healthy.",
    link: "#" // Replace with your actual project link
  }
];

export function ArduinoSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Arduino Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I enjoy tinkering with hardware and have used Arduino to build a variety of projects. Here are some examples of my work.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arduinoProjects.map((project) => (
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
