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
  about: `I'm a software engineer driven by the challenge of turning complex problems into elegant, user-friendly solutions.  I specialize in Event-Driven Architecture (EDA) thus optimizing performance, managing complex data flows, and ensuring systems scalability. 
  I approach every architectural challenge with meticulous attention to detail. \n\nOff the clock:  tech nerd, love to read tech blogs/articles, and always finding time to sleep.`,
  email: "sandjayawilliams16072005@gmail.com",
  linkedin: "https://linkedin.com/in/williamssandjaya",
  github: "https://github.com/nocturnalnerds",
  leetcode: "https://leetcode.com/u/noturnalneerds/",
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
    title: "Tetris",
    category: "Desktop Game Development",
    description:
      "First Programming Project @ 16yo. Tetris is a classic tile-matching game where blocks strategically placed to complete lines and score points. This project showcases implementation of Object Oriented programming and Raylib Graphic Library.",
    tech: ["C++", "Raylib", "CMake"],
    github: "https://github.com/nocturnalnerds/Tetris_Using_C--",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    imageSrc: "/porto1.gif",
  },
  {
    id: 2,
    title: "Real AI",
    category: "Software Web Development + AI",
    description:
      "REAL AI is a web application that enhances customer support operations through real-time sentiment analysis and AI-powered response suggestions, enabling agents to deliver faster, more empathetic, and more effective customer service.",
    tech: ["React Native", "TypeScript", "Firebase", "Expo"],
    github: "https://github.com/nocturnalnerds/Technoscape",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    imageSrc: "/porto2.png",
  },
  {
    id: 3,
    title: "Splitto",
    category: "Mobile Split Bill OCR App",
    description:
      "Splitto is a mobile application that uses OCR technology to simplify bill splitting among friends. Users can quickly scan receipts, and the app automatically calculates each person's share, making group payments hassle-free.",
    tech: ["React PWA", "TypeScript", "PostgreSQL", "Node.js", "OpenAI"],
    github: "https://github.com/nocturnalnerds/SplittoCopy",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    imageSrc: "./porto5.png",
  },
  {
    id: 4,
    title: "Vault Chat - Golang gRPC",
    category: "CLI Apps + Backend Service",
    description:
      "Vault Chat is a CLI application built with Go over gRPC protocol providing real-time messaging. The application employs end-to-end encryption to protect communications while also leveraging Go's concurrency such as goroutines, channels and mutexes to efficiently handle multiple simultaneous client connections and concurrent server operations.",
    tech: ["Golang", "gRPC", "CLI", "Docker", "TLS Encryption"],
    github: "https://github.com/nocturnalnerds/GoLangRPCCLIChatRoom.git",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    imageSrc: "./porto4.png",
  },
  {
    id: 5,
    title: "Kafka Zookeper to Kraft Migration Pipeline",
    category: "Backend Migration Service",
    description:
      "Developed a migration pipeline to transition from Apache Kafka with Zookeeper to KRaft mode, ensuring minimal downtime and data integrity. The service handles message replication, topic configuration, and consumer group management during the migration process.",
    tech: ["Shell", "Yaml", "Strimzi.io", "Docker", "Kubernetes", "Kafka"],
    github: "https://github.com/nocturnalnerds/Internal_Kafka_Migration_ZKP_to_KRaft",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    imageSrc: "./porto3.png",
  },
];
