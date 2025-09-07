// src/components/MenuBar.tsx

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils"; // Make sure you have this utility from shadcn

export function MenuBar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Item 1: Home Link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Item 2: About Link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Item 3: Products Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/products/widgets" title="Widgets">
                    The best widgets you can find anywhere.
                  </ListItem>
                  <ListItem href="/products/gadgets" title="Gadgets">
                    Top-tier gadgets for your everyday needs.
                  </ListItem>
                  <ListItem href="/products/accessories" title="Accessories">
                    Enhance your setup with our accessories.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

// Helper component for dropdown list items
// Note the use of React.forwardRef
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";