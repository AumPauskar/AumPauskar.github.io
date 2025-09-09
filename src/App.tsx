// src/App.tsx

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";

// --- Import your Page Components ---
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { BlogPage } from "./pages/BlogPage";

// --- Import Skill Page Components ---
import { AWSSkillPage } from "./pages/skills/aws";
import { AndroidSkillPage } from "./pages/skills/android";
import { ArduinoSkillPage } from "./pages/skills/arduino";
import { AutocadSkillPage } from "./pages/skills/autocad";
import { BlenderSkillPage } from "./pages/skills/blender";
import { BootstrapSkillPage } from "./pages/skills/bootstrap";
import { CSkillPage } from "./pages/skills/c";
import { Css3SkillPage } from "./pages/skills/css3";
import { DartSkillPage } from "./pages/skills/dart";
import { DjangoSkillPage } from "./pages/skills/django";
import { DockerSkillPage } from "./pages/skills/docker";
import { ElixirSkillPage } from "./pages/skills/elixir";
import { ExpressSkillPage } from "./pages/skills/express";
import { FigmaSkillPage } from "./pages/skills/figma";
import { FirebaseSkillPage } from "./pages/skills/firebase";
import { FlaskSkillPage } from "./pages/skills/flask";
import { FlutterSkillPage } from "./pages/skills/flutter";
import { Fusion360SkillPage } from "./pages/skills/fusion360";
import { GitSkillPage } from "./pages/skills/git";
import { GcpSkillPage } from "./pages/skills/gcp";
import { JavaSkillPage } from "./pages/skills/java";
import { JavascriptSkillPage } from "./pages/skills/javascript";
import { KotlinSkillPage } from "./pages/skills/kotlin";
import { KubernetesSkillPage } from "./pages/skills/kubernetes";
import { LinuxSkillPage } from "./pages/skills/linux";
import { MariadbSkillPage } from "./pages/skills/mariadb";
import { MysqlSkillPage } from "./pages/skills/mysql";
import { NginxSkillPage } from "./pages/skills/nginx";
import { NodejsSkillPage } from "./pages/skills/nodejs";
import { PhpSkillPage } from "./pages/skills/php";
import { PostmanSkillPage } from "./pages/skills/postman";
import { PythonSkillPage } from "./pages/skills/python";
import { ReactSkillPage } from "./pages/skills/react";
import { TerraformSkillPage } from "./pages/skills/terraform";
import { TensorflowSkillPage } from "./pages/skills/tensorflow";
import { UnrealengineSkillPage } from "./pages/skills/unrealengine";
import { WordpressSkillPage } from "./pages/skills/wordpress";

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
      // --- Add skill routes here ---
      { path: "/skills/aws", element: <AWSSkillPage /> },
      { path: "/skills/android", element: <AndroidSkillPage /> },
      { path: "/skills/arduino", element: <ArduinoSkillPage /> },
      { path: "/skills/autocad", element: <AutocadSkillPage /> },
      { path: "/skills/blender", element: <BlenderSkillPage /> },
      { path: "/skills/bootstrap", element: <BootstrapSkillPage /> },
      { path: "/skills/c", element: <CSkillPage /> },
      { path: "/skills/css3", element: <Css3SkillPage /> },
      { path: "/skills/dart", element: <DartSkillPage /> },
      { path: "/skills/django", element: <DjangoSkillPage /> },
      { path: "/skills/docker", element: <DockerSkillPage /> },
      { path: "/skills/elixir", element: <ElixirSkillPage /> },
      { path: "/skills/express", element: <ExpressSkillPage /> },
      { path: "/skills/figma", element: <FigmaSkillPage /> },
      { path: "/skills/firebase", element: <FirebaseSkillPage /> },
      { path: "/skills/flask", element: <FlaskSkillPage /> },
      { path: "/skills/flutter", element: <FlutterSkillPage /> },
      { path: "/skills/fusion360", element: <Fusion360SkillPage /> },
      { path: "/skills/git", element: <GitSkillPage /> },
      { path: "/skills/gcp", element: <GcpSkillPage /> },
      { path: "/skills/java", element: <JavaSkillPage /> },
      { path: "/skills/javascript", element: <JavascriptSkillPage /> },
      { path: "/skills/kotlin", element: <KotlinSkillPage /> },
      { path: "/skills/kubernetes", element: <KubernetesSkillPage /> },
      { path: "/skills/linux", element: <LinuxSkillPage /> },
      { path: "/skills/mariadb", element: <MariadbSkillPage /> },
      { path: "/skills/mysql", element: <MysqlSkillPage /> },
      { path: "/skills/nginx", element: <NginxSkillPage /> },
      { path: "/skills/nodejs", element: <NodejsSkillPage /> },
      { path: "/skills/php", element: <PhpSkillPage /> },
      { path: "/skills/postman", element: <PostmanSkillPage /> },
      { path: "/skills/python", element: <PythonSkillPage /> },
      { path: "/skills/react", element: <ReactSkillPage /> },
      { path: "/skills/terraform", element: <TerraformSkillPage /> },
      { path: "/skills/tensorflow", element: <TensorflowSkillPage /> },
      { path: "/skills/unrealengine", element: <UnrealengineSkillPage /> },
      { path: "/skills/wordpress", element: <WordpressSkillPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;