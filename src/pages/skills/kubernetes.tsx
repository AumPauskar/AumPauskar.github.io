import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const kubernetesProjects = [
  {
    name: "Microservices Deployment",
    description: "Deployed a multi-service application on a Minikube cluster, defining deployments, services, and ingress rules using YAML manifests.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Stateful Application with Persistent Volumes",
    description: "A demonstration of deploying a database on Kubernetes, using Persistent Volumes and Claims to ensure data persistence.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Helm Chart for a Web App",
    description: "Created a Helm chart to package and deploy a web application, simplifying the installation and configuration process on Kubernetes.",
    link: "#" // Replace with your actual project link
  }
];

export function KubernetesSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Kubernetes Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        I have foundational knowledge of Kubernetes for container orchestration. Here are some projects where I've applied these concepts.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kubernetesProjects.map((project) => (
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
