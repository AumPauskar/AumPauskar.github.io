// src/App.tsx (or your main router file)

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";

// Your page components
const HomePage = () => <div><h1>Home Page</h1></div>;
const AboutPage = () => <div><h1>About Us</h1></div>;
const WidgetsPage = () => <div><h1>Widgets</h1></div>;

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/products/widgets", element: <WidgetsPage /> },
      // ... other page routes
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;