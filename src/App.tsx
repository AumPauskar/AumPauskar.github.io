// src/App.tsx

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";

// --- Import your Page Components ---
const HomePage = () => <div><h1>under progress</h1></div>; // Assuming you have a Home Page
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { BlogPage } from "./pages/BlogPage";

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      // --- Add the new routes here ---
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/skills", element: <SkillsPage /> },
      { path: "/blog", element: <BlogPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;