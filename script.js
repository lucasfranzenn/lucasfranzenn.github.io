const english = {
  skipLink: 'Skip to content',
  hello: "Hi, I'm",
  role: 'Full Stack Developer',
  intro: 'I focus on backend development. I also build web interfaces and work with data to deliver complete applications.',
  navAbout: 'About',
  navExperience: 'Experience',
  navProject: 'Project',
  navEducation: 'Education',
  location: 'Quedas do Iguaçu, PR · Brazil',
  aboutTitle: 'About',
  aboutOne: "I'm a software developer with professional experience primarily in backend work, databases, and systems integration. I've maintained legacy software, migrated data, and built internal tools. I also have a solid foundation in web development and enjoy working across an application from end to end.",
  aboutTwoStart: "I'm currently building the future official online store for ",
  aboutTwoEnd: ". In this project, I connect a React and TypeScript frontend to a C#/.NET API and PostgreSQL. I'm seeking full stack roles, with a particular interest in backend development.",
  focusBackend: 'Backend and APIs',
  focusWeb: 'Web and interfaces',
  focusData: 'Data and integration',
  experienceTitle: 'Experience',
  workDate: 'AUG 2024 — MAY 2025',
  workRole: 'Junior Software Developer',
  workOne: 'I maintained a legacy VB6 system, implementing features and fixing defects in the software and its database routines.',
  workTwo: 'I also migrated data from third-party systems and built an internal tool to support imports using FastReport, DevExpress .NET, SQL connectors, and APIs.',
  projectTitle: 'Featured project',
  projectCaption: 'Screenshot of the local development version (Portuguese UI)',
  projectStatus: 'In development',
  projectType: 'Future official store',
  projectOne: "I'm building the e-commerce site that will become Marfran Imports' official store for commercial use. The project includes a catalog, search filters, product pages, an admin dashboard, and an initial order flow. The React and TypeScript frontend connects to a C#/.NET REST API and PostgreSQL.",
  projectTwo: 'The project includes automated tests with Vitest and React Testing Library on the frontend and xUnit for the API.',
  projectThree: 'The application currently runs locally during development. I plan to deploy it to a VPS using Docker.',
  educationTitle: 'Education',
  prattDate: 'AUG 2025 — MAY 2026',
  prattCourse: 'Computer Science · studies discontinued',
  prattLocation: 'Pratt, Kansas, USA',
  utfprDate: 'FEB 2023 — MAY 2025',
  utfprCourse: 'Systems Analysis and Development · completed 3 semesters, enrollment paused',
  skillsTitle: 'Skills',
  currentStack: 'CURRENT STACK',
  dataSystems: 'DATA AND SYSTEMS',
  dataSkills: 'SQL · VB6 · Data migration · FastReport · DevExpress',
  testsTools: 'TESTING AND TOOLS',
  languagesLabel: 'LANGUAGES',
  languages: 'Native Portuguese · Advanced English',
  contactKicker: '05 / NEXT STEP',
  contactTitle: "Let's talk",
  contactIntro: "I'm seeking full stack opportunities, especially work involving backend development, web applications, and data. If my experience is a fit for your team, get in touch.",
  emailButton: 'Send an email',
  footerMade: 'Built by Lucas Franzen Nori',
  backToTop: 'Back to top ↑',
};

const translatedElements = [...document.querySelectorAll('[data-i18n]')];
const portugueseText = new Map(translatedElements.map((element) => [element, element.textContent]));
const translatedAttributes = [
  ['.intro', 'aria-label', 'Introduction'],
  ['.brand', 'aria-label', 'LF/N — Lucas Franzen Nori, back to top'],
  ['.section-nav', 'aria-label', 'Main navigation'],
  ['.social-links', 'aria-label', 'Professional profiles'],
  ['.social-links a[href^="https://github.com"]', 'aria-label', 'Lucas Franzen Nori on GitHub, opens in a new tab'],
  ['.social-links a[href^="https://www.linkedin.com"]', 'aria-label', 'Lucas Franzen Nori on LinkedIn, opens in a new tab'],
  ['.social-links a[href^="mailto:"]', 'aria-label', 'Email Lucas Franzen Nori'],
  ['.focus-list', 'aria-label', 'Areas of work'],
  ['#experiencia .tag-list', 'aria-label', 'Technologies used'],
  ['#projeto .tag-list', 'aria-label', 'Project technologies'],
  ['.project-figure img', 'alt', 'Screenshot of the Marfran Imports home page running locally, showing search, category navigation, and the store introduction'],
];
const originalAttributes = translatedAttributes.map(([selector, attribute]) => document.querySelector(selector).getAttribute(attribute));
const metadata = [
  [document.querySelector('meta[name="description"]'), 'content', 'Portfolio of Lucas Franzen Nori, a full stack developer focused on backend development with experience in web applications, databases, and systems integration.'],
  [document.querySelector('meta[property="og:title"]'), 'content', 'Lucas Franzen Nori — Full Stack Developer'],
  [document.querySelector('meta[property="og:description"]'), 'content', 'Backend, web development, and data. Explore my experience and the Marfran Imports project.'],
];
const originalMetadata = metadata.map(([element, attribute]) => element.getAttribute(attribute));
const originalTitle = document.title;
const languageButton = document.querySelector('.language-toggle');
const languageStatus = document.querySelector('#language-status');

function setLanguage(language, announce = false) {
  const isEnglish = language === 'en';
  translatedElements.forEach((element) => {
    element.textContent = isEnglish ? english[element.dataset.i18n] : portugueseText.get(element);
  });
  translatedAttributes.forEach(([selector, attribute, englishValue], index) => {
    document.querySelector(selector).setAttribute(attribute, isEnglish ? englishValue : originalAttributes[index]);
  });
  metadata.forEach(([element, attribute, englishValue], index) => {
    element.setAttribute(attribute, isEnglish ? englishValue : originalMetadata[index]);
  });
  document.title = isEnglish ? 'Lucas Franzen Nori — Full Stack Developer' : originalTitle;
  document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';
  languageButton.dataset.currentLang = isEnglish ? 'en' : 'pt';
  languageButton.setAttribute('aria-label', isEnglish ? 'Switch to Portuguese' : 'Mudar para inglês');
  if (announce) languageStatus.textContent = isEnglish ? 'Language changed to English' : 'Idioma alterado para português';
}

let savedLanguage = 'pt';
try {
  if (localStorage.getItem('portfolio-language') === 'en') savedLanguage = 'en';
} catch (_) {
  // The toggle still works when browser storage is unavailable.
}
setLanguage(savedLanguage);

languageButton.addEventListener('click', () => {
  const nextLanguage = document.documentElement.lang === 'en' ? 'pt' : 'en';
  setLanguage(nextLanguage, true);
  try {
    localStorage.setItem('portfolio-language', nextLanguage);
  } catch (_) {
    // Keep the selected language for this visit even without persistence.
  }
});

const sectionLinks = [...document.querySelectorAll('.section-nav a')];
const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    sectionLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, .25, .5, .75, 1] });
  sections.forEach((section) => observer.observe(section));
}
