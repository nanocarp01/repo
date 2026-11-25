// Textos en inglés. El español es el contenido original del HTML y se guarda al cargar.
const EN = {
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.stack": "Stack",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  "hero.status": "Backend Developer · currently at Degestec",
  "hero.lead": "I build APIs, wallets and microservices for online gaming platforms, with a focus on security, concurrency and making sure the numbers always add up.",
  "hero.cta1": "View experience",
  "hero.cta2": "Let's talk",

  "stats.months": "months in iGaming backend",
  "stats.commits": "commits in production",
  "stats.repos": "repositories",
  "stats.services": "microservices built from scratch",

  "about.title": "About me",
  "about.p1": "I'm a backend developer focused on <strong>PHP/Laravel</strong> and <strong>Node.js/TypeScript</strong>. Since June 2025 I've been working at Degestec, in the online gaming and bingo industry: I develop the core backend of an online casino platform and contribute to designing its microservices from scratch.",
  "about.p2": "I enjoy work where details matter: balances that can't be duplicated, transactions that arrive late, webhooks that must be verified and financial reports that have to be exact. Before that I worked in Valencia integrating lead-generation APIs, CRMs and n8n automations, and in Mendoza (Argentina) as a full-stack developer connecting real-world systems —electronic invoicing with AFIP, payment providers, Mikrotik devices and biometric clocks over SSH. I keep learning Python.",

  "focus.1.t": "Wallets & payments",
  "focus.1.d": "Multi-currency wallets (balance, bonus, free spins), deposits, withdrawals and bank reconciliation.",
  "focus.2.t": "Integrations",
  "focus.2.d": "Seamless wallet with game aggregators and providers: idempotency, HMAC signing and late transactions.",
  "focus.3.t": "Microservices",
  "focus.3.d": "Services in Node.js, TypeScript, Prisma and Kafka: async messaging, signed webhooks and the outbox pattern.",
  "focus.4.t": "Security",
  "focus.4.d": "SSRF protection, refresh token rotation, rate limiting, 2FA and sensitive data kept out of logs.",

  "exp.title": "Experience",
  "exp.1.date": "Jun 2025 — present",
  "exp.1.summary": "Backend for an online casino platform and bingo hall management systems, in a microservices ecosystem.",
  "exp.1.b1": "Core casino backend (Laravel 12): player and back-office API, multi-currency wallets, deposits and withdrawals, reports and real-time updates with Laravel Reverb.",
  "exp.1.b2": "Seamless integration with game aggregators and providers: idempotent wallet, HMAC v2 signing, concurrency control and late transactions.",
  "exp.1.b3": "Contributed to designing and building microservices from scratch (Node.js, TypeScript, Prisma, Kafka), with signed webhooks and anti-replay protection.",
  "exp.1.b4": "Financial and regulatory reports for several markets (Spain and Chile) and a payments platform with bank reconciliation.",
  "exp.1.b5": "Quality: Pest tests, PHPStan static analysis, OpenAPI, CI and Conventional Commits.",
  "exp.2.date": "Mar 2024 — May 2025",
  "exp.2.place": "Valencia, Spain",
  "exp.2.title": "Junior Web Developer",
  "exp.2.summary": "Lead-generation APIs, process automation and integration with CRMs and external platforms.",
  "exp.2.b1": "Integrated and maintained multiple APIs for lead generation and data sync between external platforms and in-house systems.",
  "exp.2.b2": "Process automation with n8n, improving operational efficiency in business-critical workflows.",
  "exp.2.b3": "Connected the backend to external services such as Tipimail, Bitrix and other automation and CRM platforms.",
  "exp.2.b4": "Optimized and refactored internal systems to scale growing digital products.",
  "exp.2.b5": "Implemented cookie consent banners with Cookiebot for company projects.",

  "exp.3.date": "Jan 2022 — Mar 2023",
  "exp.3.title": "Full Stack Developer",
  "exp.3.summary": "Internal systems for an internet service provider: billing, collections, network and staff.",
  "exp.3.b1": "Built the electronic invoicing system connected to the AFIP (Argentine tax authority) Web Service.",
  "exp.3.b2": "SSH communication with routers to suspend service or throttle bandwidth.",
  "exp.3.b3": "Generated payment files with customer debts for several payment providers, and imported their responses to reconcile who had paid.",
  "exp.3.b4": "Extracted queues from the Mikrotik traffic controller and synced them with the database.",
  "exp.3.b5": "Sync with biometric clocks for employee attendance tracking, and contributed to the inventory system.",

  "stack.title": "Stack",
  "stack.data": "Data & messaging",
  "stack.quality": "Quality & infrastructure",

  "projects.title": "Projects",

  "contact.title": "Contact",
  "contact.lead": "Have a project or an offer? Drop me a line and I'll get back to you soon.",
  "form.name": "Name",
  "form.message": "Message",
  "form.send": "Send message",

  "footer.top": "Back to top ↑",
};

const i18nNodes = document.querySelectorAll("[data-i18n]");
const ES = {};
i18nNodes.forEach((el) => { ES[el.dataset.i18n] = el.innerHTML.trim(); });

function setLang(lang) {
  const dict = lang === "en" ? EN : ES;
  i18nNodes.forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  try { localStorage.setItem("lang", lang); } catch (e) { /* sin storage */ }
}

document.querySelectorAll(".lang__btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (e) { /* sin storage */ }
if (savedLang === "en") setLang("en");

// Navbar: fondo al hacer scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menú móvil
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

function setMenu(open) {
  links.classList.toggle("is-open", open);
  nav.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
}
toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
links.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });

// Link activo según la sección visible
const navAnchors = links.querySelectorAll("a");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach((a) => {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

// Animación de aparición
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (el.closest(".hero") ? i * 80 : 0) + "ms";
  revealObserver.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();
