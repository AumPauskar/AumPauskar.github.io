
import {
    BookOpen,
    Code,
    Database,
    Layout,
    Server,
    Terminal,
    Cloud,
    Cpu,
    Globe,
    Wifi,
    HardDrive,
    Layers
} from "lucide-react";
import React from "react";

export type RoadmapItem = {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    topics: string[];
};

export type RoadmapTrack = {
    id: string;
    title: string;
    description: string;
    items: RoadmapItem[];
};

export const roadmaps: Record<string, RoadmapTrack> = {
    "basic-software-engineering": {
        id: "basic-software-engineering",
        title: "Basic Software Engineering",
        description: "The core foundations needed for any software engineering role.",
        items: [
            {
                id: "cs-fundamentals",
                title: "CS Fundamentals",
                description: "The building blocks of software engineering.",
                icon: BookOpen,
                topics: [
                    "Data Structures & Algorithms",
                    "Computer Architecture",
                    "Operating Systems",
                    "Networking Basics",
                    "Design Patterns"
                ]
            },
            {
                id: "languages",
                title: "Programming Languages",
                description: "Pick a language to master.",
                icon: Code,
                topics: [
                    "JavaScript / TypeScript",
                    "Python",
                    "Java",
                    "C++ / Rust (for systems)",
                    "Go"
                ]
            },
            {
                id: "version-control",
                title: "Version Control",
                description: "Collaborate and track changes effectively.",
                icon: Terminal,
                topics: [
                    "Git Basics (add, commit, push)",
                    "Branching & Merging",
                    "Pull Requests",
                    "GitHub / GitLab / Bitbucket"
                ]
            }
        ]
    },
    "web-development": {
        id: "web-development",
        title: "Web Development",
        description: "Mastering the art of building websites and web applications.",
        items: [
            {
                id: "frontend-basics",
                title: "Frontend Basics",
                description: "Structure, style, and logic.",
                icon: Layout,
                topics: [
                    "HTML5 Semantic Tags",
                    "CSS3 Flexbox & Grid",
                    "JavaScript ES6+"
                ]
            },
            {
                id: "frameworks",
                title: "Modern Frameworks",
                description: "Building complex UIs efficiently.",
                icon: Layers,
                topics: [
                    "React / Vue / Angular",
                    "State Management (Redux, Zustand, Context)",
                    "Tailwind CSS / Sass"
                ]
            },
            {
                id: "backend-apis",
                title: "Backend & APIs",
                description: "Server-side logic.",
                icon: Server,
                topics: [
                    "Node.js / Express or Python / Django",
                    "RESTful APIs",
                    "GraphQL Basics",
                    "Authentication (JWT, OAuth)"
                ]
            },
            {
                id: "databases-web",
                title: "Databases",
                description: "Persisting data.",
                icon: Database,
                topics: [
                    "PostgreSQL / MySQL",
                    "MongoDB",
                    "ORMs (Prisma, TypeORM)"
                ]
            }
        ]
    },
    "iot": {
        id: "iot",
        title: "Internet of Things (IoT)",
        description: "Connecting the physical world to the digital world.",
        items: [
            {
                id: "electronics",
                title: "Electronics Basics",
                description: "Understanding circuits and components.",
                icon: Cpu,
                topics: [
                    "Voltage, Current, Resistance",
                    "Microcontrollers vs Microprocessors",
                    "Sensors & Actuators",
                    "Circuit Design Basics"
                ]
            },
            {
                id: "embedded-programming",
                title: "Embedded Programming",
                description: "Coding closer to the metal.",
                icon: Code,
                topics: [
                    "C / C++ for Embedded",
                    "Arduino Framework",
                    "MicroPython",
                    "Memory Management"
                ]
            },
            {
                id: "communication",
                title: "Communication Protocols",
                description: "How devices talk to each other.",
                icon: Wifi,
                topics: [
                    "UART / I2C / SPI",
                    "MQTT / CoAP",
                    "Bluetooth Low Energy (BLE)",
                    "LoRaWAN"
                ]
            },
            {
                id: "iot-platforms",
                title: "IoT Platforms",
                description: "Managing devices and data.",
                icon: Cloud,
                topics: [
                    "AWS IoT Core",
                    "Google Cloud IoT",
                    "Blynk / ThingsBoard"
                ]
            }
        ]
    },
    "cloud": {
        id: "cloud",
        title: "Cloud Computing",
        description: "Scalable infrastructure and deployment.",
        items: [
            {
                id: "cloud-basics",
                title: "Cloud Concepts",
                description: "Fundamentals of cloud computing.",
                icon: Cloud,
                topics: [
                    "IaaS, PaaS, SaaS",
                    "Virtualization",
                    "Scalability & Elasticity",
                    "Regions & Availability Zones"
                ]
            },
            {
                id: "providers",
                title: "Cloud Providers",
                description: "Major platforms in the industry.",
                icon: Globe,
                topics: [
                    "AWS (EC2, S3, RDS, Lambda)",
                    "Azure",
                    "Google Cloud Platform"
                ]
            },
            {
                id: "containers",
                title: "Containers & Orchestration",
                description: "Packaging and running applications.",
                icon: Layers,
                topics: [
                    "Docker Basics",
                    "Kubernetes Architecture",
                    "Helm Charts"
                ]
            },
            {
                id: "iac",
                title: "Infrastructure as Code",
                description: "Automating infrastructure.",
                icon: HardDrive,
                topics: [
                    "Terraform",
                    "Ansible",
                    "CloudFormation"
                ]
            }
        ]
    }
};
