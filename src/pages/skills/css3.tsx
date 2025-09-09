import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cssProjects = [
  {
    name: "Pure CSS Animations",
    description: "A collection of loading spinners and button hover effects created entirely with CSS3 animations and transitions.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Responsive Portfolio Layout",
    description: "A personal portfolio website design that is fully responsive, utilizing CSS Grid and Flexbox for a seamless experience on all devices.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Themed UI Kit",
    description: "A custom UI kit with a consistent theme, featuring styled components like buttons, forms, and modals using modern CSS techniques.",
    link: "#" // Replace with your actual project link
  }
];

export function Css3SkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">CSS3 Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have a strong understanding of CSS3 and have experience with modern features like Flexbox, Grid, and animations. Here are some projects that demonstrate my skills.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cssProjects.map((project) => (
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
