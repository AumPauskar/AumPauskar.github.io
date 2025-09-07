// src/components/MenuBar.tsx

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react"; // Import hamburger and close icons

export function MenuBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Me" },
    { href: "https://github.com/AumPauskar", text: "Projects" },
    { to: "/skills", text: "Skills" },
    { href: "http://aumpauskar.github.io/blog/", text: "Blog" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header className="border-b relative">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.text}>
                  <NavigationMenuLink asChild>
                    {link.to ? (
                      <Link to={link.to}>{link.text}</Link>
                    ) : (
                      <a href={link.href}>{link.text}</a>
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">Open menu</span>
          </button>
        </div>

        {/* Right side content (always visible) */}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <div key={link.text} className="text-center">
                 {link.to ? (
                  <Link to={link.to} onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
                    {link.text}
                  </Link>
                ) : (
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
                    {link.text}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}