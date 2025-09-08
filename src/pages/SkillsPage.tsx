// src/pages/SkillsPage.tsx

import {
  SiAndroid, SiArduino, SiAutodesk, SiBlender, SiBootstrap, SiC, SiCplusplus, 
  SiCss3, SiDart, SiDjango, SiDocker, SiElixir, SiExpress, SiFigma, 
  SiFirebase, SiFlask, SiFlutter, SiGit, SiJavascript, SiKotlin, SiLinux, 
  SiMariadb, SiMysql, SiNginx, SiNodedotjs, SiPhp, SiPostman, SiPython, 
  SiReact, SiTensorflow, SiUnrealengine, SiWordpress, SiKubernetes, 
  SiTerraform, SiGooglecloud, SiAmazon
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Array of skills with their icons and names
const skills = [
  { icon: <SiAmazon size={40} />, name: "AWS" },
  { icon: <SiAndroid size={40} />, name: "Android" },
  { icon: <SiArduino size={40} />, name: "Arduino" },
  { icon: <SiAutodesk size={40} />, name: "AutoCAD" },
  { icon: <SiBlender size={40} />, name: "Blender" },
  { icon: <SiBootstrap size={40} />, name: "Bootstrap" },
  { icon: <SiC size={40} />, name: "C" },
  { icon: <SiCplusplus size={40} />, name: "C++" },
  { icon: <SiCss3 size={40} />, name: "CSS3" },
  { icon: <SiDart size={40} />, name: "Dart" },
  { icon: <SiDjango size={40} />, name: "Django" },
  { icon: <SiDocker size={40} />, name: "Docker" },
  { icon: <SiElixir size={40} />, name: "Elixir" },
  { icon: <SiExpress size={40} />, name: "Express" },
  { icon: <SiFigma size={40} />, name: "Figma" },
  { icon: <SiFirebase size={40} />, name: "Firebase" },
  { icon: <SiFlask size={40} />, name: "Flask" },
  { icon: <SiFlutter size={40} />, name: "Flutter" },
  { icon: <SiAutodesk size={40} />, name: "Fusion 360" },
  { icon: <SiGit size={40} />, name: "Git" },
  { icon: <SiGooglecloud size={40} />, name: "GCP" },
  { icon: <FaJava size={40} />, name: "Java" },
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
  { icon: <SiKotlin size={40} />, name: "Kotlin" },
  { icon: <SiKubernetes size={40} />, name: "Kubernetes" },
  { icon: <SiLinux size={40} />, name: "Linux" },
  { icon: <SiMariadb size={40} />, name: "MariaDB" },
  { icon: <SiMysql size={40} />, name: "MySQL" },
  { icon: <SiNginx size={40} />, name: "Nginx" },
  { icon: <SiNodedotjs size={40} />, name: "Node.js" },
  { icon: <SiPhp size={40} />, name: "PHP" },
  { icon: <SiPostman size={40} />, name: "Postman" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiTerraform size={40} />, name: "Terraform" },
  { icon: <SiTensorflow size={40} />, name: "TensorFlow" },
  { icon: <SiUnrealengine size={40} />, name: "Unreal Engine" },
  { icon: <SiWordpress size={40} />, name: "Wordpress" },
];

export function SkillsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Languages and Tools</h1>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 w-32 h-32 
                       bg-secondary rounded-lg transition-transform 
                       hover:scale-110 hover:shadow-lg"
          >
            {skill.icon}
            <p className="mt-2 text-sm text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}