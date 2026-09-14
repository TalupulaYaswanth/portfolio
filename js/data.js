/**
 * Candidate Profile & Portfolio Data Store
 * Tailored for Full-Stack Software Engineer & AI/ML Developer
 */

const profileData = {
  personal: {
    name: "TALUPULA YASWANTH",
    headline: "Building scalable systems at the intersection of Full-Stack Engineering & AI.",
    subtitle: "Driven Computer Science & Engineering undergraduate engineering high-throughput distributed microservices, low-latency machine learning pipelines, and robust algorithmic architectures.",
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
    twitter: "https://x.com",
    twitterDisplay: "x.com/TalupulaYaswanth",
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

  // Featured Projects (Bento Showcase)
  projects: [
    {
      id: "deadlock-visualizer",
      title: "Automated Deadlock Detection & Visualization Engine",
      categoryBadge: "System & Visualization",
      hook: "Real-time resource allocation graph simulator implementing Banker’s Algorithm to detect concurrency deadlocks.",
      problemSolution: {
        problem: "Concurrent OS processes frequently risk deadlock states due to circular waiting and unpredictable resource starvation.",
        solution: "Engineered an interactive graphical simulation platform applying Banker’s safety algorithm with dynamic directed cycle detection to guarantee safe execution states."
      },
      highlights: [
        "Interactive Resource Allocation Graph (RAG) visualization tracking process claims and allocation in real-time.",
        "Banker's Algorithm core logic guaranteeing deadlock-free allocation matrices across simulated processes.",
        "Interactive Streamlit control dashboard displaying live thread execution states and resource matrices."
      ],
      metrics: [
        { label: "Algorithm", val: "Banker's Safety" },
        { label: "Visual Graph", val: "Dynamic RAG" },
        { label: "Concurrency", val: "Real-Time Tracking" }
      ],
      technologies: ["Python", "Streamlit", "Operating Systems", "Algorithm Design", "Data Structures"],
      github: "https://github.com/TalupulaYaswanth/Deadlock-Detection-Tool",
      demo: "https://talupulayaswanth.github.io/portfolio"
    },
    {
      id: "bandit-recommender",
      title: "Contextual Multi-Armed Bandit Recommendation Platform",
      categoryBadge: "AI/ML & Recommendation",
      hook: "Real-time movie recommendation engine using LinUCB reinforcement learning and FastAPI.",
      problemSolution: {
        problem: "Static collaborative recommenders fail when navigating dynamic user preference shifts and cold-start exploration.",
        solution: "Built a LinUCB contextual multi-armed bandit recommendation pipeline balancing continuous exploration vs. exploitation to optimize engagement depths."
      },
      highlights: [
        "Implemented LinUCB contextual bandit policy with online ridge regression updating recommendation weights per user click.",
        "Ingested and transformed 10,000+ film metadata records with 35% faster processing speed.",
        "Sub-100ms inference pipeline served through FastAPI microservices and Streamlit interface, yielding 28% relevance uplift."
      ],
      metrics: [
        { label: "Relevance", val: "+28% Uplift" },
        { label: "Ingestion", val: "+35% Speedup" },
        { label: "Latency", val: "< 100ms Inference" }
      ],
      technologies: ["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "LinUCB"],
      github: "https://github.com/TalupulaYaswanth/Movie-Recommendation-System",
      demo: "https://talupulayaswanth.github.io/portfolio"
    },
    {
      id: "code-explain-ai",
      title: "CodeExplain AI",
      categoryBadge: "Developer Tools",
      hook: "Intelligent code parsing platform providing automated syntax explanations and time-complexity evaluations.",
      problemSolution: {
        problem: "Deciphering unfamiliar codebases across disparate languages creates heavy cognitive friction and slow code review cycles.",
        solution: "Engineered a multi-language developer assistant integrating LLM and NLP pipelines with 92% parsing accuracy, reducing review effort by 40%."
      },
      highlights: [
        "Multi-language code parsing engine evaluating Abstract Syntax Trees across Python, C++, Java, and JavaScript.",
        "Automated Big-O algorithmic time and space complexity breakdown generated via fine-tuned LLM prompts.",
        "Real-time responsive dashboard rendering syntax highlighting, tokenized summaries, and optimization tips."
      ],
      metrics: [
        { label: "Accuracy", val: "92% Parsing" },
        { label: "Efficiency", val: "-40% Review Effort" },
        { label: "Multi-Lang", val: "5+ Languages" }
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
