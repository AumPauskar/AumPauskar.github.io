import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const raspberryPiProjects = [
  {
    name: "Home Automation System",
    description: "A Raspberry Pi-based home automation system that controls lights and appliances through a web interface.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Retro Gaming Console",
    description: "A retro gaming console built with a Raspberry Pi and RetroPie, allowing me to play classic video games.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Network Ad-Blocker",
    description: "A network-wide ad-blocker using Pi-hole on a Raspberry Pi to block ads on all devices on my home network.",
    link: "#" // Replace with your actual project link
  }
];

export function RaspberryPiSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Raspberry Pi Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I'm enthusiastic about the Raspberry Pi and its versatility. Here are some projects where I've used this single-board computer.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {raspberryPiProjects.map((project) => (
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
