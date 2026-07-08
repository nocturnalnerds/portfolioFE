export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  date: string;
  role: string;
  company: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  gradient: string;
  imageSrc?: string;
}

export const personalInfo = {
  name: "Williams Sandjaya",
  initials: "WS",
  avatarSrc: "/avatar.jpg",
  title: "Software Engineer",
  tagline:
    "今度は今度、今は今 - Perfect Days.\nSoftware Engineer | Full Stack Developer\nCurrently Learning Systems Programming",
  about: `I'm a software engineer driven by the challenge of turning complex problems into elegant, user-friendly solutions.  I specialize in Event-Driven Architecture (EDA) to optimize performance, manage complex data flows, and build systems that scale effortlessly. I approach every architectural challenge with meticulous attention to detail. 
  Off the clock:  tech enthusiast, and always brainstorming my next technical challenge.`,
  email: "sandjayawilliams16072005@gmail.com",
  linkedin: "https://linkedin.com/in/williamssandjaya",
  github: "https://github.com/nocturnalnerds",
  cvUrl: "/CV_WilliamsSandjaya.pdf",
  location: "Jakarta, Indonesia",
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C/C++", "C#", "Go"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Node.js + Express",
      ".NET",
      "Spring Boot",
      "Flask",
      "Next.js",
      "React Native",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Postman", "Linux"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Cosmos DB"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Azure CI/CD",
      "Railway",
      "Vercel",
      "GitHub Actions",
      "Nginx",
      "Jenkins",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    category: "Event Streaming Platforms",
    items: [
      "Kafka",
      "RabbitMQ",
      "Azure Event Hubs",
      "Event Grid",
      "Apache Pulsar",
    ],
  },
];

export const experiences: Experience[] = [
  {
    date: "Feb 2026 – Present",
    role: "Full Stack Programmer",
    company: "SSG 4 Binus Maya Team – IT Division Bina Nusantara, Jakarta",
    description: `Designed, developed and maintained 600+ backend services consisting of API , Event/Message Based service, Scheduler, Subscriber and Producers following EDA architecture to ensure scalability, modularity and clean separation of concerns. 
    Assisted in setting up CI/CD pipelines for automated build, test, and deployment workflows across containerized environments.
    Participated in code reviews and architectural discussions to improve system maintainability and engineering standards.
    Monitored system performance and logs, troubleshooting deployment issues, scaling problems, and service failures in cluster environments.
    Debugging racing conditions bug on several Concurrent running APIs using red-locking architecture ensuring data atomicity.
    Debugging duplication and lost data problems due to EVH auto checkpointing and Azure Function rebalancing. Solved by creating custom Azure Event Grid push logic and disabling auto checkpoint.`,
  },
  {
    date: "Feb 2025 – Feb 2026",
    role: "Associate Software Engineer - Internships ",
    company: "ITAT – Apps Team – IT Division Bina Nusantara, Jakarta",
    description: `Upgraded codebase from .NET 6 to .NET 8, focusing on performance, compatibility, and maintainability mostly on bulky operations and caching reduced API latency and enhanced maintainability.
    Developed standardized .NET 6/8 Documentation & templates, Scheduler modules, and Kafka Publisher/Subscriber patterns for internal Backend Code Generator.
    Designed and implemented a Pub/Sub (Event-Driven Architecture) system for internal APIs using Apache Kafka, enabling real-time data streaming and decoupling service communication improving scalability.
    Implemented Circuit Breaker on Kafka and Redis Cluster Services using Polly ensuring resilience.
    Successfully assisted in migrating Kafka services from on-premises to a self-hosted Kubernetes environment using Strimzi kafka operator, ensuring seamless integration and scalability.
    Refactored Internal Kafka Subscriber to implement robust and to separate concern consumer commit from Handler.`,
  },
  {
    date: "Jan 2025 – Feb 2025",
    role: "Contract Freelance Refactor",
    company: "Nextsoft – PT. Paramdaksa Teknologi Nusantara, Jakarta – Remote",
    description: `Refactored legacy JSP-based applications to improve security, structure, and maintainability.
    Mitigated XSS vulnerabilities by sanitizing inputs, escaping outputs, and enforcing secure coding standards reducing security risks.
    Replaced old jQuery-based UI code with modern CSS and vanilla JavaScript, reducing dependency overhead and improving performance.
    Separated JavaScript, CSS, and JSP concerns to follow best practices in front-end architecture. Ensured compliance with Content Security Policy (CSP) and modern web security guidelines.`,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Web Application",
    description:
      "A full-stack application that addresses real-world challenges with an intuitive UI and a robust, scalable backend architecture.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project-alpha",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "Project Beta",
    category: "Mobile Application",
    description:
      "Cross-platform mobile app featuring real-time data sync, offline-first support, and a smooth native-feeling experience.",
    tech: ["React Native", "TypeScript", "Firebase", "Expo"],
    github: "https://github.com/yourusername/project-beta",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "API Service",
    description:
      "Scalable REST API service with JWT authentication, rate limiting, caching layer, and auto-generated OpenAPI documentation.",
    tech: ["Python", "FastAPI", "Redis", "Docker", "PostgreSQL"],
    github: "https://github.com/yourusername/project-gamma",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    title: "Project Delta",
    category: "Data Dashboard",
    description:
      "Interactive analytics dashboard with customizable widgets, real-time data streaming, and exportable reporting features.",
    tech: ["Next.js", "D3.js", "TypeScript", "MongoDB"],
    github: "https://github.com/yourusername/project-delta",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    id: 5,
    title: "Project Epsilon",
    category: "CLI Tool",
    description:
      "Developer productivity CLI tool that automates repetitive workflows, reducing boilerplate setup time from hours to seconds.",
    tech: ["Node.js", "TypeScript", "Ink", "npm"],
    github: "https://github.com/yourusername/project-epsilon",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
];
