// src/components/Layout.tsx

import { MenuBar } from "./MenuBar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <MenuBar />
      <main className="flex-grow container mx-auto p-4">
        <Outlet /> {/* Page content renders here */}
      </main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        My Awesome App © 2025
      </footer>
    </div>
  );
}