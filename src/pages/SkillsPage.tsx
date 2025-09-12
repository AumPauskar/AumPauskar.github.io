// src/pages/SkillsPage.tsx

import {
  SiAndroid, SiArduino, SiAutodesk, SiBlender, SiBootstrap, SiC, SiCplusplus,
  SiCss3, SiDart, SiDjango, SiDocker, SiElixir, SiExpress, SiFigma,
  SiFirebase, SiFlask, SiFlutter, SiGit, SiJavascript, SiKotlin, SiLinux,
  SiMariadb, SiMysql, SiNginx, SiNodedotjs, SiPhp, SiPostman, SiPython,
  SiReact, SiTensorflow, SiUnrealengine, SiWordpress, SiKubernetes,
  SiTerraform, SiGooglecloud, SiAmazon, SiRaspberrypi
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Link } from "react-router-dom";

// Array of skills with their icons and names
const skills = [
  { icon: <SiAmazon size={40} />, name: "AWS", link: "/skills/aws" },
  { icon: <SiAndroid size={40} />, name: "Android", link: "/skills/android" },
  { icon: <SiArduino size={40} />, name: "Arduino", link: "/skills/arduino" },
  { icon: <SiAutodesk size={40} />, name: "AutoCAD", link: "/skills/autocad" },
  { icon: <SiBlender size={40} />, name: "Blender", link: "/skills/blender" },
  { icon: <SiBootstrap size={40} />, name: "Bootstrap", link: "/skills/bootstrap" },
  { icon: <SiC size={40} />, name: "C", link: "/skills/c" },
  { icon: <SiCplusplus size={40} />, name: "C++", link: "/skills/c" },
  { icon: <SiCss3 size={40} />, name: "CSS3", link: "/skills/css3" },
  { icon: <SiDart size={40} />, name: "Dart", link: "/skills/dart" },
  { icon: <SiDjango size={40} />, name: "Django", link: "/skills/django" },
  { icon: <SiDocker size={40} />, name: "Docker", link: "/skills/docker" },
  { icon: <SiElixir size={40} />, name: "Elixir", link: "/skills/elixir" },
  { icon: <SiExpress size={40} />, name: "Express", link: "/skills/express" },
  { icon: <SiFigma size={40} />, name: "Figma", link: "/skills/figma" },
  { icon: <SiFirebase size={40} />, name: "Firebase", link: "/skills/firebase" },
  { icon: <SiFlask size={40} />, name: "Flask", link: "/skills/flask" },
  { icon: <SiFlutter size={40} />, name: "Flutter", link: "/skills/flutter" },
  { icon: <SiAutodesk size={40} />, name: "Fusion 360", link: "/skills/fusion360" },
  { icon: <SiGit size={40} />, name: "Git", link: "/skills/git" },
  { icon: <SiGooglecloud size={40} />, name: "GCP", link: "/skills/gcp" },
  { icon: <FaJava size={40} />, name: "Java", link: "/skills/java" },
  { icon: <SiJavascript size={40} />, name: "JavaScript", link: "/skills/javascript" },
  { icon: <SiKotlin size={40} />, name: "Kotlin", link: "/skills/kotlin" },
  { icon: <SiKubernetes size={40} />, name: "Kubernetes", link: "/skills/kubernetes" },
  { icon: <SiLinux size={40} />, name: "Linux", link: "/skills/linux" },
  { icon: <SiMariadb size={40} />, name: "MariaDB", link: "/skills/mariadb" },
  { icon: <SiMysql size={40} />, name: "MySQL", link: "/skills/mysql" },
  { icon: <SiNginx size={40} />, name: "Nginx", link: "/skills/nginx" },
  { icon: <SiNodedotjs size={40} />, name: "Node.js", link: "/skills/nodejs" },
  { icon: <SiPhp size={40} />, name: "PHP", link: "/skills/php" },
  { icon: <SiPostman size={40} />, name: "Postman", link: "/skills/postman" },
  { icon: <SiPython size={40} />, name: "Python", link: "/skills/python" },
  { icon: <SiRaspberrypi size={40} />, name: "Raspberry Pi", link: "/skills/raspberrypi" },
  { icon: <SiReact size={40} />, name: "React", link: "/skills/react" },
  { icon: <SiTerraform size={40} />, name: "Terraform", link: "/skills/terraform" },
  { icon: <SiTensorflow size={40} />, name: "TensorFlow", link: "/skills/tensorflow" },
  { icon: <SiUnrealengine size={40} />, name: "Unreal Engine", link: "/skills/unrealengine" },
  { icon: <SiWordpress size={40} />, name: "Wordpress", link: "/skills/wordpress" },
];

export function SkillsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Languages and Tools</h1>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {skills.map((skill, index) => (
          <Link to={skill.link} key={index}>
            <div
              className="flex flex-col items-center justify-center p-4 w-32 h-32
                         bg-secondary rounded-lg transition-transform
                         hover:scale-110 hover:shadow-lg"
            >
              {skill.icon}
              <p className="mt-2 text-sm text-center">{skill.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}