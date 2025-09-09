import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const terraformProjects = [
  {
    name: "Scalable Web Infrastructure on AWS",
    description: "Terraform configuration to deploy a high-availability web application on AWS using an Auto Scaling Group, Load Balancer, and RDS.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Reusable Infrastructure Modules",
    description: "A set of reusable Terraform modules for common infrastructure patterns, such as creating a VPC or a secure S3 bucket.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "GCP Project Setup",
    description: "Infrastructure as Code to provision a new Google Cloud Platform project, including networking, IAM roles, and Compute Engine instances.",
    link: "#" // Replace with your actual project link
  }
];

export function TerraformSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Terraform Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I use Terraform for Infrastructure as Code to define and provision cloud resources declaratively. Here are some of my IaC projects.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {terraformProjects.map((project) => (
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
