/**
 * Candidate Profile & Portfolio Data Store
 * Sourced directly from Talupula Yaswanth's Official Resume & Track Record.
 */

const profileData = {
  personal: {
    name: "TALUPULA YASWANTH",
    role: "Computer Science & Engineering Undergraduate",
    statusBadge: "Available for SWE & AI/ML Engineering Roles",
    location: "Phagwara, Punjab / Andhra Pradesh, India",
    email: "Talupulayaswanth13@gmail.com",
    phone: "+91 8179090074",
    github: "https://github.com/TalupulaYaswanth",
    githubDisplay: "github.com/TalupulaYaswanth",
    linkedin: "https://linkedin.com/in/talupula-yaswanth",
    linkedinDisplay: "linkedin.com/in/talupula-yaswanth",
    portfolio: "https://talupulayaswanth.github.io/portfolio",
    portfolioDisplay: "talupulayaswanth.github.io/portfolio",
    leetcode: "https://leetcode.com/u/TalupulaYaswanth",
    leetcodeDisplay: "leetcode.com/u/TalupulaYaswanth",
    resumePdf: "assets/Talupula_Yaswanth_Resume.pdf",
    summary: "Computer Science and Engineering undergraduate at Lovely Professional University with hands-on expertise in AI/ML, LLMs, agentic AI workflows, full-stack systems, and core computer science. Demonstrated hands-on project delivery across multi-language AI code explanation tools (CodeExplain), hybrid movie recommendation systems, and automated deadlock detection simulation tools using Python, Flask, Streamlit, Scikit-learn, and PyTorch. Proven track record solving 200+ algorithmic problems across LeetCode, GeeksforGeeks, and CodeChef with strong foundations in Data Structures, Algorithms, and Operating Systems."
  },

  // Interactive Counter Badges (Hero / Overview Section)
  interactiveCounters: [
    {
      value: "200+",
      label: "DSA Problems Solved",
      sub: "LeetCode, GFG & CodeChef",
      icon: "code"
    },
    {
      value: "92%",
      label: "Code Parsing Accuracy",
      sub: "CodeExplain Multi-Lang Engine",
      icon: "cpu"
    },
    {
      value: "< 200ms",
      label: "Recommendation Latency",
      sub: "Hybrid Filtering & Streamlit",
      icon: "zap"
    },
    {
      value: "50 Days",
      label: "LeetCode Streak Badge",
      sub: "2026 Problem-Solving Consistency",
      icon: "flame"
    }
  ],

  // Interactive Tech Stack Chip Containers (Grouped by Resume Structure)
  techStackCategories: [
    {
      title: "Programming Languages",
      icon: "code",
      skills: ["C", "C++", "Java", "Python", "SQL"]
    },
    {
      title: "AI, ML & Deep Learning",
      icon: "brain",
      skills: ["Natural Language Processing (NLP)", "Computer Vision", "PyTorch", "Scikit-learn", "Large Language Models (LLMs)", "Agentic AI", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering"]
    },
    {
      title: "Databases & Storage",
      icon: "layers",
      skills: ["MySQL", "Relational Database Management Systems (RDBMS)"]
    },
    {
      title: "Web Development",
      icon: "globe",
      skills: ["HTML5", "CSS3", "JavaScript", "FastAPI", "Flask", "Streamlit"]
    },
    {
      title: "Developer Tools",
      icon: "tool",
      skills: ["Git", "GitHub", "Git Bash", "VS Code", "Docker", "Linux/Bash", "Jupyter Notebook"]
    },
    {
      title: "Core CS Concepts",
      icon: "cpu",
      skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Operating Systems (OS)", "Banker's Algorithm", "Resource Allocation Graph (RAG)"]
    },
    {
      title: "Soft Skills",
      icon: "users",
      skills: ["Analytical Problem Solving", "Adaptability", "Critical Thinking", "Team Collaboration"]
    }
  ],

  skillsMatrix: [
    { category: "Programming Languages", skills: "C, C++, Java, Python, SQL" },
    { category: "Databases & Storage", skills: "MySQL, Relational Database Management Systems (RDBMS)" },
    { category: "AI, ML & Deep Learning", skills: "Natural Language Processing, Computer Vision, PyTorch, Scikit-learn" },
    { category: "Web Development", skills: "HTML5, CSS3, JavaScript, FastAPI" },
    { category: "Developer Tools", skills: "Git, GitHub, Git Bash, VS Code, Docker, Linux/Bash, Jupyter Notebook" },
    { category: "Core CS Concepts", skills: "Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), OS" },
    { category: "Soft Skills", skills: "Analytical Problem Solving, Adaptability, Critical Thinking, Team Collaboration" }
  ],

  competencies: [
    {
      id: "programming-core",
      title: "Programming Languages & Core CS",
      icon: "cpu",
      summary: "Strong algorithmic foundations, object-oriented design, and system-level concepts.",
      skills: [
        { name: "Python", level: 95 },
        { name: "C / C++", level: 90 },
        { name: "Java", level: 88 },
        { name: "SQL", level: 90 },
        { name: "Data Structures & Algorithms (DSA)", level: 94 },
        { name: "Object-Oriented Programming (OOP)", level: 92 },
        { name: "Operating Systems (OS)", level: 90 }
      ]
    },
    {
      id: "ai-ml",
      title: "AI, ML & Deep Learning",
      icon: "brain",
      summary: "End-to-end predictive pipelines, NLP, computer vision, and modern agentic LLM workflows.",
      skills: [
        { name: "Natural Language Processing (NLP)", level: 92 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 94 },
        { name: "Computer Vision", level: 85 },
        { name: "Large Language Models (LLMs)", level: 90 },
        { name: "Agentic AI Workflows", level: 88 },
        { name: "Retrieval-Augmented Generation (RAG)", level: 88 },
        { name: "Prompt Engineering", level: 92 }
      ]
    },
    {
      id: "web-data",
      title: "Web Development & Databases",
      icon: "layers",
      summary: "Responsive client interfaces, microservices, REST APIs, and relational database systems.",
      skills: [
        { name: "FastAPI & Flask", level: 92 },
        { name: "Streamlit", level: 95 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML5 & CSS3", level: 92 },
        { name: "MySQL & RDBMS", level: 88 },
        { name: "RESTful API Integration", level: 90 }
      ]
    },
    {
      id: "developer-tools",
      title: "Developer Tools & Platforms",
      icon: "award",
      summary: "Production tooling, containerization, version control, and competitive problem solving.",
      skills: [
        { name: "Git & GitHub", level: 94 },
        { name: "Docker", level: 85 },
        { name: "Linux / Bash", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebook", level: 92 },
        { name: "LeetCode 50 Days Badge", level: 96 },
        { name: "200+ Algorithmic Problems", level: 95 }
      ]
    }
  ],

  projects: [
    {
      id: "code-explain",
      title: "CodeExplain (AI Code Explanation Tool)",
      category: "ai-ml",
      badge: "AI & Full-Stack",
      date: "Jul' 2026",
      tagline: "Multi-language code analysis assistant powered by LLM and NLP pipelines.",
      shortDesc: "Engineered a multi-language code analysis assistant with 92% parsing accuracy, reducing manual code review effort by 40%.",
      fullDesc: "Engineered a responsive developer dashboard handling real-time query rendering across 5+ distinct programming languages. Integrated LLM and NLP pipelines to parse and explain code structures effectively, delivering automated explanations and reducing manual code review effort by 40%.",
      technologies: ["Python", "Flask", "NLP", "LLM APIs", "JavaScript", "HTML5", "CSS3"],
      highlights: [
        "Engineered a multi-language code analysis assistant with 92% parsing accuracy.",
        "Integrated LLM and NLP pipelines to break down code structures, achieving a 40% reduction in manual code review effort.",
        "Deployed a responsive developer dashboard handling real-time query rendering across 5+ distinct programming languages."
      ],
      metrics: {
        parsingAccuracy: "92%",
        effortReduction: "-40%",
        supportedLanguages: "5+ Langs"
      },
      github: "https://github.com/TalupulaYaswanth/CodeExplain",
      demo: "https://talupulayaswanth.github.io/portfolio"
    },
    {
      id: "movie-recommendation",
      title: "Movie Recommendation System",
      category: "ai-ml",
      badge: "Machine Learning",
      date: "Apr' 2026",
      tagline: "Hybrid recommendation pipeline combining content-based filtering and collaborative strategies.",
      shortDesc: "Processed 10,000+ film metadata entries, improving prediction relevance by 28% and ingestion speed by 35% with sub-200ms latency.",
      fullDesc: "Implemented an end-to-end hybrid recommendation pipeline combining content-based filtering and collaborative strategies, improving prediction relevance by 28%. Processed over 10,000+ film metadata entries, optimizing data ingestion speed by 35%. Designed an interactive web interface in Streamlit reducing user search latency to under 200ms with seamless query retrieval.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
      highlights: [
        "Implemented a hybrid recommendation pipeline combining content-based filtering and collaborative strategies, improving prediction relevance by 28%.",
        "Processed over 10,000+ film metadata entries, optimizing data ingestion speed by 35%.",
        "Designed an interactive web interface reducing user search latency to under 200ms with seamless query retrieval."
      ],
      metrics: {
        relevanceGain: "+28%",
        ingestionSpeed: "+35%",
        searchLatency: "<200ms"
      },
      github: "https://github.com/TalupulaYaswanth/Movie-Recommendation-System",
      demo: "https://talupulayaswanth.github.io/portfolio"
    },
    {
      id: "deadlock-detection",
      title: "Automated Deadlock Detection Visualization Tool",
      category: "core",
      badge: "Operating Systems & Algorithms",
      date: "Apr' 2026",
      tagline: "Streamlit-based platform to simulate OS resource management and process concurrency.",
      shortDesc: "Simulates OS resource management integrating Banker’s Algorithm with dynamic Resource Allocation Graph (RAG) visualizations for safe state tracking.",
      fullDesc: "Designed a Streamlit-based web platform to simulate OS resource management and process concurrency. Built core detection logic integrating Banker’s Algorithm with dynamic Resource Allocation Graph (RAG) visualizations for safe state tracking. Implemented a real-time dashboard tracking process execution states and resource allocation.",
      technologies: ["Python", "Streamlit", "Operating Systems", "Algorithm Design", "Data Structures"],
      highlights: [
        "Designed a Streamlit-based web platform to simulate OS resource management and process concurrency.",
        "Built core detection logic integrating Banker’s Algorithm with dynamic Resource Allocation Graph (RAG) visualizations for safe state tracking.",
        "Implemented a real-time dashboard tracking process execution states and resource allocation."
      ],
      metrics: {
        algorithm: "Banker's",
        graphType: "Dynamic RAG",
        monitoring: "Real-Time"
      },
      github: "https://github.com/TalupulaYaswanth/Deadlock-Detection-Tool",
      demo: "https://talupulayaswanth.github.io/portfolio"
    }
  ],

  training: [
    {
      title: "AI Engineer Launchpad Program",
      institution: "Lovely Professional University",
      date: "Aug' 2026",
      duration: "50-Hour Technical Training",
      description: "Completed an intensive 50-hour technical training curriculum focused on Large Language Models (LLMs), Agentic AI workflows, and modern software deployment architectures. Built enterprise-ready application integrations utilizing prompt engineering, retrieval-augmented generation (RAG), and structured API schemas.",
      competencies: ["Large Language Models", "Agentic AI", "Prompt Engineering", "API Integration", "System Architecture"]
    }
  ],

  certifications: [
    {
      title: "Generative AI for Beginners",
      issuer: "Infosys Springboard",
      date: "Aug' 2026",
      badge: "Generative AI"
    },
    {
      title: "AI for Everyone: Understanding and Applying the Basics",
      issuer: "Infosys Springboard",
      date: "Aug' 2026",
      badge: "AI Fundamentals"
    },
    {
      title: "Yuva AI for All",
      issuer: "nasscom futureSkills Prime / INDIAai",
      date: "Feb' 2026",
      badge: "National AI Program"
    }
  ],

  achievements: [
    {
      title: "LeetCode 50 Days Badge (2026)",
      category: "Competitive Programming",
      detail: "Maintained continuous problem-solving consistency across advanced Data Structures and Algorithms.",
      stats: "50 Days Streak Badge (2026)",
      icon: "flame"
    },
    {
      title: "200+ Algorithmic Problems Solved",
      category: "Problem Solving Mastery",
      detail: "Solved 200+ algorithmic problems across LeetCode, GeeksforGeeks, and CodeChef focusing on Dynamic Programming, Trees, and Graphs.",
      stats: "200+ Problems Across Platforms",
      icon: "trophy"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      duration: "Aug' 2024 – Present",
      grade: "CGPA: 7.65",
      courses: "Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Operating Systems (OS), Machine Learning, Relational Databases."
    },
    {
      degree: "Intermediate (12th Grade) – Mathematics, Physics, Chemistry",
      institution: "Narayana Junior College",
      location: "Poranki, Andhra Pradesh",
      duration: "Mar' 2024",
      grade: "Percentage: 85%",
      courses: "Mathematics, Physics, Chemistry"
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "Vijayanikethan E.M. High School",
      location: "Panyam, Kurnool, Andhra Pradesh",
      duration: "Apr' 2022",
      grade: "Percentage: 63%",
      courses: "General Secondary Curriculum"
    }
  ]
};
