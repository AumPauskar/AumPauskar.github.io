// src/pages/HomePage.tsx

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <img
        src="/avatar.png"
        alt="Aum Pauskar"
        className="w-32 h-32 mx-auto rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold tracking-tight mt-4 lg:text-5xl">
        Aum Pauskar
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Driven and creative professional passionate about solving complex problems.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link to="/about">
            More About Me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}