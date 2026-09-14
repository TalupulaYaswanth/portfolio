/**
 * World-Class Portfolio & Interactive Engine
 * Full-Stack Software Engineer & AI/ML Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHero();
  renderQuickMetrics();
  renderBentoSkills();
  renderFeaturedProjects();
  renderExperienceTimeline();
  renderPrintView();
  setupInteractions();
  setupTiltEffect();
  setupContactForm();
});

/* ==========================================================================
   Theme Management (Persistent Dark/Light)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  window.addEventListener('storage', (e) => {
    if (e.key === 'portfolio_theme') {
      const updatedTheme = e.newValue || 'dark';
      document.documentElement.setAttribute('data-theme', updatedTheme);
      updateThemeIcon(updatedTheme);
    }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('portfolio_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (theme === 'light') {
    btn.innerHTML = `
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
    btn.setAttribute('title', 'Switch to Obsidian Dark Mode');
  } else {
    btn.innerHTML = `
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
    btn.setAttribute('title', 'Switch to Clean Light Mode');
  }
}

/* ==========================================================================
   DOM Renderers
   ========================================================================== */
function renderHero() {
  const p = profileData.personal;
  
  const headlineEl = document.getElementById('hero-headline');
  if (headlineEl) headlineEl.innerHTML = p.headline;

  const subtitleEl = document.getElementById('hero-subtitle');
  if (subtitleEl) subtitleEl.textContent = p.subtitle;

  const availabilityEl = document.getElementById('availability-text');
  if (availabilityEl) availabilityEl.textContent = p.availability;
}

function renderQuickMetrics() {
  const container = document.getElementById('quick-metrics-container');
  if (!container || !profileData.quickMetrics) return;

  container.innerHTML = profileData.quickMetrics.map(m => `
    <div class="metric-bento-card" data-tilt>
      <div class="metric-number text-gradient-brand">${m.value}</div>
      <div class="metric-title">${m.title}</div>
      <div class="metric-subtitle">${m.subtitle}</div>
    </div>
  `).join('');
}

function renderBentoSkills() {
  const container = document.getElementById('bento-skills-container');
  if (!container || !profileData.bentoSkills) return;

  const bs = profileData.bentoSkills;

  container.innerHTML = `
    <!-- 1. Core Languages (Large Span 7) -->
    <div class="bento-cell bento-span-7" data-tilt>
      <div class="bento-cell-header">
        <div class="bento-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <div>
          <h3 class="bento-cell-title">${bs.coreLanguages.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-dim);">${bs.coreLanguages.desc}</p>
        </div>
      </div>
      <div class="bento-chips-cloud">
        ${bs.coreLanguages.skills.map(s => `
          <span class="interactive-chip"><span class="chip-dot"></span>${s}</span>
        `).join('')}
      </div>
    </div>

    <!-- 2. AI, ML & Data (Span 5) -->
    <div class="bento-cell bento-span-5" data-tilt>
      <div class="bento-cell-header">
        <div class="bento-icon-box bento-icon-cyan">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8"/><path d="M12 21a9 9 0 0 1-9-9c0-3.5 2-6.5 5-8"/></svg>
        </div>
        <div>
          <h3 class="bento-cell-title">${bs.aiData.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-dim);">${bs.aiData.desc}</p>
        </div>
      </div>
      <div class="bento-chips-cloud">
        ${bs.aiData.skills.map(s => `
          <span class="interactive-chip"><span class="chip-dot" style="background: var(--accent-violet);"></span>${s}</span>
        `).join('')}
      </div>
    </div>

    <!-- 3. Backend & Systems (Span 4) -->
    <div class="bento-cell bento-span-4" data-tilt>
      <div class="bento-cell-header">
        <div class="bento-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <div>
          <h3 class="bento-cell-title">${bs.backendSystems.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-dim);">${bs.backendSystems.desc}</p>
        </div>
      </div>
      <div class="bento-chips-cloud">
        ${bs.backendSystems.skills.map(s => `
          <span class="interactive-chip"><span class="chip-dot"></span>${s}</span>
        `).join('')}
      </div>
    </div>

    <!-- 4. Frontend & UI (Span 4) -->
    <div class="bento-cell bento-span-4" data-tilt>
      <div class="bento-cell-header">
        <div class="bento-icon-box bento-icon-cyan">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        </div>
        <div>
          <h3 class="bento-cell-title">${bs.frontendUI.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-dim);">${bs.frontendUI.desc}</p>
        </div>
      </div>
      <div class="bento-chips-cloud">
        ${bs.frontendUI.skills.map(s => `
          <span class="interactive-chip"><span class="chip-dot" style="background: var(--accent-cyan);"></span>${s}</span>
        `).join('')}
      </div>
    </div>

    <!-- 5. Cloud, DevOps & Databases (Span 4) -->
    <div class="bento-cell bento-span-4" data-tilt>
      <div class="bento-cell-header">
        <div class="bento-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
        </div>
        <div>
          <h3 class="bento-cell-title">${bs.cloudDevOps.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-dim);">${bs.cloudDevOps.desc}</p>
        </div>
      </div>
      <div class="bento-chips-cloud">
        ${bs.cloudDevOps.skills.map(s => `
          <span class="interactive-chip"><span class="chip-dot"></span>${s}</span>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects-container');
  if (!container || !profileData.projects) return;

  container.innerHTML = profileData.projects.map(proj => `
    <article class="project-showcase-card" data-tilt>
      <div class="project-card-top">
        <span class="project-category-badge">${proj.categoryBadge}</span>
        <span class="live-pill"><span class="live-pulse"></span>Active System</span>
      </div>

      <h3 class="project-name">${proj.title}</h3>
      <p class="project-hook">${proj.hook}</p>

      <div class="project-summary-box">
        <div class="project-summary-label">Problem &rarr; Engineering Solution</div>
        <p class="project-summary-text">${proj.problemSolution.solution}</p>
      </div>

      <div style="margin-bottom: 1rem;">
        <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.6rem;">Key Architectural Highlights:</span>
        <ul class="project-arch-list">
          ${proj.highlights.map(h => `
            <li class="project-arch-item">
              <span class="arch-bullet">&bull;</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="project-metrics-strip">
        ${proj.metrics.map(m => `
          <span class="metric-pill"><strong>${m.val}</strong> ${m.label}</span>
        `).join('')}
      </div>

      <div class="project-tags-cloud">
        ${proj.technologies.map(t => `<span class="project-tool-tag">${t}</span>`).join('')}
      </div>

      <div class="project-actions-row">
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-frosted-secondary btn-sm" title="View Source on GitHub">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          Repository
        </a>
        <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-glow-primary btn-sm" title="Launch Demo">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
          Live Demo
        </a>
        <button class="icon-btn" onclick="openProjectModal('${proj.id}')" title="Technical Deep Dive" style="margin-left: auto;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </button>
      </div>
    </article>
  `).join('');
}

function renderExperienceTimeline() {
  const container = document.getElementById('experience-timeline-container');
  if (!container || !profileData.experienceTimeline) return;

  container.innerHTML = profileData.experienceTimeline.map(item => `
    <div class="timeline-milestone">
      <div class="timeline-glowing-node"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <span class="timeline-role">${item.role}</span>
          <span class="timeline-meta">${item.period}</span>
        </div>
        <div class="timeline-org">${item.org} &bull; <span style="color: var(--text-dim); font-weight: 500;">${item.type}</span></div>
        <p class="timeline-desc">${item.desc}</p>
        <div class="timeline-pills-row">
          ${item.pills.map(p => `
            <span class="project-tool-tag" style="background: rgba(139, 92, 246, 0.08); border-color: rgba(139, 92, 246, 0.25); color: var(--accent-violet-light);">${p}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   ATS Print CV Builder
   ========================================================================== */
function renderPrintView() {
  const container = document.getElementById('print-cv-view');
  if (!container) return;

  const p = profileData.personal;

  const skillsRows = [
    { cat: "Programming Languages", val: "C, C++, Java, Python, SQL" },
    { cat: "Databases & Storage", val: "MySQL, Relational Database Management Systems (RDBMS)" },
    { cat: "AI, ML & Deep Learning", val: "Natural Language Processing, Computer Vision, PyTorch, Scikit-learn, LinUCB" },
    { cat: "Web Development", val: "HTML5, CSS3, JavaScript, FastAPI, Flask, Streamlit" },
    { cat: "Developer Tools", val: "Git, GitHub, Git Bash, VS Code, Docker, Linux/Bash, Jupyter Notebook" },
    { cat: "Core CS Concepts", val: "Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), OS" },
    { cat: "Soft Skills", val: "Analytical Problem Solving, Adaptability, Critical Thinking, Team Collaboration" }
  ].map(s => `
    <tr>
      <td class="skill-cat">${s.cat}:</td>
      <td class="skill-vals">${s.val}</td>
    </tr>
  `).join('');

  const projectsHtml = profileData.projects.map(proj => `
    <div class="cv-print-item">
      <div class="cv-print-item-header">
        <div>
          <span class="cv-print-item-title">${proj.title}</span>
          <a href="${proj.github}" class="cv-print-link">[GitHub]</a>
        </div>
        <span class="cv-print-date">2026</span>
      </div>
      <ul>
        ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="cv-print-tech-stack">
        <strong>Tech Stack:</strong> ${proj.technologies.join(', ')}.
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <header class="cv-print-header">
      <div class="cv-print-header-grid">
        <div class="cv-print-header-left">
          <h1 class="cv-print-name">${p.name}</h1>
          <div class="cv-print-contact-line">
            <span class="label">LinkedIn:</span> <a href="${p.linkedin}">${p.linkedinDisplay}</a>
          </div>
          <div class="cv-print-contact-line">
            <span class="label">GitHub:</span> <a href="${p.github}">${p.githubDisplay}</a>
          </div>
          <div class="cv-print-contact-line">
            <span class="label">Portfolio:</span> <a href="${p.portfolio}">${p.portfolioDisplay}</a>
          </div>
        </div>
        <div class="cv-print-header-right">
          <div class="cv-print-contact-line">
            <span class="label">E-Mail:</span> <a href="mailto:${p.email}">${p.email}</a>
          </div>
          <div class="cv-print-contact-line">
            <span class="label">Mobile:</span> <span>${p.phone}</span>
          </div>
        </div>
      </div>
    </header>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">SKILLS</h2>
      <table class="cv-print-skills-table">
        ${skillsRows}
      </table>
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">PROJECTS</h2>
      ${projectsHtml}
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">TRAINING</h2>
      <div class="cv-print-item">
        <div class="cv-print-item-header">
          <span class="cv-print-item-title">AI Engineer Launchpad Program – Lovely Professional University</span>
          <span class="cv-print-date">Aug' 2026</span>
        </div>
        <ul>
          <li>Completed an intensive 50-hour technical training curriculum focused on Large Language Models (LLMs), Agentic AI workflows, and modern software deployment architectures.</li>
          <li>Built enterprise-ready application integrations utilizing prompt engineering, retrieval-augmented generation (RAG), and structured API schemas.</li>
        </ul>
        <div class="cv-print-tech-stack">
          <strong>Key Competencies:</strong> Large Language Models, Agentic AI, Prompt Engineering, API Integration, System Architecture.
        </div>
      </div>
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">CERTIFICATIONS</h2>
      <div class="cv-print-certs-list">
        <div class="cv-print-cert-item">
          <span>• <strong>Generative AI for Beginners</strong> – Infosys Springboard</span>
          <span class="cv-print-date">Aug' 2026</span>
        </div>
        <div class="cv-print-cert-item">
          <span>• <strong>AI for Everyone: Understanding and Applying the Basics</strong> – Infosys Springboard</span>
          <span class="cv-print-date">Aug' 2026</span>
        </div>
        <div class="cv-print-cert-item">
          <span>• <strong>Yuva AI for All</strong> – nasscom futureSkills Prime / INDIAai</span>
          <span class="cv-print-date">Feb' 2026</span>
        </div>
      </div>
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">ACHIEVEMENTS</h2>
      <ul>
        <li><strong>LeetCode 50 Days Badge (2026)</strong>: Maintained continuous problem-solving consistency across advanced Data Structures and Algorithms.</li>
        <li><strong>Solved 200+ algorithmic problems</strong> across LeetCode, GeeksforGeeks, and CodeChef focusing on Dynamic Programming, Trees, and Graphs.</li>
      </ul>
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">EDUCATION</h2>
      <div class="cv-print-edu-block">
        <div class="cv-print-edu-row">
          <span class="cv-print-edu-school">Lovely Professional University</span>
          <span class="cv-print-edu-loc">Phagwara, Punjab</span>
        </div>
        <div class="cv-print-edu-sub">
          <span>Bachelor of Technology in Computer Science and Engineering — <strong>CGPA: 7.65</strong></span>
          <span class="cv-print-date">Aug' 2024 – Present</span>
        </div>
      </div>
      <div class="cv-print-edu-block">
        <div class="cv-print-edu-row">
          <span class="cv-print-edu-school">Narayana Junior College</span>
          <span class="cv-print-edu-loc">Poranki, Andhra Pradesh</span>
        </div>
        <div class="cv-print-edu-sub">
          <span>Intermediate (12th Grade) — <strong>Percentage: 85%</strong></span>
          <span class="cv-print-date">Mar' 2024</span>
        </div>
      </div>
    </section>
  `;
}

/* ==========================================================================
   Interactive 3D Card Tilt Effect on Hover
   ========================================================================== */
function setupTiltEffect() {
  const cards = document.querySelectorAll('[data-tilt]');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   Interactive Contact Form & Clipboard Copy
   ========================================================================== */
function setupContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
        Sending...
      `;
      
      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Message Received!
        `;
        showToast("Message received! Thank you for reaching out.");
        form.reset();
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 3500);
      }, 900);
    });
  }

  // Copy Email to Clipboard
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = profileData.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast("Copied Talupulayaswanth13@gmail.com to clipboard!");
      }).catch(() => {
        showToast("Email: Talupulayaswanth13@gmail.com");
      });
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   Interactions, Modals & Active Scroll Sync
   ========================================================================== */
function setupInteractions() {
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const printBtns = document.querySelectorAll('.trigger-print-cv');
  printBtns.forEach(b => b.addEventListener('click', () => window.print()));

  // Active Navbar state updating on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link-item a[href*="#${sectionId}"]`);
      if (navItem && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link-item a').forEach(a => a.classList.remove('active'));
        navItem.classList.add('active');
      }
    });
  });

  // Modal Handlers
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

function openProjectModal(projectId) {
  const proj = profileData.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-dynamic-body');
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
      <span class="project-category-badge">${proj.categoryBadge}</span>
      <span class="live-pill"><span class="live-pulse"></span>Active Project</span>
    </div>

    <h2 style="font-size: 1.85rem; margin-bottom: 0.6rem;">${proj.title}</h2>
    <p style="color: var(--accent-cyan-light); font-weight: 500; margin-bottom: 1.5rem;">${proj.hook}</p>

    <div class="project-summary-box">
      <div class="project-summary-label">Problem &rarr; Architecture Solution</div>
      <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65;">${proj.problemSolution.solution}</p>
    </div>

    <h4 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--text-bright);">Architectural Highlights & Innovations</h4>
    <ul style="list-style: none; margin-bottom: 1.75rem;">
      ${proj.highlights.map(h => `
        <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.92rem; color: var(--text-muted); margin-bottom: 0.5rem;">
          <span style="color: var(--accent-cyan); font-weight: bold;">&rarr;</span>
          <span>${h}</span>
        </li>
      `).join('')}
    </ul>

    <h4 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--text-bright);">Technologies & Tooling</h4>
    <div class="project-tags-cloud" style="margin-bottom: 2rem;">
      ${proj.technologies.map(t => `<span class="project-tool-tag" style="background: rgba(139, 92, 246, 0.1); border-color: rgba(139, 92, 246, 0.3); color: var(--text-bright);">${t}</span>`).join('')}
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-frosted-secondary btn-sm">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        GitHub Repository
      </a>
      <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-glow-primary btn-sm">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
        Live Interactive Demo
      </a>
      <button class="btn btn-frosted-secondary btn-sm" onclick="closeProjectModal()" style="margin-left: auto;">Close</button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
