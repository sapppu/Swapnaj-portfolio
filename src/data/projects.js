export const projects = [
  {
    id: "ai-code-review",
    title: "AI Code Review App",
    category: "Mobile App / AI Tool",
    shortDescription: "Cross-platform mobile app that accepts code snippets and returns AI-powered line-by-line review and suggestions using LLM API integration.",
    tags: ["React Native", "NestJS", "TypeScript", "LLM API"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "A cross-platform mobile application that accepts code snippets and returns AI-powered line-by-line review and suggestions, built with agentic tool-use patterns for identifying code smells and explaining fixes.",
      challenge: "Delivering structured, per-line code feedback on mobile requires careful prompt construction, reliable LLM API integration, and a responsive UI that handles syntax-highlighted input and formatted review output.",
      approach: "Designed a NestJS backend with RESTful endpoints for prompt construction, LLM API calls, and structured response parsing. Implemented agentic tool-use patterns on the server side.",
      solution: "Built a React Native frontend with language selector, syntax-highlighted input editor, and structured review output screen connected to the NestJS API layer.",
      technologies: ["React Native", "NestJS", "TypeScript", "LLM API", "REST API"],
      outcome: "Delivered a functional cross-platform app demonstrating agentic AI workflows for developer productivity."
    }
  },
  {
    id: "college-erp",
    title: "College ERP System",
    category: "Full-Stack Web Application",
    shortDescription: "Production-grade ERP system with role-based access control for Admin, Faculty, and Student roles using Spring Security and PostgreSQL.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf"],
    image: "https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "A production-grade full-stack ERP system for college administration with role-based access control, normalized relational database design, and Excel-based data import/export across 20+ modules.",
      challenge: "Managing complex academic workflows across multiple user roles required secure authentication, inheritance-based entity modeling, and reliable bulk data operations without compromising data integrity.",
      approach: "Implemented Spring Security with session authentication, designed a normalized schema using People → Student/Faculty inheritance, and mapped entities with Spring Data JPA and Hibernate ORM.",
      solution: "Integrated Apache POI for Excel import/export, built 20+ administrative modules with Thymeleaf views, and enforced role-based permissions at every endpoint.",
      technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Thymeleaf", "Spring Data JPA", "Hibernate", "Apache POI"],
      outcome: "Built a complete ERP platform handling admin, faculty, and student workflows with secure RBAC and bulk data management."
    }
  },
  {
    id: "sql-playground",
    title: "SQL Playground",
    category: "Custom Query Engine / Full-Stack",
    shortDescription: "Full-stack SQL execution environment backed by a hand-written Java query engine — no external database, zero Docker, zero cloud dependencies.",
    tags: ["Java", "Spring Boot", "React", "Vite", "JWT"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "A full-stack SQL execution environment with a custom Java query engine implementing Lexer → Parser → AST → Cost-Based Query Planner → Executor, with B-Tree indexing, MVCC, and WAL crash recovery.",
      challenge: "Building a complete SQL pipeline from scratch while providing per-user isolated sessions, JWT authentication, and a developer-friendly frontend with live schema browsing and execution plan visualization.",
      approach: "Implemented the full SQL pipeline in Java without external databases, added B-Tree indexing and MVCC transaction isolation, and per-user Write-Ahead Log for crash recovery.",
      solution: "Built a React + Vite frontend with SQL syntax highlighting, live schema browser, execution plan visualizer, and JWT-authenticated per-user isolated sessions.",
      technologies: ["Java", "Spring Boot", "React", "Vite", "JWT", "Custom SQL Engine"],
      outcome: "Delivered a self-contained SQL learning and execution platform demonstrating deep database internals knowledge."
    }
  },
  {
    id: "cisco-innovation-sprint",
    title: "La Trobe × Cisco AI City Sprint",
    category: "Innovation / Achievement",
    shortDescription: "National finalist (Top 5 teams across India) in a multidisciplinary AI-driven smart city disaster management solution.",
    tags: ["AI", "Innovation", "Team Leadership", "Smart City"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "Selected as a national finalist in the La Trobe × Cisco AI City Modernisation Innovation Sprint (2026), advancing to the final round with an AI-driven solution for smart city disaster management and urban planning.",
      challenge: "Competing against teams nationwide required combining AI expertise, urban planning insight, and effective multidisciplinary collaboration within tight sprint timelines.",
      approach: "Worked in a team of 5 to design and prototype an AI-driven disaster management and urban planning solution, hosted at the Australian High Commission, New Delhi.",
      solution: "Developed a smart city concept leveraging AI for disaster response coordination and urban infrastructure planning.",
      technologies: ["AI/ML", "System Design", "Team Collaboration"],
      outcome: "Advanced to the national final as one of the Top 5 teams across India."
    }
  },
  {
    id: "savoir-faire-hackathon",
    title: "Savoir Faire Hackathon",
    category: "Hackathon / Data Structures",
    shortDescription: "Runner-up in a team of 5 by building an optimized vendor management system using Sparse Matrix data structures.",
    tags: ["Java", "Data Structures", "Team Project", "Hackathon"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "Secured Runner-Up at Savoir Faire Hackathon (2024) at Dr. D.Y. Patil Research and Management College by designing a vendor management system optimized with Sparse Matrix data structures.",
      challenge: "Efficiently managing multiple vendors across multiple cities required a data structure that minimizes memory usage while supporting fast lookup and update operations.",
      approach: "Applied Sparse Matrix representation to model vendor-city relationships, reducing storage overhead for sparse data while maintaining O(1) access patterns where possible.",
      solution: "Built a complete vendor management system in a 5-person team within the hackathon timeframe, demonstrating practical application of advanced data structures.",
      technologies: ["Java", "Sparse Matrix", "Data Structures", "Algorithms"],
      outcome: "Achieved Runner-Up position among competing teams at Savoir Faire Hackathon 2024."
    }
  }
];
