/**
 * Portfolio & Web CV Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderCompetencies();
  renderProjects('all');
  renderAchievements();
  renderEducation();
  renderPrintView();
  setupEventListeners();
});

/* ==========================================================================
   Theme Management (Persistent Dark/Light)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Synchronize theme across multiple open tabs or windows
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
    btn.setAttribute('title', 'Switch to Dark Mode');
  } else {
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
    btn.setAttribute('title', 'Switch to Light Mode');
  }
}

/* ==========================================================================
   DOM Renderers
   ========================================================================== */
function renderProfile() {
  const p = profileData.personal;
  
  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = p.name;

  const heroRole = document.getElementById('hero-role');
  if (heroRole) heroRole.textContent = p.role;

  const heroBio = document.getElementById('hero-bio');
  if (heroBio) heroBio.textContent = p.summary;

  const statusText = document.getElementById('status-text');
  if (statusText) statusText.textContent = p.statusBadge;
}

function renderCompetencies() {
  const container = document.getElementById('competencies-container');
  if (!container) return;

  container.innerHTML = profileData.competencies.map(comp => {
    const iconSvg = getCategoryIcon(comp.icon);
    const skillsHtml = comp.skills.map(s => `
      <div class="skill-pill-item">
        <span class="skill-dot"></span>
        <span class="skill-name">${s.name}</span>
      </div>
    `).join('');

    return `
      <div class="comp-card">
        <div class="comp-icon-wrapper">
          ${iconSvg}
        </div>
        <h3 class="comp-title">${comp.title}</h3>
        <p class="comp-desc">${comp.summary}</p>
        <div class="skills-list">
          ${skillsHtml}
        </div>
      </div>
    `;
  }).join('');
}

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? profileData.projects 
    : profileData.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(proj => {
    const metricKeys = Object.keys(proj.metrics);
    const metricsHtml = metricKeys.map(k => `
      <div class="metric-pill">
        <strong>${proj.metrics[k]}</strong>
        <span>${formatMetricLabel(k)}</span>
      </div>
    `).join('');

    const tagsHtml = proj.technologies.slice(0, 4).map(t => `
      <span class="tech-tag">${t}</span>
    `).join('');

    return `
      <article class="project-card" data-category="${proj.category}">
        <span class="project-badge">${proj.badge}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.shortDesc}</p>
        
        <div class="project-metrics-strip">
          ${metricsHtml}
        </div>

        <div class="tech-tags">
          ${tagsHtml}
        </div>

        <div class="project-footer">
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${proj.id}')">
            Architecture & Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View Source on GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
        </div>
      </article>
    `;
  }).join('');
}

function renderAchievements() {
  const container = document.getElementById('achievements-container');
  if (!container) return;

  container.innerHTML = profileData.achievements.map(ach => `
    <div class="achievement-card">
      <div class="achievement-icon">
        ${getCategoryIcon(ach.icon)}
      </div>
      <div class="achievement-content">
        <span class="achievement-category">${ach.category}</span>
        <h4>${ach.title}</h4>
        <p class="achievement-desc">${ach.detail}</p>
        <span class="achievement-stat">${ach.stats}</span>
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container) return;

  container.innerHTML = profileData.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-duration">${edu.duration}</span>
        <h3 class="timeline-title">${edu.degree}</h3>
        <p class="timeline-sub">${edu.institution} &bull; <strong>${edu.grade}</strong></p>
        <p class="timeline-courses"><strong>Core Coursework:</strong> ${edu.courses}</p>
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
  const edu = profileData.education[0];

  const skillsRows = profileData.competencies.map(c => `
    <tr>
      <td class="skill-cat">${c.title}:</td>
      <td class="skill-vals">${c.skills.map(s => s.name).join(', ')}</td>
    </tr>
  `).join('');

  const projectsHtml = profileData.projects.map(proj => `
    <div class="cv-print-item">
      <div class="cv-print-item-header">
        <span class="cv-print-item-title">${proj.title}</span>
        <span class="cv-print-item-tech">${proj.technologies.join(', ')}</span>
      </div>
      <ul>
        ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const achievementsHtml = profileData.achievements.map(a => `
    <li><strong>${a.title}</strong> &mdash; ${a.detail} (${a.stats})</li>
  `).join('');

  container.innerHTML = `
    <header class="cv-print-header">
      <h1 class="cv-print-name">${p.name}</h1>
      <div class="cv-print-role">${p.role}</div>
      <div class="cv-print-contacts">
        <span>${p.location}</span> &bull;
        <a href="mailto:${p.email}">${p.email}</a> &bull;
        <a href="${p.github}">GitHub</a> &bull;
        <a href="${p.linkedin}">LinkedIn</a> &bull;
        <a href="${p.leetcode}">LeetCode</a>
      </div>
    </header>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">Professional Summary</h2>
      <p class="cv-print-summary">${p.summary}</p>
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">Technical Competencies</h2>
      <table class="cv-print-skills-table">
        ${skillsRows}
      </table>
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">Key Engineering Projects</h2>
      ${projectsHtml}
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">Problem Solving & Key Milestones</h2>
      <ul>
        ${achievementsHtml}
      </ul>
    </section>

    <section class="cv-print-section">
      <h2 class="cv-print-heading">Education</h2>
      <div class="cv-print-edu-row">
        <span>${edu.degree}</span>
        <span>${edu.duration}</span>
      </div>
      <div class="cv-print-edu-sub">
        <span>${edu.institution}</span>
        <span>${edu.grade}</span>
      </div>
    </section>
  `;
}

/* ==========================================================================
   Interactive Project Modal
   ========================================================================== */
function openProjectModal(projectId) {
  const proj = profileData.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-dynamic-body');
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <span class="project-badge" style="margin-bottom: 0.5rem;">${proj.badge}</span>
    <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem;">${proj.title}</h2>
    <p style="color: var(--accent-cyan); font-weight: 500; margin-bottom: 1.25rem;">${proj.tagline}</p>

    <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">${proj.fullDesc}</p>

    <h4 style="margin-bottom: 0.75rem; font-size: 1.1rem;">Engineering Highlights & Architecture</h4>
    <ul style="margin-left: 1.25rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
      ${proj.highlights.map(h => `<li style="margin-bottom: 0.4rem;">${h}</li>`).join('')}
    </ul>

    <h4 style="margin-bottom: 0.75rem; font-size: 1.1rem;">Tech Stack & Tooling</h4>
    <div class="tech-tags" style="margin-bottom: 2rem;">
      ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
    </div>

    <div style="display: flex; gap: 1rem;">
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        View Repository
      </a>
      <button class="btn btn-secondary btn-sm" onclick="closeProjectModal()">Close</button>
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

/* ==========================================================================
   Event Listeners & Controls
   ========================================================================== */
function setupEventListeners() {
  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Print CV trigger
  const printBtns = document.querySelectorAll('.trigger-print-cv');
  printBtns.forEach(b => b.addEventListener('click', () => window.print()));

  // Filter tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  // Modal close handlers
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

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(l => {
      l.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }
}

/* ==========================================================================
   Helper Utilities
   ========================================================================== */
function formatMetricLabel(key) {
  const map = {
    uplift: 'CTR Uplift',
    latency: 'Inference',
    coverage: 'Coverage',
    evalSpeed: 'Eval Speed',
    supportedLangs: 'Environments',
    concurrency: 'Throughput',
    screeningTime: 'Time Saved',
    accuracy: 'Model Precision',
    processed: 'Processed',
    throughput: 'Throughput',
    overhead: 'Sync Overhead'
  };
  return map[key] || key;
}

function getCategoryIcon(name) {
  const icons = {
    cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    layers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    brain: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8"/><path d="M12 21a9 9 0 0 1-9-9c0-3.5 2-6.5 5-8"/></svg>`,
    award: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    flame: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    trophy: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M18 4H6v7a6 6 0 0 0 12 0V4z"/></svg>`,
    'book-open': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  };
  return icons[name] || icons.cpu;
}
