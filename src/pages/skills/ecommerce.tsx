// src/pages/skills/ecommerce.tsx

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ecommerceProjects = [
  {
    name: "WooCommerce",
    description: "An open-source e-commerce plugin for WordPress.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "Adobe Magento/Commerce",
    description: "A feature-rich e-commerce platform for enterprise-level businesses.",
    link: "#" // Replace with your actual project link
  },
  {
    name: "PrestaShop",
    description: "A freemium, open-source e-commerce solution.",
    link: "#" // Replace with your actual project link
  }
];

export function EcommerceSkillPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">eCommerce Projects</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Here are some of the eCommerce platforms I've worked with.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecommerceProjects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}