// src/components/MenuBar.tsx

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export function MenuBar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about">About Me</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* --- UPDATED PROJECTS LINK (removed target="_blank") --- */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="https://github.com/AumPauskar">
                  Projects
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/skills">Skills</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* --- UPDATED BLOG LINK (removed target="_blank") --- */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="http://aumpauskar.github.io/blog/">
                  Blog
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
      </div>
    </header>
  );
}