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
import { Menu, X } from "lucide-react";

type NavLink = {
  text: string;
  to?: string;
  href?: string;
};

export function MenuBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Me" },
    { href: "https://github.com/AumPauskar", text: "Projects" },
    { to: "/skills", text: "Skills" },
    { href: "http://aumpauskar.github.io/blog/", text: "Blog" },
    { to: "/contact", text: "Contact" },
  ];

  const renderLink = (link: NavLink, isMobile = false) => {
    const commonProps = {
      className: isMobile ? "block py-3 px-4 text-lg" : "",
      onClick: () => isMobile && setIsMobileMenuOpen(false),
    };

    if (link.to) {
      return <Link to={link.to} {...commonProps}>{link.text}</Link>;
    }
    if (link.href) {
      return <a href={link.href} {...commonProps}>{link.text}</a>;
    }
    return null;
  };

  return (
    <>
      <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
              <span className="sr-only">Open menu</span>
            </button>
          </div>

          <div className="hidden md:flex flex-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.text}>
                    <NavigationMenuLink asChild>
                      {renderLink(link)}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar/Drawer - MOVED OUTSIDE of <header> */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/80 animate-in fade-in-0"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-sm border-r bg-background p-6 animate-in slide-in-from-left-full sm:max-w-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-xl">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.text}>
                  {renderLink(link, true)}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}