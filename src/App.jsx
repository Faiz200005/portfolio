import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  GitBranchIcon,
  Globe2,
  Mail,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    level: "Avancé",
    description:
      "Interfaces modernes, interactions fluides et expérience utilisateur soignée sur tous les écrans.",
    items: ["React", "Angular", "Vite", "JavaScript", "UI / UX"],
  },
  {
    title: "Backend & API",
    icon: Brain,
    level: "Solide",
    description:
      "Développement de services robustes, d’API REST et d’architectures applicatives fiables.",
    items: ["Laravel", "Symfony", "Node.js", "C#", "API REST"],
  },
  {
    title: "IA & Écosystème",
    icon: Globe2,
    level: "Curieux",
    description:
      "Mise en œuvre de solutions intelligentes, automatisation et intégration de technologies modernes.",
    items: ["IA", "Docker", "Git", "Portainer"],
  },
];

const experiences = [
  {
    title: "Développeur full-stack | Depuis Juin 2026 chez DOFIC",
    period: "Juin 2026 – Aujourd’hui",
    description:
      "Laravel • Docker • API REST • Portainer — Développement de fonctionnalités back-end, déploiement de conteneurs, intégration d’API REST et collaboration via Git sur une plateforme IA.",
  },
  {
    title: "Développeur full-stack | Août 2023 – Septembre 2023",
    period: "2023",
    description:
      "ES INTER – Cybersécurité (Cotonou) — Développement d’une plateforme web Angular SPA, conception et intégration d’une API REST, optimisation des performances et déploiement avec Docker.",
  },
  {
    title: "Expériences antérieures",
    period: "2019 – 2024",
    description:
      "Agent de tri postal – La Poste, Vendeur – Sonaec et stage chez ES INTER, avec une forte implication dans l’organisation, l’accueil client et la découverte du terrain technique.",
  },
];

const projects = [
  {
    title: "Application web pour une entreprise de déménagement",
    image: "/dev.jpg",
    description:
      "Développement d’une application web avec PHP/Symfony, création de pages et fonctionnalités back-end/front-end, gestion de bases MySQL et PostgreSQL.",
    tags: ["PHP", "Symfony", "MySQL", "PostgreSQL", "HTML", "CSS"],
    github: "https://github.com/",
    demo: "#contact",
  },
  {
    title: "Plateforme de recherche de borne de recharge",
    image: "/jeux.jpg",
    description:
      "Développement d’une API REST exploitant des données OpenData, intégration de données et structuration des échanges JSON, déploiement sur Apache Tomcat avec optimisation Docker.",
    tags: ["Java", "OpenData", "Leaflet", "MySQL", "Docker"],
    github: "https://github.com/",
    demo: "#contact",
  },
  {
    title: "Système de paiement sans contact par badge RFID",
    image: "/robot.mp4",
    description:
      "Développement d’une application de paiement avec authentification par badge RFID sur Raspberry Pi, API + gestion de comptes utilisateurs, architecture transposable vers Django/FastAPI.",
    tags: ["Python", "Django", "Raspberry Pi", "RFID"],
    github: "https://github.com/",
    demo: "#contact",
  },
];

const timelineItems = [
  {
    title: "Étudiant ingénieur ISN",
    period: "2022 – aujourd’hui",
    description:
      "Spécialisation en ingénierie des services du numérique à l’ESIGELEC, Rouen.",
    icon: GraduationCap,
  },
  {
    title: "Diplôme de baccalauréat général",
    period: "2021 – 2022",
    description:
      "Obtention du bac général au lycée EFE Montaigne, Cotonou, avec une forte appétence pour l’informatique.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Premières expériences professionnelles",
    period: "2019 – 2024",
    description:
      "Expériences dans la logistique, la vente et la découverte du terrain autour des enjeux techniques.",
    icon: Sparkles,
  },
];

const interests = [
  { title: "Informatique & développement", image: "/dev.jpg", text: "Veille sur les nouvelles technologies, frameworks et outils liés au développement logiciel et au web." },
  { title: "Jeux vidéo", image: "/jeux.jpg", text: "Intérêt pour les jeux vidéo, l’univers compétitif et la logique derrière le game design." },
  { title: "Sport", image: "/foot.jpeg", text: "Pratique sportive régulière pour garder un bon équilibre entre travail, énergie et concentration." },
  { title: "Voyages", image: "/voyage.jpeg", text: "Passionné par la découverte de nouvelles cultures et l’ouverture à d’autres modes de vie." },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function App() {
  const currentYear = new Date().getFullYear();
  const [activeTab, setActiveTab] = useState("cv");
  const [showRobotVideo, setShowRobotVideo] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const words = ["full stack", "développeur IA", "ingénieur web", "créateur de solutions"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];
    let index = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      if (!deleting) {
        if (index < currentWord.length) {
          setDisplayedWord(currentWord.slice(0, index + 1));
          index += 1;
          timeoutId = setTimeout(tick, 90);
        } else {
          deleting = true;
          timeoutId = setTimeout(tick, 1100);
        }
      } else if (index > 0) {
        setDisplayedWord(currentWord.slice(0, index - 1));
        index -= 1;
        timeoutId = setTimeout(tick, 55);
      } else {
        deleting = false;
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    timeoutId = setTimeout(tick, 350);
    return () => clearTimeout(timeoutId);
  }, [wordIndex]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const changeTab = (tab) => {
    setActiveTab(tab);
    if (tab !== "projects") {
      setShowRobotVideo(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#about">
          <span className="brand-mark">FC</span>
          <span>
            <strong>Faïz Chabi-Imorou</strong>
            <small>Étudiant ingénieur ISN</small>
          </span>
        </a>

        <nav className="topbar-nav" aria-label="Navigation principale">
          <a href="#about" className={activeSection === "about" ? "active" : ""}>À propos</a>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Compétences</a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projets</a>
          <a href="#timeline" className={activeSection === "timeline" ? "active" : ""}>Parcours</a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
        </nav>

        <a className="topbar-cta" href="#contact">
          Prendre contact
        </a>
      </header>

      <main className="main-content">
        <section className="hero-section" id="about">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="pill">Disponible pour des projets concrets</div>
            <h1>
              Je conçois des applications web <span>{displayedWord || "full stack"}</span>
            </h1>
            <p>
              Développeur full stack, curieux des architectures web et de l’IA, je conçois des produits fonctionnels, performants et prêts à évoluer, du back-end à l’expérience utilisateur.
            </p>
            <div className="hero-highlights">
              <span>Curieux</span>
              <span>Rigoureux</span>
              <span>Esprit d’équipe</span>
              <span>Anglais B1</span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explorer les projets <ArrowRight size={18} />
              </a>
              <a className="btn btn-secondary" href="#contact">
                Me contacter
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>4e année</strong>
                <span>ESIGELEC</span>
              </div>
              <div>
                <strong>3+</strong>
                <span>expériences</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>attention au détail</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="visual-card">
              <div className="visual-glow" />
              <img src="/profil.jpg" alt="Portrait de Faïz Chabi-Imorou" />
              <div className="visual-info">
                <div>
                  <p className="muted">Actuellement</p>
                  <h3>Ingénierie des services du numérique</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="Compétences"
            title="Des compétences pensées pour des produits premium"
            description="Chaque compétence est ici transformée en carte interactive, avec une approche claire et visuelle."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.article
                  className="skill-card"
                  key={skill.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8, rotateX: 4, rotateY: -4, scale: 1.01 }}
                >
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>
                  <div className="skill-head">
                    <h3>{skill.title}</h3>
                    <span>{skill.level}</span>
                  </div>
                  <p>{skill.description}</p>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section" id="journey">
          <SectionHeading
            eyebrow="Parcours"
            title="Un parcours structuré, clair et moderne"
            description="Le contenu de votre CV est ici recontextualisé dans une expérience plus immersive."
          />

          <div className="journey-shell">
            <div className="tabs" role="tablist" aria-label="Sections du parcours">
              <button
                className={activeTab === "cv" ? "tab active" : "tab"}
                onClick={() => changeTab("cv")}
                type="button"
              >
                CV
              </button>
              <button
                className={activeTab === "projects" ? "tab active" : "tab"}
                onClick={() => changeTab("projects")}
                type="button"
              >
                Projets
              </button>
              <button
                className={activeTab === "diploma" ? "tab active" : "tab"}
                onClick={() => changeTab("diploma")}
                type="button"
              >
                Diplôme
              </button>
              <button
                className={activeTab === "interests" ? "tab active" : "tab"}
                onClick={() => changeTab("interests")}
                type="button"
              >
                Centres d’intérêt
              </button>
            </div>

            <motion.div
              className="tab-panel"
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {activeTab === "cv" && (
                <div className="tab-content-grid">
                  {experiences.map((item) => (
                    <div className="info-card" key={item.title}>
                      <p className="info-badge">{item.period}</p>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "projects" && (
                <div className="tab-content-grid">
                  <div className="info-card wide">
                    <h3>Projets</h3>
                    <ul className="stack-list">
                      <li><strong>Application web pour une entreprise de déménagement</strong> : PHP/Symfony, MySQL, PostgreSQL, HTML, CSS.</li>
                      <li><strong>Plateforme de recherche de borne de recharge</strong> : Java, API/OpenData, Leaflet, MySQL, Docker.</li>
                      <li><strong>Système de paiement sans contact par badge RFID</strong> : Python, Django, Raspberry Pi, RFID, API et gestion de comptes utilisateurs.</li>
                    </ul>
                    {!showRobotVideo ? (
                      <button className="video-btn" onClick={() => setShowRobotVideo(true)} type="button">
                        Voir la vidéo du robot
                      </button>
                    ) : (
                      <div className="video-frame">
                        <button className="video-btn secondary" onClick={() => setShowRobotVideo(false)} type="button">
                          Masquer la vidéo
                        </button>
                        <video src="/robot.mp4" controls playsInline preload="metadata" />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "diploma" && (
                <div className="info-card wide">
                  <h3>Diplôme</h3>
                  <p>
                    Diplôme d’ingénieur – Ingénierie des Services du Numérique (ISN) à ESIGELEC, Rouen — 2022 à aujourd’hui (4e année / Master 1).
                  </p>
                  <p>
                    Baccalauréat général – EFE Montaigne, Cotonou (Bénin) — 2021 – 2022.
                  </p>
                </div>
              )}

              {activeTab === "interests" && (
                <div className="interests-grid">
                  {interests.map((interest) => (
                    <div className="interest-card" key={interest.title}>
                      <img src={interest.image} alt={interest.title} />
                      <h3>{interest.title}</h3>
                      <p>{interest.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading
            eyebrow="Projets"
            title="Des projets qui mettent en valeur le détail"
            description="Chaque projet est présenté comme une expérience premium, avec une forte identité visuelle et des interactions soignées."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.01 }}
              >
                <div className="project-media">
                  {project.image.endsWith(".mp4") ? (
                    <video src={project.image} autoPlay muted loop playsInline className="project-video-card" />
                  ) : (
                    <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
                  )}
                  <div className="project-overlay">
                    <div className="project-actions">
                      <a className="ghost-btn" href={project.github} target="_blank" rel="noreferrer">
                        <GitBranchIcon size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="timeline">
          <SectionHeading
            eyebrow="Timeline"
            title="Une progression fluide et cohérente"
            description="Le parcours est ici mis en avant avec une présentation claire, moderne et visuellement agréable."
          />

          <div className="timeline-list">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="timeline-item"
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="timeline-marker">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-shell">
            <motion.div
              className="contact-copy"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <p className="eyebrow">Contact</p>
              <h2>Discutons d’un projet, d’une idée ou d’une opportunité.</h2>
              <p>
                Intéressé(e) par mon profil ou par un projet ? N’hésitez pas à me contacter pour échanger.
              </p>
            </motion.div>

            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <a href="mailto:Wanrado.chabi@groupe-esigelec.org">
                <Mail size={18} /> Wanrado.chabi@groupe-esigelec.org
              </a>
              <a href="https://www.linkedin.com/in/fa%C3%AFz-chabi-3b367a131/" target="_blank" rel="noreferrer">
                <GitBranchIcon size={18} /> Profil LinkedIn
              </a>
              <div className="contact-details">
                <span>📍 Rouen, France</span>
                <span>📞 06 05 80 54 78</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {currentYear} — Portfolio de Faïz Chabi-Imorou</p>
      </footer>
    </div>
  );
}

export default App;
