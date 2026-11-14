/* ====== CONTENU — modifiez uniquement cette partie ====== */

const SKILLS = [
  { title: "Cloud & Infrastructure", items: ["AWS", "Azure", "OpenStack", "Kubernetes", "Docker", "Helm"] },
  { title: "DevOps & Automatisation", items: ["Terraform", "Ansible", "Jenkins", "GitLab CI", "SonarQube"] },
  { title: "Développement", items: ["Python", "Spring Boot", "Angular", "FastAPI"] },
  { title: "IA & Data", items: ["PyTorch", "Transformers", "LLMs", "YOLO", "XGBoost", "MLflow"] },
  { title: "Monitoring", items: ["Prometheus", "Grafana"] }
];

const PROJECTS = [
  {
    cat: "IA & Data", title: "Pipeline MLOps — prédiction du churn télécom",
    desc: "Pipeline complet de prédiction du churn sur ~50 000 clients (5 jeux de données réels), méthodologie CRISP-DM, XGBoost retenu, déploiement avec MLflow et FastAPI.",
    tech: ["Python", "XGBoost", "MLflow", "FastAPI"], link: "https://lnkd.in/p/eMPSPkFa", linkLabel: "Voir le post LinkedIn →"
  },
  {
    cat: "Cloud & DevOps", title: "Infrastructure cloud privée",
    desc: "Conception et mise en place d'une infrastructure cloud privée. Architecture et détails à retrouver dans le post LinkedIn du projet.",
    tech: ["Cloud privé", "Infrastructure"], link: "https://lnkd.in/p/eKsQzCQP", linkLabel: "Voir le post LinkedIn →"
  },
  {
    cat: "IA & Data", title: "Cam2Drive — chatbot IA multilingue",
    desc: "Chatbot avec analyse de sentiment en temps réel, priorisation des feedbacks critiques, module text-to-speech et dashboard admin (KPIs, exports CSV/Excel).",
    tech: ["Transformers", "PyTorch", "Gemini 1.5 Pro", "Full-Stack"], link: ""
  },
  {
    cat: "Cloud & DevOps", title: "Pipeline CI/CD Jenkins & Kubernetes",
    desc: "Chaîne complète pour une application Spring Boot + MySQL : build Maven, analyse SonarQube, image Docker poussée sur Docker Hub, déploiement sur Minikube et monitoring Grafana.",
    tech: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Grafana"], link: "https://github.com/AousNabli/Aous_devops"
  },
  {
    cat: "IA & Data", title: "AgriPredict — prédiction agricole",
    desc: "Concept de startup : application d'IA prédisant les cultures adaptées aux zones agricoles tunisiennes à partir du climat, du sol et de la météo.",
    tech: ["IA", "Data", "UI/UX"], link: ""
  }
];

const EXPERIENCES = [
  {
    when: "Juin 2026 · 2 mois", where: "Centre des Recherches Tunisie Télécom, Tunis",
    role: "Stage — MLOps & Data Science",
    points: [
      "Conception d'un pipeline MLOps de prédiction du churn (CRISP-DM, feature engineering).",
      "Entraînement de 4 modèles supervisés, sélection d'XGBoost, détection d'anomalies (K-Means, Isolation Forest).",
      "Déploiement avec MLflow, FastAPI et une interface Jinja2."
    ],
    tech: ["Python", "XGBoost", "MLflow", "FastAPI"]
  },
  {
    when: "Juin – Août 2025", where: "Acoba Tunisie",
    role: "Stage — Développeur IA & Full-Stack",
    points: [
      "Développement de Cam2Drive, chatbot IA multilingue avec analyse de sentiment en temps réel.",
      "Création d'un dashboard admin de suivi des KPIs et de génération de rapports CSV/Excel.",
      "Intégration d'un pipeline NLP (Transformers, PyTorch, Gemini 1.5 Pro) avec text-to-speech."
    ],
    tech: ["Transformers", "PyTorch", "Gemini", "Full-Stack"]
  }
];

/* La section Certifications s'affiche automatiquement dès que la liste n'est pas vide. */
const CERTS = [
  { title: "Cloud Security Foundations", issuer: "Badge de formation", link: "https://lnkd.in/p/eYYsimZn" },
  { title: "AWS Academy Graduate — Cloud Operations", issuer: "AWS Academy", link: "https://lnkd.in/p/eHd97S3Z" },
  { title: "Hedera Certified Foundation (HCF)", issuer: "Hedera", link: "https://lnkd.in/p/eDz9mHid" },
  { title: "Hedera Certified Developer Associate (HCDA)", issuer: "Hedera", link: "https://lnkd.in/p/eDz9mHid" }
];

/* ====== LOGIQUE — pas besoin d'y toucher ====== */
const $ = (s) => document.querySelector(s);
const chips = (a) => `<div class="chips">${a.map((t) => `<span class="chip">${t}</span>`).join("")}</div>`;

$("#skills").innerHTML = SKILLS.map((s) =>
  `<div class="skill reveal"><h3>${s.title}</h3>${chips(s.items)}</div>`).join("");

const cats = ["Tous", ...new Set(PROJECTS.map((p) => p.cat))];
$("#filters").innerHTML = cats.map((c, i) => `<button class="filter${i ? "" : " on"}" data-c="${c}">${c}</button>`).join("");
$("#projects").innerHTML = PROJECTS.map((p) => `
  <article class="card reveal" data-c="${p.cat}">
    <span class="cat">${p.cat}</span><h3>${p.title}</h3><p>${p.desc}</p>${chips(p.tech)}
    ${p.link ? `<a class="more" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel || "Voir le code →"}</a>` : ""}
  </article>`).join("");
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter"); if (!b) return;
  document.querySelectorAll(".filter").forEach((x) => x.classList.toggle("on", x === b));
  document.querySelectorAll("#projects .card").forEach((c) =>
    c.classList.toggle("hide", b.dataset.c !== "Tous" && c.dataset.c !== b.dataset.c));
});

$("#experience").innerHTML = EXPERIENCES.map((j) => `
  <article class="job reveal">
    <div><div class="when">${j.when}</div><div class="where">${j.where}</div></div>
    <div><h3>${j.role}</h3><ul>${j.points.map((p) => `<li>${p}</li>`).join("")}</ul>${chips(j.tech)}</div>
  </article>`).join("");
$("#stat-count").textContent = `${EXPERIENCES.length} stages`;

if (CERTS.length) {
  $("#certifications").hidden = false;
  $("#certs").innerHTML = CERTS.map((c) => `
    <article class="card reveal"><span class="cat">${c.issuer}</span><h3>${c.title}</h3>
    ${c.link ? `<a class="more" href="${c.link}" target="_blank" rel="noopener">Voir le badge →</a>` : ""}</article>`).join("");
} else {
  $("#nav-certs").style.display = "none";
}

// menu mobile + ombre de la barre
const menu = $("#menu"), burger = $("#burger");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", (e) => { if (e.target.tagName === "A") menu.classList.remove("open"); });
addEventListener("scroll", () => $("#nav").classList.toggle("scrolled", scrollY > 10), { passive: true });

// apparition au scroll
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// formulaire -> ouvre l'application mail
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:Nabli.Aous@esprit.tn?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(body)}`;
});