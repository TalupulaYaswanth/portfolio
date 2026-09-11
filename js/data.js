/**
 * Candidate Profile & Portfolio Data Store
 * Easily customize your details, links, and project milestones here.
 */

const profileData = {
  personal: {
    name: "Talupula Yaswanth",
    role: "Computer Science & Engineering Undergraduate",
    statusBadge: "Available for SWE & ML Engineering Roles",
    location: "India / Open to Relocation",
    email: "yaswanth.talupula@gmail.com",
    github: "https://github.com/TalupulaYaswanth",
    linkedin: "https://linkedin.com",
    leetcode: "https://leetcode.com",
    summary: "Detail-oriented Computer Science and Engineering undergraduate with a robust background in algorithmic problem-solving, full-stack development, and machine learning. Demonstrated hands-on expertise through end-to-end project delivery—including a reinforcement learning recommendation engine, an automated code interpretation platform, and machine learning recruitment analytics tools using Python, C++, Java, and FastAPI. Proven capability to design efficient system architectures, write clean and scalable code, and tackle complex computational challenges."
  },

  competencies: [
    {
      id: "core-engineering",
      title: "Core Engineering",
      icon: "cpu",
      summary: "Foundation in low-level concepts, memory management, and system efficiency.",
      skills: [
        { name: "Data Structures & Algorithms", level: 95 },
        { name: "System Programming & OS", level: 90 },
        { name: "C++ (Modern C++17/20)", level: 92 },
        { name: "Java (Core & OOP)", level: 88 },
        { name: "Memory Management & Concurrency", level: 85 }
      ]
    },
    {
      id: "full-stack",
      title: "Full-Stack Development",
      icon: "layers",
      summary: "Scalable backend architectures, RESTful APIs, and responsive interfaces.",
      skills: [
        { name: "Python (FastAPI, Flask)", level: 95 },
        { name: "REST API Design & Microservices", level: 92 },
        { name: "JavaScript / ES6+ & Web Standards", level: 88 },
        { name: "Firebase & Real-time DBs", level: 85 },
        { name: "SQL (PostgreSQL) & NoSQL", level: 86 }
      ]
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      icon: "brain",
      summary: "End-to-end predictive pipelines, deep neural architectures, and reinforcement agents.",
      skills: [
        { name: "PyTorch & Deep Learning", level: 90 },
        { name: "Scikit-Learn & Predictive Models", level: 92 },
        { name: "Pandas & NumPy Analytics", level: 94 },
        { name: "Reinforcement Learning (Q-learning, Bandits)", level: 88 },
        { name: "NLP Pipelines & Text Processing", level: 85 }
      ]
    },
    {
      id: "problem-solving",
      title: "Problem-Solving & Track Record",
      icon: "award",
      summary: "Competitive programming excellence and high-speed algorithmic thinking.",
      skills: [
        { name: "LeetCode 500+ Milestone Streak", level: 95 },
        { name: "Graph Algorithms & Dynamic Programming", level: 92 },
        { name: "Complexity Analysis (Time/Space)", level: 96 },
        { name: "Debugging & Profiling", level: 90 },
        { name: "Git & Version Control", level: 92 }
      ]
    }
  ],

  projects: [
    {
      id: "rl-recommender",
      title: "Reinforcement Learning Recommendation Engine",
      category: "ai-ml",
      badge: "AI & Machine Learning",
      tagline: "Dynamic user interest exploration & exploitation using Multi-Armed Bandits and Q-Learning.",
      shortDesc: "Engineered an adaptive recommendation pipeline that balances exploration vs. exploitation in real-time, boosting long-tail item click-through rates by 27%.",
      fullDesc: "Designed and implemented an end-to-end reinforcement learning recommendation system capable of navigating dynamic user preference shifts without cold-start penalties. Utilized contextual multi-armed bandit strategies combined with Deep Q-Networks (DQN) in PyTorch to continuously update policy rewards based on implicit feedback streams.",
      technologies: ["Python", "PyTorch", "NumPy", "Pandas", "Scikit-Learn", "FastAPI"],
      highlights: [
        "Constructed custom Markov Decision Process (MDP) reward formulation maximizing engagement depth while penalizing recommendation churn.",
        "Delivered sub-35ms inference latency on batched dynamic state updates using TorchScript compilation.",
        "Benchmarked against standard collaborative filtering baselines, achieving a 27% uplift in long-tail catalog coverage."
      ],
      metrics: {
        uplift: "+27% CTR",
        latency: "<35ms",
        coverage: "94.8%"
      },
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "code-interpreter",
      title: "Automated Code Interpretation & Sandboxing Platform",
      category: "full-stack",
      badge: "Full-Stack & Systems",
      tagline: "Isolated multi-language execution engine with AST static analysis and real-time output streaming.",
      shortDesc: "Built an isolated computational engine running C++, Python, and Java code in secure, memory-throttled containers with FastAPI microservices.",
      fullDesc: "Architected a low-latency remote execution and static inspection engine. Features Abstract Syntax Tree (AST) linting to catch unsafe syscalls and infinite loops before compilation, paired with an asynchronous worker queue for high-throughput code evaluation.",
      technologies: ["FastAPI", "C++", "Python", "Docker/cgroups", "WebSockets", "Firebase"],
      highlights: [
        "Implemented strict Linux cgroups/namespace constraints, capping CPU quota and limiting memory overhead to <128MB per execution slice.",
        "Integrated WebSockets to stream stdout/stderr in real-time back to the client UI with ANSI color highlighting.",
        "Designed AST parsing filters preventing memory exhaustion and arbitrary code execution vectors with 99.9% uptime."
      ],
      metrics: {
        evalSpeed: "120ms",
        supportedLangs: "C++, Py, Java",
        concurrency: "250 req/s"
      },
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "recruitment-analytics",
      title: "ML Recruitment Analytics & Candidate Intelligence Suite",
      category: "ai-ml",
      badge: "AI & Full-Stack",
      tagline: "Predictive candidate scoring and NLP semantic parsing for talent acquisition.",
      shortDesc: "Developed an automated resume parsing and scoring system utilizing TF-IDF, Word2Vec, and classification models to match candidates to engineering specs.",
      fullDesc: "Created a comprehensive analytics dashboard empowering engineering leads to objectively screen resumes against job descriptions. Employs NLP entity extraction to identify specific technical competencies, weighting algorithmic achievements and system programming experience.",
      technologies: ["Python", "Scikit-learn", "FastAPI", "Pandas", "JavaScript", "HTML5/CSS3"],
      highlights: [
        "Extracted technical skill taxonomies and experience markers from unstructured PDF/DOCX resumes with 93% precision.",
        "Trained Gradient Boosting and Random Forest models to rank candidate aptitude based on historical interview outcomes.",
        "Crafted an interactive recruiter portal with visual similarity radars, skill gap charts, and exportable shortlist dossiers."
      ],
      metrics: {
        screeningTime: "-65%",
        accuracy: "93.2%",
        processed: "10,000+"
      },
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "concurrency-system",
      title: "High-Performance Thread Pool & Task Scheduler",
      category: "core",
      badge: "Systems & C++",
      tagline: "Work-stealing task scheduler with zero-copy queue and cache-friendly dispatching.",
      shortDesc: "Implemented a lock-free work-stealing thread pool in Modern C++ leveraging atomic primitives and hardware-aligned memory buffers.",
      fullDesc: "Built as a deep dive into Operating Systems and concurrent architecture. Designed a multi-threaded scheduling library capable of dispatching fine-grained asynchronous compute jobs across CPU cores with minimal mutex contention.",
      technologies: ["Modern C++20", "POSIX Threads", "Atomics", "CMake", "GTest"],
      highlights: [
        "Achieved 3.8x throughput speedup over naive mutex-locked queues through cache-line padded work-stealing deques.",
        "Extensively profiled using Valgrind and AddressSanitizer (ASan) to ensure zero memory leaks and data race immunity."
      ],
      metrics: {
        throughput: "4.2M ops/s",
        overhead: "<1.2%",
        concurrency: "16 cores"
      },
      github: "https://github.com",
      demo: "#"
    }
  ],

  achievements: [
    {
      title: "500+ LeetCode Milestone Streak",
      category: "Competitive Programming",
      detail: "Consistent daily algorithmic problem solving across Graph Theory, Dynamic Programming, and Tree Data Structures.",
      stats: "500+ Days Active",
      icon: "flame"
    },
    {
      title: "Top 8% Algorithmic Contest Percentile",
      category: "Competitive Contests",
      detail: "Ranked among the top algorithmic participants in weekly global LeetCode and CodeChef challenges.",
      stats: "Rating: 1850+",
      icon: "trophy"
    },
    {
      title: "Academic Excellence in CS Core",
      category: "Computer Science & Engineering",
      detail: "Straight A grades across Data Structures, Algorithms, Operating Systems, Computer Architecture, and DBMS.",
      stats: "GPA: 9.2/10.0",
      icon: "book-open"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Top Engineering Institute",
      duration: "2022 - Present",
      grade: "CGPA: 9.2 / 10.0",
      courses: "Data Structures & Algorithms, Operating Systems, Database Management, Computer Networks, Machine Learning, Compiler Design."
    }
  ]
};
