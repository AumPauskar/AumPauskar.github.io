import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const figmaProjects = [
  {
    name: "Mobile App Prototype",
    description: "An interactive prototype for a mobile-first social media application, designed with a focus on user flow and intuitive navigation.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Website Redesign Mockup",
    description: "A complete visual redesign for an e-commerce website, including mockups for the homepage, product pages, and checkout process.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Design System & UI Kit",
    description: "A comprehensive design system with reusable components, typography scales, and color palettes to ensure brand consistency.",
    link: "#" // Replace with your actual project link
  }
];

export function FigmaSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Figma Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I use Figma for UI/UX design, creating wireframes, mockups, and prototypes. Here are some examples of my design work.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {figmaProjects.map((project) => (
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
