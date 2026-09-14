/**
 * Candidate Profile & Portfolio Data Store
 * Tailored for Full-Stack Software Engineer & AI/ML Developer
 */

const profileData = {
  personal: {
    name: "TALUPULA YASWANTH",
    headline: "Building scalable systems at the intersection of Full-Stack Engineering & AI.",
    subtitle: "Engineered real-time algorithmic tools & LinUCB bandits with sub-100ms latency. Solved 200+ algorithmic problems across LeetCode & GFG, delivering high-throughput microservices and AI pipelines with clean system architecture.",
    availability: "Available for Opportunities / Freelance",
    location: "Phagwara, Punjab / Andhra Pradesh, India",
    email: "Talupulayaswanth13@gmail.com",
    phone: "+91 8179090074",
    github: "https://github.com/TalupulaYaswanth",
    githubDisplay: "github.com/TalupulaYaswanth",
    linkedin: "https://linkedin.com/in/talupula-yaswanth",
    linkedinDisplay: "linkedin.com/in/talupula-yaswanth",
    leetcode: "https://leetcode.com/u/TalupulaYaswanth",
    leetcodeDisplay: "leetcode.com/u/TalupulaYaswanth",
    portfolio: "https://talupulayaswanth.github.io/portfolio",
    portfolioDisplay: "talupulayaswanth.github.io/portfolio",
    resumePdf: "assets/Talupula_Yaswanth_Resume.pdf"
  },

  // Social Proof & Quick Metrics Row
  quickMetrics: [
    {
      value: "50+ Days",
      title: "DSA Streak Badge",
      subtitle: "LeetCode 2026 Continuous Consistency"
    },
    {
      value: "200+",
      title: "Solved Problems",
      subtitle: "LeetCode, GFG & CodeChef Algorithms"
    },
    {
      value: "10+",
      title: "Projects Built",
      subtitle: "Production Systems & AI Platforms"
    },
    {
      value: "< 100ms",
      title: "Latency Optimizations",
      subtitle: "Sub-100ms Inference & Fast Querying"
    }
  ],

  // Bento Skills & Tech Stack Categories
  bentoSkills: {
    coreLanguages: {
      title: "Core Languages",
      icon: "code",
      desc: "High-performance procedural, object-oriented, and typed systems development.",
      skills: ["C++", "Java", "Python", "JavaScript (ES6+)", "SQL"]
    },
    frontendUI: {
      title: "Frontend & UI Engineering",
      icon: "layout",
      desc: "Responsive web standards, modern component architectures, and glassmorphism.",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3 / Custom Properties", "Modern Responsive Layouts"]
    },
    backendSystems: {
      title: "Backend & Systems",
      icon: "server",
      desc: "High-throughput asynchronous microservices, REST contracts, and system concurrency.",
      skills: ["FastAPI", "Flask", "Node.js", "RESTful APIs", "Linux / Bash", "System Programming"]
    },
    aiData: {
      title: "AI, Machine Learning & Data",
      icon: "brain",
      desc: "Contextual bandit reinforcement learning, deep learning, computer vision, and NLP.",
      skills: ["PyTorch", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "LinUCB / Contextual Bandits", "NLP", "LLM Pipelines"]
    },
    cloudDevOps: {
      title: "Cloud, DevOps & Databases",
      icon: "database",
      desc: "Containerized deployment pipelines, schema architecture, and version control.",
      skills: ["Docker", "Git", "GitHub Actions", "MongoDB", "MySQL", "SQLite", "RDBMS"]
    }
  },

  // Featured Projects (Structured with The Problem, The Implementation, The Metric/Result)
  projects: [
    {
      id: "deadlock-visualizer",
      title: "Automated Deadlock Detection & Visualization Engine",
      categoryBadge: "System & Concurrency",
      hook: "Real-time resource allocation graph simulator implementing Banker’s Algorithm to detect concurrency deadlocks.",
      problem: "Concurrent operating system processes and threads frequently risk silent deadlock states caused by circular wait conditions and unpredictable resource starvation.",
      implementation: "Engineered an interactive graphical simulation platform applying Banker’s safety algorithm with dynamic Resource Allocation Graph (RAG) directed cycle analysis.",
      result: "Guarantees zero-deadlock state validation through real-time state evaluation matrix, tracking concurrent threads with instant visual hazard alerts.",
      highlights: [
        "Banker's Safety Verification: Dynamic matrix checks ensuring safe execution sequences across all simulated processes.",
        "Resource Allocation Graph (RAG): Live directed graph rendering node claims, allocations, and cycle detection.",
        "Real-Time OS Dashboard: Built in Streamlit tracking process states with instant concurrency visual feedback."
      ],
      metrics: [
        { label: "Core Logic", val: "Banker's Algorithm" },
        { label: "Graph Engine", val: "Dynamic RAG" },
        { label: "Evaluation", val: "Real-Time Tracking" }
      ],
      technologies: ["Python", "Streamlit", "Operating Systems", "Algorithm Design", "Data Structures"],
      github: "https://github.com/TalupulaYaswanth/Deadlock-Detection-Tool",
      demo: "https://talupulayaswanth.github.io/portfolio"
    },
    {
      id: "bandit-recommender",
      title: "Contextual Multi-Armed Bandit Recommendation Platform",
      categoryBadge: "AI/ML & Reinforcement Learning",
      hook: "Real-time movie recommendation engine using LinUCB reinforcement learning and FastAPI.",
      problem: "Traditional static collaborative filtering recommenders suffer from severe cold-start latency and fail to adapt to dynamic user preference shifts.",
      implementation: "Engineered a LinUCB contextual multi-armed bandit recommendation pipeline balancing real-time exploration vs. exploitation via online ridge regression.",
      result: "Achieved +28% prediction relevance uplift, optimized ingestion across 10,000+ films by 35%, and sustained sub-100ms inference served via FastAPI microservices.",
      highlights: [
        "LinUCB Reinforcement Policy: Contextual exploration-exploitation balancing with instant click reward propagation.",
        "Data Ingestion Optimization: Streamlined 10,000+ film metadata pipeline with 35% faster processing speed.",
        "Ultra Low Latency: Sub-100ms inference served via FastAPI microservices paired with interactive Streamlit client."
      ],
      metrics: [
        { label: "Relevance", val: "+28% Uplift" },
        { label: "Speedup", val: "+35% Ingestion" },
        { label: "Latency", val: "< 100ms Inference" }
      ],
      technologies: ["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "LinUCB"],
      github: "https://github.com/TalupulaYaswanth/Movie-Recommendation-System",
      demo: "https://talupulayaswanth.github.io/portfolio"
    },
    {
      id: "code-explain-ai",
      title: "CodeExplain AI",
      categoryBadge: "Developer Tools & NLP",
      hook: "Intelligent code parsing platform providing automated syntax explanations and time-complexity evaluations.",
      problem: "Deciphering complex codebases across unfamiliar languages creates heavy onboarding friction and inefficient manual code review cycles.",
      implementation: "Built a multi-language developer assistant integrating LLM and NLP pipelines to parse Abstract Syntax Trees (AST) across 5+ programming languages.",
      result: "Delivered 92% syntax parsing accuracy and achieved a 40% reduction in manual code review effort with automated Big-O complexity reports.",
      highlights: [
        "Abstract Syntax Tree Parsing: Evaluates syntax trees and structures across Python, C++, Java, and JavaScript.",
        "Big-O Algorithmic Analysis: Automatically computes asymptotic time and space complexity evaluations.",
        "Responsive Developer Portal: Real-time query rendering with syntax highlighting, token breakdown, and optimization advice."
      ],
      metrics: [
        { label: "Accuracy", val: "92% Parsing" },
        { label: "Effort Saved", val: "-40% Review Time" },
        { label: "Coverage", val: "5+ Languages" }
      ],
      technologies: ["Python", "Flask", "NLP", "LLM APIs", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/TalupulaYaswanth/CodeExplain",
      demo: "https://talupulayaswanth.github.io/portfolio"
    }
  ],

  // Experience & Certifications (Vertical Glowing Timeline)
  experienceTimeline: [
    {
      role: "AI Engineer Launchpad Fellow",
      org: "Lovely Professional University",
      period: "Aug' 2026",
      type: "Intensive Technical Program",
      desc: "Completed an intensive 50-hour engineering curriculum focused on Large Language Models (LLMs), Agentic AI workflows, and modern software deployment architectures. Built enterprise-ready application integrations utilizing prompt engineering, retrieval-augmented generation (RAG), and structured API schemas.",
      pills: ["Large Language Models", "Agentic AI", "Prompt Engineering", "RAG Pipelines", "System Architecture"]
    },
    {
      role: "Generative AI Specialist & Foundations",
      org: "Infosys Springboard",
      period: "Aug' 2026",
      type: "Verified Professional Credential",
      desc: "Certified in Generative AI for Beginners & AI for Everyone: Understanding and Applying the Basics. Covered neural generative models, transformer mechanics, attention algorithms, and ethical AI deployment.",
      pills: ["Generative AI", "Transformers", "Model Evaluation", "Neural Architectures"]
    },
    {
      role: "Yuva AI for All Certification",
      org: "nasscom futureSkills Prime / INDIAai",
      period: "Feb' 2026",
      type: "National AI Program",
      desc: "Awarded recognition for foundational AI competence, practical machine learning problem formulation, and real-world societal impact applications.",
      pills: ["Applied Machine Learning", "Data Ethics", "nasscom Certified"]
    },
    {
      role: "B.Tech in Computer Science and Engineering",
      org: "Lovely Professional University (Phagwara, Punjab)",
      period: "Aug' 2024 – Present",
      type: "Undergraduate Degree",
      desc: "Academic focus on Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Relational Database Management Systems, and Machine Learning. Cumulative CGPA: 7.65.",
      pills: ["DSA", "OOP", "Operating Systems", "RDBMS", "Computer Networks"]
    },
    {
      role: "Intermediate (12th Grade) — MPC",
      org: "Narayana Junior College (Poranki, AP)",
      period: "Mar' 2024",
      type: "Higher Secondary",
      desc: "Graduated with 85% aggregate specializing in Mathematics, Physics, and Chemistry.",
      pills: ["Mathematics", "Physics", "Chemistry"]
    }
  ]
};
